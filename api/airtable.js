const Airtable = require("airtable");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base(process.env.AIRTABLE_BASE);

console.log("loaded airtable");

const airtableMiddleware = (app) => {
  app.post("/solutions", (req, res) => {
    const filters = req.body;

    console.log("filters", filters);

    const order =
      typeof filters.order === "string" &&
      (filters.order.toLowerCase() === "asc" ||
        filters.order.toLowerCase() === "desc")
        ? filters.order.toLowerCase()
        : "asc";

    let sorting = [];
    sorting = Array.isArray(filters.sort)
      ? filters.sort.map((item) => {
        return {field: item, direction: order }
      })
      : [{field: filters.sort, direction: order}];

    const search = filters.search && filters.search.toLowerCase();
    console.log('search',search)
    console.log('sorting',sorting)

    const region = filters.region;

    let accumulator = [];
    base("Solutions")
      .select({
        maxRecords: 9,
        view: "All Solutions",
        fields: [
          "Name",
          "Summary",
          "Featured",
          "Link",
          "Media",
          "Type",
          "Challenges addressed",
          "Stage",
        ],
        // filterByFormula: `"({Region} = ${region && region[0]})"`,
        filterByFormula: "SEARCH('" + search + "', LOWER({Name}))",
        // filterByFormula: "SEARCH('3D', {Name})",
        pageSize: 100,
        sort: sorting,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            console.log("Retrieved", record.get("Name"));
            accumulator.push(record._rawJson);
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
          return res.status(200).json({
            records: accumulator,
          });
        }
      );
  });

  app.post("/home-solutions", (req, res) => {
    let accumulator = [];
    base("Solutions")
      .select({
        maxRecords: 3,
        view: "All Solutions",
        fields: [
          "Name",
          "Summary",
          "Featured",
          "Link",
          "Media",
          "Type",
          "Challenges addressed",
          "Stage",
        ],
        // filterByFormula: "({Featured} = true)",
        pageSize: 100,
        sort: [{ field: "Media", direction: "desc" }],
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            console.log("Retrieved", record.get("Name"));
            accumulator.push(record._rawJson);
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
          return res.status(200).json({
            records: accumulator,
          });
        }
      );
  });
};

exports.airtableMiddleware = airtableMiddleware;

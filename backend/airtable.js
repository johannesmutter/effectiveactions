const Airtable = require("airtable");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyRPtrDfbRcbRCPA",
});
const base = Airtable.base("appW04rbe6P6gP5wR");

console.log("loaded airtable");

const airtableMiddleware = (app) => {
  app.post("/solutions", (req, res) => {
    const which = req.body.which;
    let view = "";
    let sort = [];
    if (which == "newest") {
      view = "Latest added";
      sort = [{ field: "Added Date", direction: "asc" }];
    } else if (which == "validated") {
      view = "Featured Solutions";
      sort = [
        { field: "Featured", direction: "desc" },
        { field: "Name", direction: "asc" },
      ];
    } else {
      view = "All Solutions";
      sort = [{ field: "Name", direction: "asc" }];
    }

    let accumulator = [];
    base("Solutions")
      .select({
        maxRecords: 3,
        view: view,
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
        sort: sort,
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

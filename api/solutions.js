const Airtable = require("airtable");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base(process.env.AIRTABLE_BASE);

module.exports = async (req, res) => {

  const { body } = req;

  let order = '';
  let sorting = [];
  let search = '';

  if(typeof(body) !== 'undefined'){
    const filters = req.body;
    if ( Object.keys(filters).length !== 0){
      console.log("filters", filters);

      order = typeof filters.order === "string"
      && (filters.order.toLowerCase() === "asc" || filters.order.toLowerCase() === "desc")
      ? filters.order.toLowerCase()
      : "asc";

      sorting = Array.isArray(filters.sort)
      ? filters.sort.map((item) => {
        return {field: item, direction: order }
      })
      : [{field: filters.sort, direction: order}];

      search = filters.search && filters.search.toLowerCase();
      console.log('search',search);
      console.log('sorting',sorting);
    }

  }

  let accumulator = [];
  base("Solutions")
  .select({
    maxRecords: 50,
    view: "All",
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
        return res.status(500);
      }
      return res.status(200).json({
        records: accumulator,
      });
    }
  );


};

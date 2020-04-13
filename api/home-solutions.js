const Airtable = require("airtable");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base(process.env.AIRTABLE_BASE);

console.log("loaded airtable");

module.exports = (req, res) => {
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
};
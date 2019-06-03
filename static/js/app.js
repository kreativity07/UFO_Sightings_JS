// Set variables
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#datetime");
var inputField2 = d3.select("#city");
var inputField3 = d3.select("#shape");
var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {

  dataInput.forEach(ufo_sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}

// Populate the table
populate(data);

// Filter by attribute
button.on("click", () => {

  d3.event.preventDefault();
  var inputDate = inputField1.property("value").trim();
  var inputCity = inputField2.property("value").toLowerCase().trim();
  var inputShape = inputField3.property("value").toLowerCase().trim();

  // Filter by field matching input value
  var filterDate = data.filter(data => data.datetime === inputDate);
  console.log(filterDate)
  var filterCity = data.filter(data => data.city === inputCity);
  console.log(filterCity)
  var filterShape = data.filter(data => data.shape === inputShape);
  console.log(filterShape)
  var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity && data.shape === inputShape);
  console.log(filterData)

  // Add filtered sighting to table
  tbody.html("");

  let response = {
    filterData, filterShape, filterCity, filterDate
  }

  if (response.filterData.length !== 0) {
    populate(filterData);
  } 
    else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0 || response.filterShape.length !== 0))){
      populate(filterCity) || populate(filterDate) || populate(filterShape);
    }
    else {
      tbody.append("tr").append("td").text("No results found. Try another filter!"); 
    }
})

resetbtn.on("click", () => {
  tbody.html("");
  populate(data)
  console.log("Table reset")
})
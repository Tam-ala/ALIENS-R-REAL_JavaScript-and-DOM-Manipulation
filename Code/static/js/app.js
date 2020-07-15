// get data from data file
var tableData = data;

// select tbody 
tbody = d3.select("tbody")

// select the filter button
var button = d3.select("#filter-btn")

// make table by adding all the rows
tableData.forEach(obj => {
    var row = tbody.append("tr");
    Object.entries(obj).forEach(([key, value]) => {
        var data = row.append("td");
        data.text(value);
    });
});

// make a click button event to activate filtered table by date
button.on("click", function () {
    // clear and prevent website refreshing
    tbody.html("");
    d3.event.preventDefault();

    // add new filtered table by requested date
    var dateInput = d3.select("#datetime")
    var filterDate = tableData.filter(date => date.datetime === dateInput.property("value"))
    filterDate.forEach((selection) => {
        var row = tbody.append("tr");
        Object.entries(selection).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

});
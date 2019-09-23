// Assigning the data from data.js to a descriptive variable
var sightings = data;

// Select the button
var button = d3.select("#button")

button.on("click",function() {
    
    //Select the input element and get the raw HTML mode
    var inputElement=d3.select("#sighting-data-input");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    //console.log(inputValue);
    //console.log(sightings);

    var filterData= sightings.filter(sightings => sightings.datetime === inputValue);

    console.log(filterData);

    //filterData.forEach(row => {
      //tbody.append('tr').html(`<td>${row.datetime}</td><td>${row.city}</td><td>${row.state}</td><td>${row.country}</td><td>${row.shape}</td><td>${row.durationMinutes}</td><td>${row.comments}</td>`)
    })



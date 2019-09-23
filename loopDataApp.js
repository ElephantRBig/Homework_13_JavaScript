// Getting a reference to the table body
var tbody = d3.select("tbody");

// console.log the UFO data from data.js
//console.log(data);

//Step 1: Looping through the "data" and console.log each data obj.
data.forEach(function(sighting){
    //console.log(sighting);
    
    //Step 2
    // Appends the <tr></tr> element to the table in the html
    var row = tbody.append("tr")
    
    //Step 3: Using 'Object.entries' to console.log each weather report variable
    //Iterating over all the elements inside each of the objects in the Json data.
    Object.entries(sighting).forEach(function([key, value]){
        //console.log(key, value)

        //Step 4: Use d3 to append 1 cell per sighting value 
        var cell = row.append("td")
        //Step 5: Use d3 to update each cell's text with sighting report values 
        cell.text(value)
    });
});

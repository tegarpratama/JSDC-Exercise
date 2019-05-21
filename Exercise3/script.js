var req = new XMLHttpRequest();
var URLhost = 'https://swapi.co/api/planets/';

req.open('GET', URLhost, true);
req.addEventListener('load', function () {
   if (req.status >= 200 && req.status < 400) {
      var response = JSON.parse(req.responseText);

      for(var j = 0; j <= 8; j++){
         var table = document.getElementById('myTable');
         var row = table.insertRow(1);
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
         var cell5 = row.insertCell(4);
         var cell6 = row.insertCell(5);
         var cell7 = row.insertCell(6);
         var cell8 = row.insertCell(7);
         var cell9 = row.insertCell(8);
         var cell10 = row.insertCell(9);
         var cell11 = row.insertCell(10);
         cell1.innerHTML = response.results[j].name;
         cell2.innerHTML = response.results[j].rotation_period;
         cell3.innerHTML = response.results[j].orbital_period;
         cell4.innerHTML = response.results[j].diameter;
         cell5.innerHTML = response.results[j].climate;
         cell6.innerHTML = response.results[j].gravity;
         cell7.innerHTML = response.results[j].terrain;
         cell8.innerHTML = response.results[j].surface_water;
         cell9.innerHTML = response.results[j].population;
         cell10.innerHTML = response.results[j].created;
         cell11.innerHTML = response.results[j].edited;
      }
   }else {
      console.log('Error in network request: ' + req.statusText);
   }
});
req.send(null);

function sortTable() {
   var table, rows, switching, i, x, y, shouldSwitch;
   table = document.getElementById("myTable");
   switching = true;

   while (switching) {
      switching = false;
      rows = table.rows;
     
      for (i = 1; i < (rows.length - 1); i++) {
         shouldSwitch = false;
         x = rows[i].getElementsByTagName("TD")[0];
         y = rows[i + 1].getElementsByTagName("TD")[0];
      
         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
         }
      }
      if (shouldSwitch) {
         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
         switching = true;
      }
   }
}

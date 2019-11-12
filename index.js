// References to the tbody element, input fields and button
var $tbody = document.querySelector("tbody");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");
var $dateInput = document.querySelector("#datetime");



$searchBtn.addEventListener("click", handleSearchButtonClick);


$resetBtn.addEventListener("click", handleResetButtonClick);


var tableData = data;


function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    // Get current address object and fields
    var address = tableData[i];
    console.log(address)
    var fields = Object.keys(address);
    // Create new row in tbody, set index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For each field in address object, create new cell and set inner text to be current value at current address field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}


function handleSearchButtonClick() {
  var filterDate = $dateInput.value;
  
  
  if (filterDate != "") {
    tableData = data.filter(function (address) {
      var addressDate = address.datetime;
      return addressDate === filterDate;
    });
  }
  else { tableData };

  renderTable();
}


function handleResetButtonClick(){
  renderTable();
}


renderTable();
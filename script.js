var name1 = document.getElementById("name");
var country = document.getElementById("country");
var table = document.getElementById("tblCustomers");
function Add(hello) {
    var nhel = hello.parentNode.parentNode.rowIndex;
    var row = table.insertRow(nhel);
    var cell1 = row.insertCell();
    cell1.innerHTML = name1.value;
    var cell2 = row.insertCell();
    cell2.innerHTML = country.value;
    name1.value = "";
    country.value = "";
}
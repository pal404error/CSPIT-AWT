var name1 = document.getElementById("name");
var country = document.getElementById("country");
var table = document.getElementById("tblCustomers");
var inst = document.getElementById("inst");
var bus = document.getElementById("bus");
var hometown = document.getElementById("hometown");


let Page_numbers = 0;
var data = [
  ["some", "previous", "dump", "data", "here"],
  ["some", "previous", "dump", "data", "here"],
  ["some", "previous", "dump", "data", "here"],
  ["some", "previous", "dump", "data", "here"],
  ["some", "previous", "dump", "data", "here"],

];

window.onload = function() {
  console.log("loaded");
  createTable(data);
  createButtons();
};

function Add(hello) {
  count++;
  var nhel = hello.parentNode.parentNode.rowIndex;
  var row = table.insertRow(nhel);
  var cell1 = row.insertCell();
  cell1.innerHTML = name1.value;
  var cell2 = row.insertCell();
  cell2.innerHTML = country.value;
  var cell3 = row.insertCell();
  cell3.innerHTML = inst.value;
  var cell5 = row.insertCell();
  cell5.innerHTML = hometown.value;
  var cell4 = row.insertCell();
  cell4.innerHTML = bus.value;
  name1.value = "";
  country.value = "";
  inst.value = "";
  bus.value = "";
  hometown.value = "";
  data.push([cell1.innerHTML, cell2.innerHTML, cell3.innerHTML, cell5.innerHTML, cell4.innerHTML]);
  updatePagination();
}

function createTable(arr, index = 0) {
  var table = document.getElementById("tblCustomers").getElementsByTagName("tbody")[0];
  table.innerHTML = "";
  var end = Math.min(index + 4, arr.length);
  for (var i = index; i < end; i++) {
    var row = table.insertRow(-1);
    for (const data of arr[i]) {
      var cell = row.insertCell(-1);
      cell.innerHTML = data;
    }
  }
}

function createButtons() {
  var body = document.getElementById("body");
  var div = document.createElement("div");

  
  var Prev = document.createElement("button");
  Prev.onclick = function() {
    if (Page_numbers > 0) {
      Page_numbers--;
      var index = Page_numbers * 4;
      createTable(data, index);
    }
  };
  Prev.innerHTML = "Prev";
  div.appendChild(Prev);

  // numbers
  var btns = Math.ceil(data.length / 5);
  for (var i = 0; i < btns; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = i + 1;
    btn.value = i;
    btn.onclick = function() {
      NumberPages(this.value);
    };
    div.appendChild(btn);
  }

  // next
  var Next = document.createElement("button");
  Next.onclick = function() {
    var index = (Page_numbers + 1) * 4;
    if (index < data.length) {
      Page_numbers++;
      createTable(data, index);
    }
  };
  Next.innerHTML = "Next";
  div.appendChild(Next);

  // all buttons to div
  body.appendChild(div);
}

function NumberPages(Pages) {
  Page_numbers = parseInt(Pages);
  createTable(data, Page_numbers * 4);
}

function updatePagination() {
  var btns = Math.ceil(data.length / 5);
  var div = document.getElementById("body").getElementsByTagName("div")[0];
  div.innerHTML = "";

  // prev
  var Prev = document.createElement("button");
  Prev.onclick = function() {
    if (Page_numbers > 0) {
      Page_numbers--;
      var index = Page_numbers * 4;
      createTable(data, index);
    }
  };
  Prev.innerHTML = "Prev";
  div.appendChild(Prev);

  
  for (var i = 0; i < btns; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = i + 1;
    btn.value = i;
    btn.onclick = function() {
      NumberPages(this.value);
    };
    div.appendChild(btn);
  }


  var Next = document.createElement("button");
  Next.onclick = function() {
    var index = (Page_numbers + 1) * 4;
    if (index < data.length) {
      Page_numbers++;
      createTable(data, index);
    }
  };
  Next.innerHTML = "Next";
  div.appendChild(Next);
}

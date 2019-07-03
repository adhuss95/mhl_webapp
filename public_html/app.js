function openPage(pagename, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tables");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pagename).style.display = "block";
    elmnt.style.backgroundColor = color;
}

function openTabs()
{
var tabopen = document.getElementById("tab-list");
if(tabopen.style.display === "none")
{
    tabopen.style.display = "block";
}
else{
    tabopen.style.display = "none";
}
}


// function dropdownList()
// {
//     var selected = document.getElementById("dropdown-menu-select");
//     var result = selected.nodeValue;
//     alert(result);
// }

function Infofunction()
{
 var x = document.getElementById("info1");
 var z = document.getElementById("info2");
 var w = document.getElementById("form-submit");
 
 
if(x.style.display === "none"  && z.style.display === "none" && w.style.display=== "none")
{
    x.style.display = "block";
    z.style.display = "block";
    w.style.display = "block";
    
}
else{
    x.style.display = "none";
    z.style.display = "none";
    w.style.display = "none";
}

}




function appendRow_movies() {
    var table = document.getElementById('movies'), // table reference
        row = table.insertRow(table.rows.length),      // append table row
        i;
        row.contentEditable = true;
    // insert table cells to the new row
    for (i = 0; i < table.rows[0].cells.length; i++) {
        createCell(row.insertCell(i),'row');
    }
}
function appendRow_apps() {
    var table = document.getElementById('apps'), // table reference
        row = table.insertRow(table.rows.length),      // append table row
        i;
        row.contentEditable = true;
    // insert table cells to the new row
    for (i = 0; i < table.rows[0].cells.length; i++) {
        createCell(row.insertCell(i),'row');
    }
}
function appendRow_music() {
    var table = document.getElementById('music'), // table reference
        row = table.insertRow(table.rows.length),      // append table row
        i;
        row.contentEditable = true;
    // insert table cells to the new row
    for (i = 0; i < table.rows[0].cells.length; i++) {
        createCell(row.insertCell(i),'row');
    }
}
function appendRow_magazine() {
    var table = document.getElementById('magazine'), // table reference
        row = table.insertRow(table.rows.length),      // append table row
        i;
        row.contentEditable = true;
    // insert table cells to the new row
    for (i = 0; i < table.rows[0].cells.length; i++) {
        createCell(row.insertCell(i),'row');
    }
}
function appendRow_shopping() {
    var table = document.getElementById('shopping'), // table reference
        row = table.insertRow(table.rows.length),      // append table row
        i;
        row.contentEditable = true;
    // insert table cells to the new row
    for (i = 0; i < table.rows[0].cells.length; i++) {
        createCell(row.insertCell(i),'row');
    }
}

function createCell(cell,style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(''); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);
    cell.style.maxWidth =  '50px';
    cell.style.maxHeight = '30px'; 
    cell.style.padding = '15px';               // append DIV to the table cell
    cell.style.overflow='hidden' ;
}



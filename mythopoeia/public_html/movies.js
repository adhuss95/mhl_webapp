//movie data from JSON to table-movies

$(document).ready(function(){
    $.getJSON("movies.json", function(data){ //data is stored in a JSON file called movies.json
      var fulldata = " "; //declare a variable to append all JSON data from the file 
      $.each(data,function(key,value){
        //appending JSON data by title to  fulldata

          fulldata += "<tr>";
          fulldata += "<td>" + value.MOVIE_TITLE_ENG + "</td>";
          fulldata += "<td>" + value.MOVIE_TITLE_DAN + "</td>";
          fulldata += "<td>" + value.MOVIE_TITLE_greenlandic + "</td>";
          fulldata += "<td>" + value.FILE_NAME + "</td>";
          fulldata += "<td>" + value.FORMAT + "</td>";
          fulldata += "<td>" + value.LANGUAGE_OPTIONS_ENG + "</td>";
          fulldata += "<td>" + value.LANGUAGE_OPTIONS_DAN + "</td>";
          fulldata += "<td>" + value.GENRE_ENG + "</td>";
          fulldata += "<td>" + value.GENRE_ENG + "</td>";
          fulldata += "<td>" + value.GENRE_DAN + "</td>";
          fulldata += "<td>" + value.GENRE_greenlandic + "</td>";
          fulldata += "<td>" + value.DURATION + "</td>";
          fulldata += "<td>" + value.RATING + "</td>";
          fulldata += "<td>" + value.DIRECTOR + "</td>";
          fulldata += "<td>" + value.CAST + "</td>";
          fulldata += "<td>" + value.SYNOPSIS_ENG + "</td>";
          fulldata += "<td>" + value.SYNOPSIS_DAN + "</td>";
          fulldata += "<td>" + value.SYNOPSIS_greenlandic + "</td>";
          fulldata += "</tr>";
      }); 
      $("#movies tbody").append(fulldata);
      $("#movies tbody").css("overflow","hidden"); //css property to hide characters going out of size
    });
  });

  // function appendRow_movies() {
  //   var table = document.getElementById('movies'), // table reference
  //       row = table.insertRow(table.rows.length),      // append table row
  //       i;
  //       row.contentEditable = true;
  //   // insert table cells to the new row
  //   for (i = 0; i < table.rows[0].cells.length; i++) {
  //       createCell(row.insertCell(i),'row');
  //   }
// }
  // function submit_movies(){
  //   var movies_data = document.getElementById('movies');
  //   var data = new Array();

  //   for(row =1; row<movies_data.rows.length -1;row++){
  //     for(c = 0;cell<movies_data.rows[row].cell.length;cell++) {

  //       var elmnt = movies_data.rows.item(row),cell
  //     }
  //   }


  // }

  //apps data from JSON to table apps

  

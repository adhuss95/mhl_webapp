//movie data from JSON to table movies

$(document).ready(function(){
    $.getJSON("movies.json", function(data){
      var fulldata = " ";
      $.each(data,function(key,value){
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
      
    });
  });

  //apps data from JSON to table apps

  

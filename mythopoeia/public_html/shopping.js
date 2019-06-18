$(document).ready(function(){
    $.getJSON("shopping.json", function(data){ //data is stored in a JSON file called movies.json
      var fulldata = " "; //declare a variable to append all JSON data from the file 
      $.each(data,function(key,value){
        //appending JSON data by title to  fulldata

          fulldata += "<tr>";
          fulldata += "<td>" + value.ITEM_NAME + "</td>";
          fulldata += "<td>" + value.PRICE + "</td>";
          fulldata += "<td>" + value.CATEGORY+ "</td>";
          fulldata += "<td>" + value.DESCRIPTION_ENG + "</td>";
          fulldata += "<td>" + value.DESCRIPTION_DAN + "</td>";
          fulldata += "<td>" + value.DESCRIPTION_KAL + "</td>";
          
          fulldata += "</tr>";
      }); 
      $("#shopping tbody").append(fulldata);
      $("#shopping tbody").css("overflow","hidden"); //css property to hide characters going out of size
    });
  });

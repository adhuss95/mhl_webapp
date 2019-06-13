 $(document).ready(function(){
    $.getJSON("music.json", function(data){
      var fulldata = " ";
      $.each(data,function(key,value){
        fulldata += "<tr>";
        fulldata += "<td>" + value.TITLE + "</td>";
         fulldata += "<td>" + value.ARTIST+ "</td>";
          fulldata += "<td>" + value.DISPLAY_NAME + "</td>";
          fulldata += "<td>" + value.GENRE+ "</td>";
          fulldata += "<td>" + value.CATEGORY+ "</td>";
          fulldata += "<td>" + value.TRACK_NUMBER + "</td>";
         
          fulldata += "</tr>";
      }); 
      $("#music tbody").append(fulldata);
      
    });
  });

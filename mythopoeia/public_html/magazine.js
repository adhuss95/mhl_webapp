 $(document).ready(function(){
    $.getJSON("magazine.json", function(data){
      var fulldata = " ";
      $.each(data,function(key,value){
        fulldata += "<tr>";
        fulldata += "<td>" + value.TITLE + "</td>";
         fulldata += "<td>" + value.FILE_NAME+ "</td>";
          fulldata += "<td>" + value.FORMAT + "</td>";
          fulldata += "<td>" + value.CATEGORY + "</td>";
          fulldata += "<td>" + value.PUBLISHER+ "</td>";
          fulldata += "<td>" + value.LANGUAGE+ "</td>";
          fulldata += "<td>" + value.DISPLAY_NAME + "</td>";
          fulldata += "<td>" + value.SYNOPSIS_ENG + "</td>";
          fulldata += "<td>" + value.SYNOPSIS_KAL + "</td>";
          fulldata += "<td>" + value.SYNOPSIS_DAN  + "</td>";
          
          fulldata += "</tr>";
      }); 
      $("#magazine tbody").append(fulldata);
      
    });
  });

//apps data from JSON to table apps

$(document).ready(function(){
    $.getJSON("apps.json", function(data){
      var fulldata = " ";
      $.each(data,function(key,value){
        fulldata += "<tr>";
        fulldata += "<td>" + value.TITLE + "</td>";
         fulldata += "<td>" + value.APK_NAME + "</td>";
          
          fulldata += "<td>" + value.FORMAT + "</td>";
          
          fulldata += "<td>" + value.CATEGORY+ "</td>";
          fulldata += "<td>" + value.GENRE + "</td>";
         
          
         
          fulldata += "<td>" + value.SYNOPSIS_ENG + "</td>";
          fulldata += "<td>" + value.SYNOPSIS_DAN + "</td>";
          fulldata += "<td>" + value.SYNOPSIS_KAL + "</td>";
          fulldata += "</tr>";
      }); 
      $("#apps tbody").append(fulldata);
      
    });
  });
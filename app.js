function Infofunction()
{
 var x = document.getElementById("info1");
 var z = document.getElementById("info2");
 var y= document.getElementById("artcle")
 
if(x.style.display === "none"  && z.style.display === "none"){
    x.style.display = "block";
    z.style.display = "block";
    y.style.display = "none";
}
else{
    x.style.display = "none";
    z.style.display = "none";
}

}

// $(".dropdown-menu > li").click(functio(){
//     $()
// })
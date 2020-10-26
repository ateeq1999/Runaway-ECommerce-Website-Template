
// function myFunction() {
//   var x = document.getElementById("menuItems");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
//   }


//--- navbar toggle ----
$(document).ready(function(){
  $(".icon").click(function(){
    $("#menuItems").toggle(700);
  });
});

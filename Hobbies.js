$(document).ready(function(){
    $("button").click(function(){
    $("#p1").css("color", "blue" ).slideUp(2000).slideDown(2000);
});
});


$(function() {
    $(document).one('click', '.like-review', function(e) {
      $(this).html('<i class="fa fa-heart" aria-hidden="true"></i> You liked this');
      $(this).children('.fa-heart').addClass('animate-like');
  });
});
      /* When the user clicks on the button, 
      toggle between hiding and showing the dropdown content */
      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
        }
      }
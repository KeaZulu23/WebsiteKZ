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
        $(document).ready(function(){
          $("button").click(function(){
             var div = $("div");
             div.animate({height: '300px', opacity: '0.4'}, "slow");
             div.animate({width: '300px', opacity: '0.8'}, "slow");
             div.animate({height: '100px', opacity: '0.4'}, "slow");
             div.animate({width: '100px', opacity: '0.8'}, "slow");
            });
        });
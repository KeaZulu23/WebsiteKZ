$(document).ready(function(){
    $("#hide").click(function(){
    $("p").hide();
   });
    $("#show").click(function(){
 $("p").show();
 });
});

var titles = [];
                    var titleInput = document.getElementById("title");
                    var messageBox = document.getElementById("display");
                    function Allow()
                    {
                    if (!user.title.value.match(/[a-zA-Z]$/) && user.title.value !="")
                    {
                    user.title.value="";
                    alert("Please Enter only alphabets");
                    }
                    window.location.reload()
                    }
                    function insert () {
                    titles.push(titleInput.value);
                    clearAndShow();
                    }
                    function clearAndShow ()
                    {
                    titleInput.value = "";
                    messageBox.innerHTML = "";
                    messageBox.innerHTML += " " + titles.join("<br/> ") + "<br/>";
                    }

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

                
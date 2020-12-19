function myFunctiondrop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


document.getElementById('loginJS').addEventListener('click',function()
                                                   
                                                   {
    document.querySelector('.signupmodule').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',function()
                                                  {
           document.querySelector('.signupmodule').style.display = 'none';                                       
                                                  });

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}




document.getElementById('signupJS').addEventListener('click',function()
                                                   
                                                   {
    document.querySelector('.signupmodule1').style.display = 'flex';
});

document.querySelector('.close1').addEventListener('click',function()
                                                  {
           document.querySelector('.signupmodule1').style.display = 'none';                                       
                                                  });

function myFunction1() {
  var x = document.getElementById("myInput1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}










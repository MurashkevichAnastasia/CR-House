$(function () {
  $.fn.scrollToTop = function () {
      $(this).hide().removeAttr("href");

      if ($(window).scrollTop() != "0") {
          $(this).fadeIn("slow")
      }

      var scrollDiv = $(this);
      $(window).scroll(function () {
          if ($(window).scrollTop() == "0") {
              $(scrollDiv).fadeOut("slow")
          } else {
              $(scrollDiv).fadeIn("slow")
          }
      });
      $(this).click(function () {
          $("html, body").animate({scrollTop: 0}, "slow")
      })
  }
});
// Вызов
$(function () {
  $("#toTop").scrollToTop();
}); 

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
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
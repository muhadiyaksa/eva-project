if (window.matchMedia("(max-width: 992px)").matches) {
    $('#nav li.dropdown>a').attr('data-bs-toggle','dropdown');
  }
  
  $(document).ready(function () {
    var $win = $(window);
  
    $win.scroll(function () {
      if ($win.scrollTop() > 150) {
        $("#nav .container-lg").addClass("scrolltop");
      } else {
        $("#nav .container-lg").removeClass("scrolltop");
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    el_autohide = document.querySelector("#nav .navbar");
  
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector("#nav .navbar").offsetHeight;
  
    if (el_autohide) {
      var last_scroll_top = 0;
      window.addEventListener("scroll", function () {
        let scroll_top = window.scrollY;
        if (scroll_top < last_scroll_top) {
          el_autohide.classList.remove("scrolled-down");
          el_autohide.classList.add("scrolled-up");
        } else {
          el_autohide.classList.remove("scrolled-up");
          el_autohide.classList.add("scrolled-down");
        }
        last_scroll_top = scroll_top;
      });
      // window.addEventListener
    }
    // if
  });
  // DOMContentLoaded  end
  
  document.querySelector('#nav .first-button').addEventListener('click', function () {
  
    document.querySelector('#nav .animated-icon1').classList.toggle('open');
    });
  
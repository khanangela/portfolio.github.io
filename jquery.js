let $root = $('html, body');
      $(document).ready(function() {
          $(a.scrollLink).click(function() {
              $root.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
              }, 500);
              return false;
            });
        });

       //mobile menu
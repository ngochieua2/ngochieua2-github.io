// make scroll smooth
jQuery(document).ready(function($){
    var $root = $('html, body');
    $('a[href^="#"]').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
         
        return false;
    });
 
})

//responsive narBar
function openNav() {    
    $('#sideBar').css('width', '300px');
    $('#main').css('marginLeft', '300px');
    $('#footer').css('marginLeft', '300px');
  }
  
function closeNav() {
    $('#sideBar').css('width', '0');
    $('#main').css('marginLeft', '0');
    $('#footer').css('marginLeft', 'auto');
  }
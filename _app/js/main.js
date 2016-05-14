// First we detect the click event
document.getElementById('js-mobile-menu').addEventListener('click', function () {

  var menu = document.getElementById('navigation-menu');
  // Using an if statement to check the class
  if (menu.classList.contains('show')) {
    // The box that we clicked has a class of bad so let's remove it and add the good class
      menu.classList.remove('show');
      menu.classList.add('hide');
  } else {
    // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
    //alert("You can proceed!");
  }
});



imagesLoaded( document.querySelector('#image-container'), function( instance ) {
  var elem = document.querySelector('.grid');
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
//console.log('images have loaded')
});



// $(document).ready(function() {
//   var menuToggle = $("#js-mobile-menu").unbind();
//   $("#js-navigation-menu").removeClass("show");

//   menuToggle.on("click", function(e) {
//     e.preventDefault();
//     $("#js-navigation-menu").slideToggle(function(){
//       if($("#js-navigation-menu").is(":hidden")) {
//         $("#js-navigation-menu").removeAttr("style");
//       }
//     });
//   });
// });

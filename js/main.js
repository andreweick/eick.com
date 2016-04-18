$('#navigation-menu').removeClass("show");
  $('#js-mobile-menu').on('click', function(e) {
    e.preventDefault();
    $('#navigation-menu').slideToggle(function(){
      if($('#navigation-menu').is(':hidden')) {
        $('#navigation-menu').removeAttr('style');
      }
    });
  });


  $('#container').imagesLoaded( function() {
      $('img').addClass('item');
      //$("p:nth-child(4) img").addClass("w2");
  });

   // display image caption on bottom of image
  $("article.post #container img, article.post-full #container img").each(function() {
    var imageCaption = $(this).attr("alt");
    var imageSource = $(this).attr("src");
    if (imageCaption != '') {
      var imgWidth = $(this).width();
      var imgHeight = $(this).height();
      var position = $(this).position();
      var positionTop = (position.top + imgHeight - 26)
    $("<div class='img-caption' href='" + imageSource + "'><em>"+imageCaption+"</em> <i class='icon-link-ext'></i></div>").css({"margin-bottom":"2em", "top":positionTop+"px", "left":"0", "width":100 +"%", "clear":"both", "height": "40px", "display": "block"}).insertAfter(this);}
  });

  $('a.gallery-grid').click( function() {
      $(".gallery").removeClass("container-one_up").addClass("container-three_up");
  });

  //var container = document.querySelector('article.post-three_up .gallery');
  var container = document.querySelector('article.post-three_up #container');
  var msnry = new Masonry( container, {
    // options
    //gutter: 20,
    itemSelector: 'img',
    //columnWidth: container.querySelector('.grid-sizer')
  });
  $('.gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    //disableOn: 400,
    gallery: {
      // options for gallery
      enabled: true
    },
     verticalFit: true, // Fits image in area vertically
     showCloseBtn: false
  });

//listjs

var filtersButton = $('#filter-none').hide();

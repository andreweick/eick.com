---
layout: null
---
{% include scripts/jquery/jquery.min.js %}
{% include scripts/imagesloaded/imagesloaded.pkgd.min.js %}
{% include scripts/masonry/dist/masonry.pkgd.min.js %}

 // display image caption on top of image
$("article.post #container img").each(function() {
  var imageCaption = $(this).attr("alt");

  if (imageCaption != '') {
    var imgWidth = $(this).width();
    var imgHeight = $(this).height();
    var position = $(this).position();
    var positionTop = (position.top + imgHeight - 26)
  $("<span class'item'>").insertBefore(this);
  $("<span class='img-caption'><em>"+imageCaption+"</em></span></span>").css({"margin-bottom":"2em", "top":positionTop+"px", "left":"0", "width":100 +"%", "clear":"both", "display": "block"}).insertAfter(this);}
});
// END image caption

$('#container').imagesLoaded( function() {
    $('img').addClass('item');
    //$("p:nth-child(4) img").addClass("w2");
});

// $('a.gallery-list').click( function() {
//   $(".gallery").removeClass("container-three_up").addClass("container-one_up");

// });

$('a.gallery-grid').click( function() {
    $(".gallery").removeClass("container-one_up").addClass("container-three_up");
});

 //$("article.post-three_up #container br", "article.post-three_up #container p").remove();

// if (el.classList)
//   el.classList.add(className);
// else
//   el.className += ' ' + className;

//var container = document.querySelector('article.post-three_up .gallery');
var container = document.querySelector('article.post-three_up #container');
var msnry = new Masonry( container, {
  // options
  //gutter: 20,
  itemSelector: 'img',
  //columnWidth: container.querySelector('.grid-sizer')
});
// $('.gallery-list').click(function(){
//     $container.masonry('destroy');

// });

// var button = document.querySelector('.gallery-list');
// var isActive = true;

// eventie.bind( button, 'click', function() {
//   if ( isActive ) {
//     msnry.destroy();
//   } else {
//     msnry = new Masonry( container );
//   }
//   isActive = !isActive;
// });


///
// var demo = document.querySelector('#destroy-demo');
// var container = demo.querySelector('.masonry');
// var button = demo.querySelector('button');
// var msnry = new Masonry( container, {
//   columnWidth: 60
// });
// var isActive = true;

// eventie.bind( button, 'click', function() {
//   if ( isActive ) {
//     msnry.destroy();
//   } else {
//     msnry = new Masonry( container );
//   }
//   isActive = !isActive;
// });

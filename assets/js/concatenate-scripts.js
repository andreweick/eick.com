---
layout: null
---
{% include scripts/jquery/jquery.min.js %}
{% include scripts/imagesloaded/imagesloaded.pkgd.min.js %}
{% include scripts/masonry/dist/masonry.pkgd.min.js %}
{% include scripts/listjs/dist/list.min.js %}

  var options = {
      valueNames: [ 'title','tag', 'tag_0','tag_1','tag_2','tag_3','tag_4'],
      listClass: 'list-filter'
  };
  var postList = new List('container-filter', options);

{% assign tags = site.tags %}
 {% for tag in tags %}
  if (document.getElementById("filter-{{ tag[0] }}")) {
    document.getElementById("filter-{{ tag[0] }}").onclick=function(){
      postList.filter(function(item) {
           if (item.values().tag_0 == "{{ tag[0] }}" ) {
             return true;
             }
             else if (item.values().tag_1 == "{{ tag[0] }}" ) {
             return true;
             }
             else if (item.values().tag_2 == "{{ tag[0] }}" ) {
             return true;
             }
             else if (item.values().tag_3 == "{{ tag[0] }}" ) {
             return true;
             }
             else if (item.values().tag_4 == "{{ tag[0] }}" ) {
             return true;
             } else {
             return false;
          }
      });
    };
  }
{% endfor %}
    //and clear the filters
if (document.getElementById("filter-none")) {
 document.getElementById("filter-none").onclick=function(){
     entryList.filter();
     countryInfo.hide();
    };
  }




 // display image caption on top of image
$("article.post #container img").each(function() {
  var imageCaption = $(this).attr("alt");
  var imageSource = $(this).attr("src");

  if (imageCaption != '') {
    var imgWidth = $(this).width();
    var imgHeight = $(this).height();
    var position = $(this).position();
    var positionTop = (position.top + imgHeight - 26)
  $("<span class'item'>").insertBefore(this);
  $("<a class='img-caption' href='" + imageSource + "'><em>"+imageCaption+"</em> <i class='icon-link-ext'></i></a></span>").css({"margin-bottom":"2em", "top":positionTop+"px", "left":"0", "width":100 +"%", "clear":"both", "display": "block"}).insertAfter(this);}
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

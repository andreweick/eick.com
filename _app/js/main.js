window.onload = function () {
    imagesLoaded(document.querySelector('#image-container'), function (instance) {
        var elem = document.querySelector('.grid');
        var msnry = new Masonry(elem, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    });

    var menuToggle = document.getElementById('js-mobile-menu');// may still need something for unbind

    var menu = document.getElementById('navigation-menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
}; // window.onload

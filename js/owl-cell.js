let o1 = $('.slide-one'), o2 = $('.slide-two'), namePeople = $('.slide-name');
const o2settings = {
    singleItem: true,
    pagination: false,
    touchDrag: false,
    slideBy: 1,
    mouseDrag: false,
    items: 4,
    margin: 50,
    loop: true,
    nav: true,
    dots: false,
    navText: ['‹', '›'],
    navElement: 'span'
};

const nameSettings = {
    items: 1,
    singleItem: true,
    loop: true,
    margin: 50,
    navElement: 'span',
    pagination: false,
    touchDrag: false,
    slideBy: 1,
    mouseDrag: false,
    stageClass: 'name-stage',
};

o2.owlCarousel(o2settings);
namePeople.owlCarousel(nameSettings);

o1.owlCarousel({
    items: 1,
    singleItem: true,
    loop: true,
    margin: 50,
    navElement: 'span',
    pagination: false,
    touchDrag: false,
    slideBy: 1,
    mouseDrag: false,
    stageClass: 'people-stage',
});



//Sync o2 by o1
o1.on('click onDragged', '.owl-next', function () {
    o2.trigger('next.owl.carousel')
    namePeople.trigger('next.owl.carousel')
});

o1.on('click dragged.owl.carousel', '.owl-prev', function () {
    o2.trigger('prev.owl.carousel')
    namePeople.trigger('prev.owl.carousel')
});

o1.on('translate.owl.carousel', function (e) {
    o2.trigger('to.owl.carousel', e.page.index * o2settings.slideBy);
    namePeople.trigger('to.owl.carousel', e.page.index * nameSettings.slideBy);
});
//Sync o1 by o2
o2.on('click onDragged', '.owl-next', function () {
    o1.trigger('next.owl.carousel');
});

o2.on('click dragged.owl.carousel', '.owl-prev', function () {
    o1.trigger('prev.owl.carousel')
});

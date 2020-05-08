var slider = document.getElementById('speed-bar');

noUiSlider.create(slider, {
    start: 500,
    connect: [false,true],
    direction: 'rtl',
    orientation: "horizontal",
    range: {
        'min': 50,
        'max': 1000
    }
});

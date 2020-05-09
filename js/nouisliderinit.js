var slider = document.getElementById('speed-bar');

noUiSlider.create(slider, {
    start: 2500,
    connect: [false,true],
    direction: 'rtl',
    orientation: "horizontal",
    range: {
        'min': 100,
        'max': 5000
    }
});

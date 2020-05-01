var slider = document.getElementById('speed-bar');

noUiSlider.create(slider, {
    start: 50,
    connect: [true,false],
    orientation: "horizontal",
    range: {
        'min': 0,
        'max': 100
    }
});
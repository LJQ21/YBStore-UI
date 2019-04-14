//获得slider插件对象
var gallery = mui('#lb-slider');
gallery.slider({
    interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
});

(function($) {
    $('.mui-scroll-wrapper').scroll({
        indicators: true //是否显示滚动条
    });
    var item2 = document.getElementById('item2mobile');
    var item3 = document.getElementById('item3mobile');
    var html2 = item2.querySelector('.mui.spinner').innerHTML;
    var html3 = item3.querySelector('.mui.spinner').innerHTML;
    item2.querySelector('.mui.spinner').innerHTML = "";
    item3.querySelector('.mui.spinner').innerHTML = "";
    document.getElementById('sp-slider').addEventListener('slide', function(e) {
        if (e.detail.slideNumber === 1) {
            if (item2.querySelector('.mui-loading')) {
                setTimeout(function() {
                    item2.querySelector('.mui-scroll').innerHTML = html2;
                }, 500);
            }
        } else if (e.detail.slideNumber === 2) {
            if (item3.querySelector('.mui-loading')) {
                setTimeout(function() {
                    item3.querySelector('.mui-scroll').innerHTML = html3;
                }, 500);
            }
        }
    });
    var sliderSegmentedControl = document.getElementById('sliderSegmentedControl');
    $('.mui-input-group').on('change', 'input', function() {
        if (this.checked) {
            sliderSegmentedControl.className = 'mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-' + this.value;
            //force repaint
            sliderProgressBar.setAttribute('style', sliderProgressBar.getAttribute('style'));
        }
    });

})(mui);
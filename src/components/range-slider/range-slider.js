import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.css';
import './range-slider.scss';

function init() {
  $('.js-range-slider__input').ionRangeSlider({
    skin: 'toxin',
    type: 'double',
    min: 500,
    max: 15000,
    from: 5000,
    to: 10000,
    step: 100,
    prefix: '₽',
    values_separator: ' - ',
    hide_min_max: true,
    hide_from_to: true,
  });
}

$(document).ready(init);

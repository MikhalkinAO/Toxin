import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import './calendar.scss';

const buttonApply = {
  content: 'Применить',
  className: 'air-datepicker__button-apply',
};

const buttonClear = {
  content: 'Очистить',
  className: 'air-datepicker__button-clear',
};

const dp = new AirDatepicker('.calendar', {
  range: true,
  toggleSelected: true,
  dynamicRange: true,
  minDate: new Date(),
  prevHtml: '<button class="air-datepicker__prev"></button>',
  nextHtml: '<button class="air-datepicker__next"></button>',
  navTitles: {
    days: '<span class="air-datepicker__title">MMMM yyyy</span>',
  },
  buttons: [buttonClear, buttonApply],
});

dp.show();

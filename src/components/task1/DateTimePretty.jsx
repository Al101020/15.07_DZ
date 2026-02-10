import moment from 'moment';

const DateTimePretty = (Component) => {
  return function WrappedComponent(props) {
    const propsComponent = {};
    const date = moment();

    propsComponent.url = props.url;

    if (date.diff(props.date, 'days') > 1) {
      const datePretty = date.diff(props.date, 'days');
      propsComponent.date = datePretty + ' дней назад';
    } else if (date.diff(props.date, 'hours') > 1 || date.diff(props.date, 'hours') === 1) {
      const datePretty = date.diff(props.date, 'hours');
      propsComponent.date = datePretty + ' часов назад';
    } else if (date.diff(props.date, 'minutes') > 1 || date.diff(props.date, 'minutes') === 1) {
      const datePretty = date.diff(props.date, 'minutes');
      propsComponent.date = datePretty + ' минут назад';
    }

    return <Component {...propsComponent} />;
  };
};

export default DateTimePretty;

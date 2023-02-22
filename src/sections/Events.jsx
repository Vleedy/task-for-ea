import React from 'react';
import { Transition } from 'react-transition-group';
import Accordeon from '../components/Accordeon';

const Events = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const scrollListener = () => {
    if (window.scrollY > 10) {
      setIsVisible(true);
    }
  };
  React.useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    if (isVisible === true) {
      window.removeEventListener('scroll', scrollListener);
    }
    return () => window.removeEventListener('scroll', scrollListener);
  }, [isVisible]);
  return (
    <div className="container">
      <Transition in={isVisible} timeout={200}>
        {(state) => <h2 className={`title title_events ${state}`}>All events</h2>}
      </Transition>
      <Accordeon />
    </div>
  );
};

export default Events;

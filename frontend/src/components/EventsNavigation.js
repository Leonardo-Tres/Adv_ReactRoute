import { NavLink } from 'react-router-dom';

import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='' className={ ({isActive}) => isActive ? classes.active : undefined } end>All events</NavLink>
          </li>
          <li>
            <NavLink to='new' className={ ({isActive}) => isActive ? classes.active : undefined }>New event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;

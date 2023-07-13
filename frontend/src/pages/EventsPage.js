import { Link } from "react-router-dom";

const EVENTS = [
    {id: 'e1', title:'Evento 1'},
    {id: 'e2', title:'Evento 2'},
    {id: 'e3', title:'Evento 3'},
]

const EventsPage = () => {

    return (
    <ul>
        {EVENTS.map( (event) => {
            return <li key={event.id}><Link to={event.id}>{event.title}</Link></li>
        })}
    </ul>
    );
}

export default EventsPage
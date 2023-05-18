import React, { useState, useEffect } from 'react';
import axios from "axios";
import DataService from '../services/dataService';
import '../index.css';


function EventList() {
    const [myEvents, setMyEvents] = useState({});
    const [isLoading, setLoading] = useState(true);
        
    useEffect(() => {
        getAllEvents();
    }, []);
        
    const getAllEvents = () => {
        (DataService.getAllPlanned()).then((response) => {
            setMyEvents(response.data);
            setLoading(false);
            console.log(response.data);
        });
    };
        
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <ul>
            {myEvents.map(planned => (
                <li key={planned.id} className={planned.category.category_name} id={planned.planType.planType_name}>{planned.planned_title}</li>
            ))}
        </ul>
    );
}

export default EventList;
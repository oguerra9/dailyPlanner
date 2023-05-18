import React, { useState, useEffect } from 'react';
import axios from "axios";


function EventList() {
    const [myEvents, setMyEvents] = useState({});
    const [isLoading, setLoading] = useState(true);
        
    useEffect(() => {
        getAllPlanned();
    }, []);
        
    const getAllPlanned = () => {
        axios.get("http://localhost:3001/api/planned").then((response) => {
            setMyEvents(response.data);
            setLoading(false);
        });
    };
        
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <ul>
            {myEvents.map(planned => (
                <li key={planned.id}>{planned.planned_title}</li>
            ))}
        </ul>
    );
}

export default EventList;
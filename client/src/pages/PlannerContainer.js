import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DateBar from '../components/DateBar';
import EventList from '../components/EventList';
import Date from '../utils/dateMethods';


export default function PlannerContainer(props) {
    let view = props.view;
    let { timestamp } = useParams();

    if (!(timestamp > 0)) {
        timestamp = (new Date()).getTime();
    }

    return (
        <div>
            <DateBar view={view} timestamp={timestamp} />
            <EventList view={view} timestamp={timestamp} />
        </div>
    );
}

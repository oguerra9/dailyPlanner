// import { getAllPlanned } from '../services/dataService';

// // retrieve all planned events
// export const getAllEvents = async () => {
//     let myEvents = await getAllPlanned();
// };

// retrieve planned event with matching timestamp
export const getEvents = (timestamp) => {
    return fetch(`/api/planned/${timestamp}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

// create new planned event
export const createPlannedEvent = (eventData) => {
    return fetch('/api/planned', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });
};  

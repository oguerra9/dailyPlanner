import React, { useEffect, useState, useContext } from 'react';
import Date from '../utils/dateMethods';
import DataService from '../services/dataService';
import { usePlannerContext } from '../utils/PlannerContext';


export default function DayBoxList(props) {
    const [myEvents, setMyEvents] = useState([]);
    const [isLoading, setLoading] = useState([]);

    let dayDate = props.dayDate;
    let dayTS = dayDate.getTime();

    const { view, changeView, timestamp, changeTimestamp, TSDate, changeTSDate } = usePlannerContext();

    useEffect(() => {
        console.log(`[EventsContainer/EventList/useEffect]: rendering event list`);
        getDayEvents(dayTS);
    }, []);

    const getDayEvents = (dayTS) => {
        console.log(`[EventsContainer/EventList/getListEvents]: getListEvents called`);
        (DataService.getPlannedDay(dayTS)).then((response) => {
            setMyEvents(response.data);
            setLoading(false);
        });
    };

    if (isLoading) {
        return (<div>Loading...</div>);
    }

    if (myEvents.length === 0) {
        return (
            <ul>
                <li>---</li>
            </ul>
        );
    }

    console.log(`[DayBoxList/DayBoxList]: events for ${dayDate} = ${JSON.stringify(myEvents)}`);

    // if (view === 'month') {
    //     return (
    //         <ul>
    //             {myEvents.map(planned => (
    //                 <li key={planned.id}>
    //                     <h5>{planned.planned_title}</h5>
    //                     <h6>{planned.planned_description}</h6>
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    // return (
    //     <ul>
    //         {myEvents.map(planned => (
    //             <OverlayTrigger
    //                 trigger="hover || focus"
    //                 key={planned.id}
    //                 placement="right"
    //                 overlay={
    //                     <Popover id={`plannedPopover${planned.id}`}>
    //                         <Popover.Header as="h3">{planned.planned_title}</Popover.Header>
    //                         <Popover.Body style={{'margin':'0px 10px 0px 10px'}}>
    //                             <Col>
    //                                 <Row>{planned.planned_description}</Row>
    //                                 <Row>Category: {planned.category.category_name}</Row>
    //                                 <Row>Plan Type: {planned.planType.planType_name}</Row>
    //                             </Col>
    //                         </Popover.Body>
    //                     </Popover>
    //                 }
    //                 >
    //                     <li key={planned.id} className={planned.category.category_name} id={planned.planType.planType_name}>
    //                         <h5>{planned.planned_title}</h5>
    //                         <h6>{planned.planned_description}</h6>
    //                     </li>
    //             </OverlayTrigger>
    //         ))}
    //     </ul>
    // );

    return (
        <ul>
            {myEvents.map(planned => (
                <li key={planned.id}>
                    <h5>{planned.planned_title}</h5>
                    <h6>{planned.planned_description}</h6>
                </li>
            ))}
        </ul>
    );
}

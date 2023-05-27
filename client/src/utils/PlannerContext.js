import React, { useState, createContext, useContext } from "react";
import DataService from '../services/dataService';


const PlannerContext = createContext();
const { Provider } = PlannerContext;

const PlannerProvider = ({ children })  => {

    const [view, setView] = useState('day');

    const changeView = (viewStr) => {
        setView(viewStr);
    };

    const [timestamp, setTimestamp] = useState((new Date()).getTime());

    const changeTimestamp = (newTime) => {
        setTimestamp(newTime);
        setTSDate(new Date(newTime));
    };

    const [TSDate, setTSDate] = useState(new Date(timestamp));

    const changeTSDate = (date) => {
        setTimestamp(date.getTime());
        setTSDate(date);
    };

    const [boxDate, setBoxDate] = useState(new Date());

    const changeBoxDate = (date) => {
        setBoxDate(date);
    };

    return (
        <PlannerContext.Provider
            value={{ view, changeView, timestamp, changeTimestamp, TSDate, changeTSDate, boxDate, changeBoxDate }}
        >
            {/* We render children in our component so that any descendent can access the value from the provider */}
            {children}
        </PlannerContext.Provider>
    );
};

const usePlannerContext = () => {
  return useContext(PlannerContext);
};

export { PlannerProvider, usePlannerContext };


import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Day from './Day';
import Week from './Week';
import Month from './Month';
import Settings from './Settings';

export default function PlannerContainer() {
  const [currentPage, setCurrentPage] = useState('Day');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    console.log(`current page = ${currentPage}`)
    if (currentPage === 'Day') {
      return <Day />;
    }
    if (currentPage === 'Week') {
      return <Week />;
    }
    if (currentPage === 'Month') {
      return <Month />;
    }
    if (currentPage === 'Settings') {
        return <Settings />;
    }
    return <Day />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
  );
}

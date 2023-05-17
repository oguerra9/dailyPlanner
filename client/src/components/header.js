import React from 'react';
import NavBar from './NavBar';
import DateBar from './DateBar';

export default function Header() {
    return (
        <header>
            <NavBar />
            <DateBar />
        </header>
    );
}
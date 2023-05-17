import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlannerContainer from "./pages/PlannerContainer";
import Day from "./pages/Day";
import Week from "./pages/Week";
import Month from "./pages/Month";
import Settings from "./pages/Settings";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <div className="flex-column justify-center align-center min-100-vh bg-primary">
                <Header />
                <Routes>
                    <Route 
                        path="/" 
                        element={<Day />}
                    />
                    <Route 
                        path="/day" 
                        element={<Day />}
                    />
                    <Route 
                        path="/week" 
                        element={<Week />}
                    />
                    <Route 
                        path="/month"
                        element={<Month />}
                    />
                    <Route 
                        path="/settings"
                        element={<Settings />}
                    />
                </Routes>
            </div>
        </Router>
    );
  }

export default App;

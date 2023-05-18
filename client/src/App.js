import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlannerContainer from "./pages/PlannerContainer";
import NavBar from "./components/NavBar";
import Settings from './pages/Settings';

function App() {
    return (
        <Router>
            <div className="flex-column justify-center align-center min-100-vh bg-primary">
                <NavBar />
                <Routes>
                    <Route 
                        path="/" 
                        element={<PlannerContainer view={'day'}/>}
                    />
                    <Route 
                        path="/day" 
                        element={<PlannerContainer view={'day'}/>}
                    />
                    <Route 
                        path="/day/:id" 
                        element={<PlannerContainer view={'day'}/>}
                    />
                    <Route 
                        path="/week" 
                        element={<PlannerContainer view={'week'}/>}
                    />
                    <Route 
                        path="/week/:id" 
                        element={<PlannerContainer view={'week'}/>}
                    />
                    <Route 
                        path="/month" 
                        element={<PlannerContainer view={'month'}/>}
                    />
                    <Route 
                        path="/month/:id" 
                        element={<PlannerContainer view={'month'}/>}
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

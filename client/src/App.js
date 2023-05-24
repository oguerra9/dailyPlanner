import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlannerContainer from "./pages/PlannerContainer";
import NavBar from "./components/NavBar";
import Settings from './pages/Settings';
import { PlannerProvider, usePlannerContext } from './utils/PlannerContext';

function App() {

    return (
        <Router>
            <div className="flex-column justify-center align-center min-100-vh bg-primary">
                <PlannerProvider>
                    <NavBar />
                    <Routes>
                        <Route 
                            path="/" 
                            element={<PlannerContainer propView={'day'}/>}
                        />
                        <Route 
                            path="/day" 
                            element={<PlannerContainer propView={'day'}/>}
                        />
                        <Route 
                            path="/day/:timestamp" 
                            element={<PlannerContainer propView={'day'}/>}
                        />
                        <Route 
                            path="/week" 
                            element={<PlannerContainer propView={'week'}/>}
                        />
                        <Route 
                            path="/week/:timestamp" 
                            element={<PlannerContainer propView={'week'}/>}
                        />
                        <Route 
                            path="/month" 
                            element={<PlannerContainer propView={'month'}/>}
                        />
                        <Route 
                            path="/month/:timestamp" 
                            element={<PlannerContainer propView={'month'}/>}
                        />
                        <Route 
                            path="/settings" 
                            element={<Settings />}
                        />
                    </Routes>
                </PlannerProvider>
            </div>
        </Router>
    );
  }

export default App;

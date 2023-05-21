import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DataService from '../services/dataService';
import '../index.css';


function Settings() {
    const [mySettings, setMySettings] = useState({});
    const [isLoading, setLoading] = useState(true);
        
    useEffect(() => {
        getMySettings();
    }, []);
        
    const getMySettings = () => {
        (DataService.getAllSettings()).then((response) => {
            setMySettings(response.data);
            setLoading(false);
            console.log(response.data);
        });
    };
        
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Container style={{'width':'30%'}}>
            {mySettings.map(setting => (
              <Row key={`setting${setting.id}`}>
                <Col className={setting.setting_name}>{setting.setting_name}</Col>
                <Col className={setting.setting_value}>{setting.setting_value}</Col>
              </Row>
            ))}
        </Container>
    );
}

export default Settings;
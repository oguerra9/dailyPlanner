import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react";
import DataService from '../services/dataService';


export default function NewToDoForm() {
    const [newToDoFormData, setNewToDoFormData] = useState(
        { 
            planned_date: '', 
            planned_time: '',
            planned_title: '',
            planned_am: '',
            planned_description: '',
            category_id: '',
            planType_id: '',
            planned_active: '',
        }
    );
    const [date, setDate] = useState(new Date());   

        
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewToDoFormData({ ...newToDoFormData, [name]: value });
    };

    const submitForm = (event) => {
        event.preventDefault();

        let currDate = new Date();
        let currTS = currDate.getTime();

        console.log(`[NewToDoForm/NewToDoForm/submitForm]: new todo form data = ${JSON.stringify(newToDoFormData)}`);
        newToDoFormData.planned_date = new Date();
        newToDoFormData.planned_time = "00:00";
        newToDoFormData.category_id = parseInt(newToDoFormData.category_id);
        newToDoFormData.planType_id = 2;
        newToDoFormData.planned_active = true;
        newToDoFormData.planned_am = true;
       

        (DataService.createPlanned(newToDoFormData)).then((response) => {
            console.log(`[NewToDoForm/NewToDoForm/submitForm/DS.createPlanned]: ${response.data}`);
        });

    };

    return (
        <Form>
            <Container>
                <Form.Group className="mb-3" controlId="toDo_Title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="planned_title" onChange={handleChange} value={newToDoFormData.planned_title} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="toDoDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="planned_description" value={newToDoFormData.planned_description} onChange={handleChange} />
                </Form.Group>
            </Container>
            <Container>
                <Form.Group 
                    className="mb-3"  
                    name="category_id" 
                    controlId="category_id"
                    value={newToDoFormData.category_id} 
                    onChange={e => {
                        console.log("selected category id:", e.target.value);
                        setNewToDoFormData({ ...newToDoFormData, category_id: e.target.value });
                    }}
                >
                    <Form.Label>Category</Form.Label>
                    <CategoryList />
                </Form.Group>
            </Container>
            <Button variant="primary" type="submit" onClick={submitForm}>
                Add To Do
            </Button>
        </Form>
    );
}

function CategoryList() {
    const [myCategories, setMyCategories] = useState({});
    const [isLoadingCat, setLoadingCat] = useState(true);

    useEffect(() => {
        getMyCategories();
    }, []);

    const getMyCategories = () => {
        (DataService.getAllCategories()).then((response) => {
            setMyCategories(response.data);
            setLoadingCat(false);
        });
    };

    if (isLoadingCat) {
        return (
            <Form.Select>
                <option>Select</option>
                <option>Loading...</option>
            </Form.Select>
        );
    }
    return (
        <Form.Select>
            <option>Select</option>
            {myCategories.map(category => (
                <option key={category.id} value={category.id}>{category.category_name}</option>
            ))}
        </Form.Select>
    );

}


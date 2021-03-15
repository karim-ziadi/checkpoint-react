import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navrr from "./component/Navbar/Navbar";

import { Button, Form } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <div className="header">
                <h1>Hello</h1>
                <img src="https://image.flaticon.com/icons/png/128/3845/3845871.png"></img>
            </div>
            <Navrr />
            <Form className="Abo">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className="mail"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default App;

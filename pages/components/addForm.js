import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



import 'bootstrap/dist/css/bootstrap.min.css';


function handleSubmit(e){
    e.preventDefault();
    console.log(e);
}


export default function AddForm(){
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>your PET type</Form.Label>
                <Form.Control type="text" placeholder="Enter your PET type" />
                {/* <Form.Text className="text-muted">
                What would you like to add today, make it fun ...
                </Form.Text> */}
            </Form.Group>
            <Form.Group>
                <Form.Label>Family</Form.Label>
                <Form.Control type="text" placeholder="Enter your PET family" />
               
            </Form.Group>
            <Form.Group>
                <Form.Label>Pick service you want</Form.Label>
                <select>
                <option>treatment</option>
                <option>shaving</option>
                <option>food consultant</option>
                <option>accessoris</option>
                </select>
                

            </Form.Group>

            <Form.Group>
                <Form.Label>Decription of problem</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button style={{color: 'yellow'}} bg="dark" variant="dark">
                Add
            </Button>
        </Form>
    );
}
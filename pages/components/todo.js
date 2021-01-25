import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import 'bootstrap/dist/css/bootstrap.min.css';


import AddForm from '../components/addForm'
import TodoList from '../components/todoList'

const itemsList = [
    {id:1, type:'cat', family:'hemalaian', service:'shaving',desc:'shave deep lev'},
    {id:2, type:'dog', family:'german-shipered',service:'tratment', desc:'check tratment line'},
    {id:3, type:'dog', family:'shiwawa',service:'accesoris', desc:'finde sutable accesoris '},
  
];


export default function Todo(props){
    return(
        <>
            <header>
                <Navbar bg="dark" variant="dark" style={{color: 'yellow'}}>
                    <Nav className="mr-auto">
                        <Nav.Link style={{color: 'yellow'}} href="/">Home</Nav.Link>
                        <h1>Pets Home</h1>
                        
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button  style={{color: 'yellow'}} variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </header>
            <Container>
                <Row>
                    <Col>
                        <Navbar bg="purple" variant=" purple">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"></Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AddForm />
                    </Col>
                    <Col>
                        <TodoList todos={itemsList} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
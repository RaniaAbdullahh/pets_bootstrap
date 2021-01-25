import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'


import 'bootstrap/dist/css/bootstrap.min.css';


export default function TodoList(props){
    return(
        <Row>
            {props.todos.map( item => (
                <Toast>
                    <Toast.Header>
                        <strong className="mr-auto">{item.family}</strong>
                        <small>{item.type}</small>

                      
                    </Toast.Header>
                    <strong className="mr-auto">{item.service}</strong>
                    <Toast.Body>{item.desc}</Toast.Body>
                </Toast>)
            )}
        </Row>
    );
}

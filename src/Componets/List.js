import React from "react";
import ReactDom from "react-dom";
import { Dropdown } from "react-bootstrap";
class List extends React.Component {
    handlerChange =(i)=>{
        console.log(i.target.name);
        this.setState({
        [i.target.name]: i.target.value,
    });
    };
    constructor(props) {
        super(props);
        this.state = {
            data: {patients: []} ,

        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.fetchCharacters();
        });
    }
    fetchCharacters = async () => {
        const response = await fetch("http://127.0.0.1:3005/patient/");
        const data = await response.json();

        this.setState({ data:{ patients: data.patients }});

        console.log(data);
    };
    state = {
        data: {
            patients: {
                _id: "",       
                lastName: "",
                name: " ",
            }
        }

    }


    render() {
        return (

            <select>
                {this.state.data.patients.map((item) => {
                  
                return<option id="paciente" name="paciente" value={item._id} onChange={this.props.onChange} > {item.name +" "+  item.lastName}</option>
                })}
            </select>
            /*<div>
 
           
             <Dropdown>
                 <Dropdown.Toggle variant="success" id="dropdown-basic">
                     Pacientes
             </Dropdown.Toggle>
 
                 <Dropdown.Menu>
                {this.state.data.patients.map((item) => {
                    <Dropdown.Item title={item.name}>{item.name }</Dropdown.Item>

                })} 
 
                 </Dropdown.Menu>
             </Dropdown>
             </div>*/
        );
    }
}
export default List;
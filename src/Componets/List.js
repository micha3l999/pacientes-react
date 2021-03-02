import React from "react";
import ReactDom from "react-dom";
import { Dropdown } from "react-bootstrap";
class List extends React.Component {
    handlerChange =(e)=>{
        console.log(e.target.name);
        this.setState({
        [e.target.name]: e.target.value,
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

            <select id="el_select" name="el_select"onChange={this.props.onChange}>
                <option value=""> hola</option>
                {this.state.data.patients.map((item) => {
                  
                return<option value={item._id} onChange={this.props.onChange} > {item.name +" "+  item.lastName}</option>
                })}
                <br></br>
            </select>
           /* <div>
 
           
             <Dropdown>
                 <Dropdown.Toggle variant="success" id="dropdown-basic">
                     Pacientes
             </Dropdown.Toggle>
 
                 <Dropdown.Menu>
                {this.state.data.patients.map((item) => {
                    return  <Dropdown.Item id="abcd" name="abcd" value="56789123" onChange={this.props.onChange} title={item.name}>{item.name }</Dropdown.Item>

                })} 
 
                 </Dropdown.Menu>
             </Dropdown>
             </div>*/
        );
    }
}
export default List;
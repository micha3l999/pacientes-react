import React from "react";
import ReactDom from "react-dom";
import List from "./List";


class DeleteRecord extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ap:[],
        }
        this.setState({ send: false });
       
    }
    componentDidUpdate(oldState, newState) {
        console.log(oldState, newState);
    }
    state = {
        ap:{
          el_select:"",
        },}
        handlerChange = (e) => {
            console.log(e.target.name);
            this.setState({
                ap: {
                    ...this.state.ap,
                    [e.target.name]: e.target.value,
                }
            });
        };
    render(){
        return(
          <div className="Container">
            <h2 align="center"> Eliminar Historial del paciente</h2>
                <div className="row">
                 
                    <div className="col-12">
                    <div align="center">
                    <List onChange={this.handlerChange}></List>

                    </div>
                    <p></p>
                    <div align="center">
                    <button   className="btn btn-danger" width="250px" onClick={this.handlerClick} type="button">Eliminar historial</button>

                    </div>
                    </div>
                  
                </div>
                </div>
        );
    }
    eliminarRegistro = async () => {
        const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify(this.state.ap
             
            ),
        };
        const response = await fetch(

            "http://localhost:3005/record/from" + "/" + this.state.ap.el_select,
            requestOptions
        )

        const data = await response.json();
        this.setState({ ...this.state, send: true });
    }
    handlerClick = (e) => {
        e.preventDefault();
        this.eliminarRegistro();
    }
}
export default DeleteRecord;
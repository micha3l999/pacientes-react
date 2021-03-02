import React from "react";
import ReactDom from "react-dom";
import DeleteRecord from "./DeleteRecord";
import List from "./List";
import Fotito from "../logo.svg";

class PageDeleteP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ap: [],
        }
        this.setState({ send: false });

    }
    componentDidUpdate(oldState, newState) {
        console.log(oldState, newState);
    }
    state = {
        ap: {
            el_select: "",
        },
    }
    handlerChange = (e) => {
        console.log(e.target.name);
        this.setState({
            ap: {
                ...this.state.ap,
                [e.target.name]: e.target.value,
            }
        });
    };
    render() {
        return (

            <div className="Container">
                <h1 align="center"> Eliminacion de pacientes  e historiales medicos</h1>


                <div className="row">

                    <div className="col-6">
                        <h2 align="center"> Eliminar paciente</h2>
                        <div align="center">
                            <List onChange={this.handlerChange}></List>
                        </div>
                        <p></p>
                        <div align="center">
                            <button className="btn btn-danger" width="250px" onClick={this.handlerClick} type="button">Eliminar paciente</button>

                        </div>

                    </div>
                    <div className="col-6">
                        <DeleteRecord></DeleteRecord>

                    </div>
                </div>

                <div align="center">
                          <img src={Fotito} className="App-logo" alt="logo" />

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

            "http://localhost:3005/patient/_id" + "/" + this.state.ap.el_select,
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
export default PageDeleteP;
import React from "react";
import ReactDom from "react-dom";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.css";
import Check from "./Check";
class Page extends React.Component {

    constructor(props) {
        super(props);
        this.setState({ send: false });
    }
    state = {
        ap: {
            name: "",
            lastName: "",
            age: 0,
            medicines: "",
            email: "",
            password: "",
            c_password: "",
            address: "",
            mobile: "",
            s1: "",
            s2: "",
            s3: "",
            s4: "",
            s5: "",
            s6: "",
            s7: "",
            s8: "",
            s9: "",

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
            <h1 align="center"> Registro de pacientes </h1>

                <div className="row">
                    <div className="col-9">
                        <h2 align="center"> Datos personales</h2>
                        <Form onChange={this.handlerChange}></Form>

                    </div>

                    <div className="col-3">

                    <h2 align="center"> Sintomas</h2>
                    <Check onChange={this.handlerChange}>

                    </Check>
                    </div>
                </div>
                <div align="center">
                    <button class="btn btn-outline-light" onClick={this.handlerClick} type="button">Env</button>
                </div>
            </div>
        )
    }
    componentDidUpdate(oldState, newState) {
        console.log(oldState, newState);
    }
    insertarRegistro = async () => {
        var s;
        let sintomas = [];
        let symptoms = [];
        if (this.state.ap.s1.length != 0) {
            symptoms.push(this.state.ap.s1);
        }
        if (this.state.ap.s2.length != 0) {
            symptoms.push(this.state.ap.s2);
        }
        if (this.state.ap.s3.length != 0) {
            symptoms.push(this.state.ap.s3);
        }
        if (this.state.ap.s4.length != 0) {
            symptoms.push(this.state.ap.s4);
        }
        if (this.state.ap.s5.length != 0) {
            symptoms.push(this.state.ap.s5);
        }
        if (this.state.ap.s6.length != 0) {
            symptoms.push(this.state.ap.s6);
        }
        if (this.state.ap.s7.length != 0) {
            symptoms.push(this.state.ap.s7);
        }
        if (this.state.ap.s8.length != 0) {
            symptoms.push(this.state.ap.s8);
        }
        if (this.state.ap.s9.length != 0) {
            symptoms.push(this.state.ap.s9);
        }

        var medicinaes;
        var amedi;
        amedi = this.state.ap.medicines;
        medicinaes = this.state.ap.medicines.split(',');

        console.log("Medicna:" + amedi + "   Aedi:" + medicinaes + "    Sintomas:  " + symptoms);
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({
                name: this.state.ap.name,
                lastName: this.state.ap.lastName,
                age: this.state.ap.age,
                medicines: medicinaes,
                email: this.state.ap.email,
                password: this.state.ap.password,
                c_password: this.state.ap.c_password,
                address: this.state.ap.address,
                mobile: this.state.ap.mobile,
                symptoms: symptoms,
                // symptoms: ["TOS_SECA"],


            }),
        };
        const response = await fetch(
            "http://127.0.0.1:3005/patient/",
            requestOptions
        )
        const data = await response.json();
        this.setState({ ...this.state, send: true });
    };
    handlerClick = (e) => {
        e.preventDefault();
        this.insertarRegistro();
    }
}
export default Page;
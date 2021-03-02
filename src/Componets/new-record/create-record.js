import React from "react";
import ReactDom from "react-dom";
import List from "../List";
import Check from "../Check";

let id = "";

class CreateRecord extends React.Component {

  constructor(props) {
    super(props);
    this.setState({ send: false });
    
  }


  state = {
    ap:{
      el_select:"",
      result: "",
      s1: "",
      s2: "",
      s3: "",
      s4: "",
      s5: "",
      s6: "",
      s7: "",
      s8: "",
      s9: "",
    }
  }

  async createRecord() {
    
    let symptoms = [];
    if (this.state.ap.s1 !== "") symptoms.push(this.state.ap.s1);
    if (this.state.ap.s2 !== "") symptoms.push(this.state.ap.s2);
    
    if (this.state.ap.s3 !== "") symptoms.push(this.state.ap.s3);
    if (this.state.ap.s4 !== "") symptoms.push(this.state.ap.s4);
    if (this.state.ap.s5 !== "") symptoms.push(this.state.ap.s5);
    if (this.state.ap.s6 !== "") symptoms.push(this.state.ap.s6);
    if (this.state.ap.s7 !== "") symptoms.push(this.state.ap.s7);
    if (this.state.ap.s8 !== "") symptoms.push(this.state.ap.s8);
    if (this.state.ap.s9 !== "") symptoms.push(this.state.ap.s9);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        covid_19ExamResult: this.state.ap.result,
        patient: id,
        symptoms: symptoms
      }),
    };
    const response = await fetch(
            "http://localhost:3005/record/",
            requestOptions
    );
    console.log(response);
  }

  handlerChange = (e) => {
    console.log(e.target.value);
    this.setState({
        ap: {
            ...this.state.ap,
            [e.target.name]: e.target.value,
        }
    });
  }

  
  handlerClick = (e) => {
      e.preventDefault();
      id=this.state.ap.el_select;
      this.createRecord();
  }

  handlerCheck = (e) => {
    const target = e.target.id;
    console.log(target);
    const check1 = document.getElementById("radioCheck1");
    const check2 = document.getElementById("radioCheck2");
    if (target === "radioCheck1") {
      if (check2.checked) { 
        document.getElementById("radioCheck2").checked = false;
      }

      this.setState({
        ap: {
          ...this.state.ap,
          result: true,
        }
      });
    } else if (target === "radioCheck2") {
      if (check1.checked) { 
        document.getElementById("radioCheck1").checked = false;
      }

      this.setState({
        ap: {
          ...this.state.ap,
          result: false,
        }
      });
    }

    console.log(this.state.ap.result);
  }

  render() {
    return (
      <div>
        <h1 style={{"textAlign" : "center"}}>Cita Médica</h1>
        <div className="row">
          <div className=" text-center col-lg-6 ">
            <h4>Selecciona el paciente a insertar el registro</h4>
            
            <List onChange={this.handlerChange}></List>

            <img src="./logo512.png" alt="Imagen de fondo"></img>
            
          </div>
          <div className="col-lg-6">
            <h4>Resultados de la cita médica</h4>
            <div className="form-group">
              <div className="form-check">
                <div>
                  <input onClick={this.handlerCheck} className="form-check-input" type="checkbox" id="radioCheck1"/>
                  <label className="form-check-label" for="radioCheck1">
                    Tiene covid
                  </label>
                </div>
                <div style={{"position" : "relative", "top" : "-23px", "left" : "200px", "right": "50px", "width": "110px", "marginRight" : "-20px"}}>
                  <input onClick={this.handlerCheck} className="form-check-input" type="checkbox" id="radioCheck2"/>
                  <label className="form-check-label" for="radioCheck2">
                    No tiene covid
                  </label>
                </div>
              </div>
            </div>
            <h5>Síntomas del paciente</h5>
            <Check onChange={this.handlerChange}></Check>
          </div>
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-dark" onClick={this.handlerClick}>Crear cita medica</button>
        </div>
      </div>
      
    );
  }


}

export default CreateRecord;
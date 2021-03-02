import React from "react";
import ReactDom from "react-dom";

class CreateRecord extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ send: false});

  }

  componentDidMount() {

  }

  async fetchUsers(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-PINGOTHER": "pingpong" },
      body: JSON.stringify({
        covid_19ExamResult: true,
        patient: "21312",
      }),
    };
    const response = await fetch(
            "http://localhost:3005/record/",
            requestOptions
    );
  }

  render() {
    return (
      <div>
        <h1 style={{"textAlign" : "center"}}>Citas Médicas</h1>
        <div className="col-lg-6">
          <h2>Selecciona el paciente a insertar el registro</h2>
          <br/>
          <select style={{"width" : "430px"}}>
            <option value={"hello "}>hello</option>
          </select>
        </div>
      </div>
      
    );
  }


}

export default CreateRecord;
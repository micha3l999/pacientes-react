import React from "react";
import ReactDom from "react-dom";

class Form extends React.Component {
    handlerChange =(e)=>{
        console.log(e.target.name);
        this.setState({
        [e.target.name]: e.target.value,
    });
    };
    render() {
        return (
            <div>

                <div className="form-floating mb-3">
                    <label htmlfor="exampleInputPassword1">Nombre</label>
                    <input type="text" className="form-control" onChange={this.props.onChange} id="name" name="name" placeholder="" />
                </div>
                <p></p>
                <div className="form-floating">
                    <label htmlfor="exampleInputPassword1">Apellido</label>
                    <input type="text" className="form-control" onChange={this.props.onChange} id="lastName" name="lastName" placeholder="" />
                </div>
                <p></p>
                <div className="form-floating">
                    <label htmlfor="exampleInputPassword1"> Edad </label>
                    <input type="number" className="form-control" onChange={this.props.onChange} id="age" name="age" placeholder="" />
                </div>
                <p></p>
                <div className="form-floating">
                    <label htmlfor="exampleInputPassword1">Medicina </label>
                    <input type="text" className="form-control" onChange={this.props.onChange} id="medicines" name="medicines" placeholder="" />

                </div>
                <p></p>
                
                <div className="form-floating">
                    <label htmlfor="exampleInputPassword1">Email</label>
                    <input type="email" className="form-control" onChange={this.props.onChange} id="email" name="email" placeholder="" />

                </div>
                <div className="form-floating">
                    <label htmlfor="exampleInputPassword1">Contraseña </label>
                    <input type="password" className="form-control" onChange={this.props.onChange} id="password" name="password" placeholder="" />

                </div>
                <p></p>
                <div className="form-floating">
                    <label htmlfor="exampleInputPassword1">Confimar Contraseña</label>
                    <input type="password" className="form-control" onChange={this.props.onChange} id="c_password" name="c_password" placeholder="" />

                </div>
                <p></p>
                <div className="form-floating">
                    <label htmlfor="exampleInputPassword1">Direccion </label>
                    <input type="text" className="form-control" onChange={this.props.onChange} id="address" name="address" placeholder="" />

                </div>
                <div className="form-floating">
                    <label htmlfor="exampleInputPassword1">Numero de celular </label>
                    <input type="text" className="form-control" onChange={this.props.onChange} id="mobile" name="mobile" placeholder="" />

                </div>
                <p></p>
               
                 </div>

        );
    }
 
}
export default Form;
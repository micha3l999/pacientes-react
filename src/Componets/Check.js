import React from "react";
import ReactDom from "react-dom";

class Check extends React.Component {
    handlerChange =(a)=>{
        console.log(a.target.name);
        this.setState({
        [a.target.name]: a.target.value,
    });
    };
    render() {
        return (
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="FIEBRE" onChange={this.props.onChange} id="s1" name="s1"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Fiebre</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="PERDIDA_DEL_OLFATO" onChange={this.props.onChange} id="s2" name="s2"  />
                    <label className="form-check-label" for="flexCheckDefault">
                        Perdida del olfato </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="PERDIDA_DEL_GUSTO"  onChange={this.props.onChange} id="s3" name="s3" />
                    <label className="form-check-label" for="flexCheckChecked">
                        Perdida del gusto </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="CANSANCIO" onChange={this.props.onChange} id="s4" name="s4" />
                    <label className="form-check-label" for="flexCheckChecked">
                        Cansancio  </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="TOS_SECA" onChange={this.props.onChange}  id="s5" name="s5" />
                    <label className="form-check-label" for="flexCheckChecked">
                        Tos Seca </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="DOLOR_DE_PECHO" onChange={this.props.onChange} id="s6" name="s6" />
                    <label className="form-check-label" for="flexCheckChecked">
                        Dolor de pecho </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="DOLOR_DE_GARGANTA" onChange={this.props.onChange} id="s7" name="s7" />
                    <label className="form-check-label" for="flexCheckChecked">
                        Dolor de garganta  </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="INCAPACIDAD_PARA_HABLAR" onChange={this.props.onChange} id="s8" name="s8" />
                    <label className="form-check-label" for="flexCheckChecked">
                        Incapacidad para hablar </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="INCAPACIDAD_PARA_MOVERSE" onChange={this.props.onChange}  id="s9" name="s9" />
                    <label className="form-check-label" for="flexCheckChecked">
                        Incapacidad para mover  </label>

                </div>
            </div>
        )
    }
}
export default Check;
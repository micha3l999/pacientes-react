import React from "react";
import ReactDom from "react-dom";

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                   ID: {this.props.Serial}
                 </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>Sintomas: {this.props.Sintomas}</p>
                        <footer className="blockquote-footer"> Paciente: {this.props.Paciente}</footer>
                    </blockquote>
                </div>
            </div>
        );
    }
}
export default Card;
import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import List from "./List";

var name;
name="";
class PageRoutes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: { records: [] },
            ap:[],
        }
        this.setState({ send: false });
       
    }
  
    state = {
      ap:{
        el_select:"",
      }        }
      

     handlerChange = (e) => {
        console.log(e.target.name);
        this.setState({
            ap: {
                ...this.state.ap,
                [e.target.name]: e.target.value,
            }
        });
    };
    componentDidMount() {
        setTimeout(() => {
            this.fetchCharacters();
        });
    }
   



    fetchCharacters = async () => {
        
        const response = await fetch("http://127.0.0.1:3005/record/" + name);
        const data = await response.json();

        this.setState({ data: { records: data.records } });

        console.log(data);
        name="";

    }

    componentDidUpdate(oldState, newState) {
        console.log(oldState, newState);
    }

    render() {
        
        return (
            <div className="Container">
                <div className="row">
                    <div className="col-6">
                        <List onChange={this.handlerChange} ></List>
                        <br></br>
                        <p></p>
                        <div  align="center">
                            <button  borderRadius="10" borderWidth="10" className="btn btn-success" width="250px" onClick={this.handlerClick} type="button">Buscar  historial medico  del paciente selecionado</button>

                        </div>
                    </div>
                    <div className="col-6">
                        {this.state.data.records.map((item) => {
                            return <Card Paciente={item.patient} Sintomas={item.symptoms + ""} Serial={item._id}></Card>
                        })}
                    </div>
                </div>
            </div>
        );
    }
    getRecord = () => {
     name=this.state.ap.el_select;
     console.log("ID : "+name)
     
     
    }

    handlerClick = (e) => {
        e.preventDefault();
        name=this.state.ap.el_select;
        this.fetchCharacters();
    }
}
export default PageRoutes;
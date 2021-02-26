import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import List from "./List";

class PageRoutes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {records: []} 
    }
}

    asda = {
        sd: {
            paciente: "60243cb178b84c291cd31c72",
        }

    }
    handlerChange = (e) => {
        console.log(e.target.name);
        this.setState({
            sd: {
                ...this.state.sd,
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
        const response = await fetch("http://127.0.0.1:3005/record/"+ this.asda.sd.paciente);
        const data = await response.json();

        this.setState({ data:{ records: data.records }});

        console.log(data);
    }
   
  

    render() {
        return (
            <div className="Container">
                <div className="row">
                    <div className="col-6">
                        <List onChange={this.handlerChange} ></List>
                        <div align="center">
                            <button class="btn btn-success" onClick={this.handlerClick} type="button">Env</button>
                        </div>
                    </div>
                    <div className="col-6">
                        {this.state.data.records.map((item)=>{
                            return<Card Paciente={item.patient} Sintomas={item.symptoms+""} Serial={item._id}></Card>
                        })}
                        
                    </div>
                </div>
            </div>
        );
    }
    /*getRecord = async () => {
        
     
        };
    }*/

    handlerClick = (e) => {
        e.preventDefault();
        this.getRecord();
    }
}
export default PageRoutes;
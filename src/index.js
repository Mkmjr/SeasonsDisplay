import React from "react";
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";


class App extends React.Component {
    state = {lat: null, errorMessage: ''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition
        (
            (position) => {
                this.setState({ lat: position.coords.latitude});
            },
            (err) => {
                this.setState({ errorMessage: err.message});
            }
        );
    }
    
    renderConfig()
    {
        if(this.state.lat && !this.state.errorMessage)
        {
            console.log(this.state.lat);
            return <SeasonDisplay lat = {this.state.lat} />
        }
        if(!this.state.lat && this.state.errorMessage)
        {
            return <h2>Error Message: {this.state.errorMessage}</h2>
        }

        return <Spinner message = "Please accept the location pop up box!!!"/>
    }

    render() {
        return(
        <div>{this.renderConfig()}</div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
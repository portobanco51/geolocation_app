import React from 'react'
import ReactDOM from 'react-dom';
import { HemisphereDisplay } from "./components/HemisphereDisplay";
import './css/style.css';

// FUNCTIONAL COMPONENT

// export const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => { console.log(position) },
//         (error) => console.log(error)
//     );

//     return (
//         <div>
//             Latitude:
//         </div>
//     )
// }


// CLASS COMPONENT
class App extends React.Component {

    state = { latitude: null, errorMsg: '' }

    componentDidUpdate() {
        // what happens right when the component mounts
        console.log('component did update')
    }

    componentDidMount() {
        console.log('component did mount')
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude })
            },
            (error) => {
                this.setState({ errorMsg: error.message })
            }
        );
    }

    render() {
        if (this.state.errorMsg && !this.state.latitude) {
            return (<div className='error'><b>{this.state.errorMsg}</b></div>)
        }
        if (!this.state.errorMsg && this.state.latitude) {
            return (
                <div className='content'>
                    {/* <b>Latitude: </b>{this.state.latitude} */}
                    <HemisphereDisplay latitude={this.state.latitude} />
                </div>)
        } else {
            return (<div className='content'><b>Loading...</b></div>)

        }
    }
}



ReactDOM.render(<App />, document.querySelector('#root'))
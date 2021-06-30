import './App.css';
import React, {Component} from 'react';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation.js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import Particles from 'react-particles-js';


// const app = new Clarifai.App({
//   apikey: '30fd62b925e44a14a2a2028dfcc588c3'
// });

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area:800
      }
    }
  }


}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl:''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input})
    console.log('click');
    // app.models.predict("")
    // .predict(
    //   Clarifai.COLOR_MODEL,
    //   this.state.input)
    // .then(
    //   function(resp))
  }

  render() {
    return (
      <div className="App">
       <Particles className='particles'
          params={particlesOptions} 
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;

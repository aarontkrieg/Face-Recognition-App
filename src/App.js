import './App.css';
import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import Particles from 'react-particles-js';

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
  render() {
    return (
      <div className="App">
       <Particles className='particles'
          params={particlesOptions} 
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />

      </div>
    );
  }
}

export default App;

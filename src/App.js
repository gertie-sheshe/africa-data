import React, {Component} from 'react';
import SideBar from './components/sidebar/sidebar';
import MainContent from './components/maincontent/main-content';
import countries from './countries';
import './App.scss';

class App extends Component {
  state = {
    toggle: false,
    data: null
  }

  toggleState = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  selectCountry = (country) => {
    this.setState({
      data: countries[country]
    })
  }

  componentDidMount = () => {
    this.setState({
      data: countries['kenya']
    });
  }

  render() {
    let countryData = this.state.data
    return (
      <main className="main">
        <SideBar selectCountry={this.selectCountry} toggle={this.state.toggle} toggleState={this.toggleState}/>
        <MainContent countryData={countryData} toggleState={this.toggleState}/>
      </main>
    );
  }
}

export default App;

import React, {Component} from 'react';
import SideBar from './components/sidebar/sidebar';
import MainContent from './components/maincontent/main-content';
import './App.scss';

class App extends Component {
  state = {
    toggle: false
  }

  toggleState = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <main className="main">
        <SideBar toggle={this.state.toggle} toggleState={this.toggleState}/>
        <MainContent toggleState={this.toggleState}/>
      </main>
    );
  }
}

export default App;

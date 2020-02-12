import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Button2 from './Button2';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.label = "Komponen Var Button";
    this.state = {
      list: {
        name: "Garry",
        phone: "08123456789"
      },
      date: "tanggal",
      label: "Komponen State Button"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {JSON.stringify(this.state.list)}
          </p>
          <p>
            {this.state.date}
          </p>
          <Button label="Button Class Component" />
          <Button2 label="Button Functional Component (React Hooks)" />
        </header>
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Button from './components/buttons';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 100
    }
  }
  render(){
    return(
      <div className="App">
        <h1 className="App-display">
          {this.state.count}
        </h1>
        <span className="App-controls">
          <Button onClick={this.plus}  text="+" />
          <Button onClick={this.minus} text="-" />
        </span>  
      </div>
    );
  }
  plus = () => {
    this.setState((state) => ({count: state.count + 1}));
  }
  minus = () => {
    this.setState((state) => ({count: state.count - 1}));
  }
}
export default Counter;

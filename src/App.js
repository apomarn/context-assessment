// import React from 'react';
import './App.css';
import React, {Component} from 'react';


const MyContext = React.createContext();
class MyProvider extends Component{
  state={
    x:0
  }

  
  render(){
    return(
      <MyContext.Provider value={{
        state:this.state,
        handleXClick:()=> this.setState({
          x: this.state.x + 1
        })
      }}>
      {this.props.children}
      </MyContext.Provider>
    )
  }
}
class A extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     x: 0
  //   };
  // }

  // handleXClick = () => {
  //   this.setState({
  //     x: this.state.x + 1
  //   });
  // }
  render() {
    return (
     
      <MyContext.Consumer>
        {(context)=>{
          return(
            <div className="component-A">
            <h1>Component A</h1>
            The state in the component A is {context.state.x} <br />
            context.handleXClick will set the state to a new value => {"this.setState({x: this.state.x + 1})"} 
            <B/>
            <D/>
            </div>
          )
        }}
      </MyContext.Consumer>
    );
  }
}
class B extends React.Component {
  render() {
    return (
      
      <MyContext.Consumer>
        {(context)=>{
          return(
            <div className="component-B">
            <h1>Component B</h1>
            this.props.x = {context.state.x} <br />
            this.props.onXClick => (method from component A) <br />
            <C/>
          </div>
          )
        }}
      </MyContext.Consumer>
    );
  }
}
class C extends React.Component {
  render() {
    return (
      
      <MyContext.Consumer>
        {(context)=>{
          return(
            <div className="component-C">
            <h1>Component C</h1>
            this.props.x = {context.state.x} <br />
            this.props.onXClick => (method passed from component B) <br />
            <button onClick={context.handleXClick}>{context.state.x}</button> onClick =>
            this.props.onXClick
          </div>
          )
        }}


      </MyContext.Consumer>
    );
  }
}
class D extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context)=>{
          return(
          <div className="component-D">
            <h1>Component D</h1>
            this.props.x = {context.state.x} <br />
            this.props.onXClick => (method from component A) <br />
            <button onClick={context.handleXClick}>{context.state.x}</button> onClick =>
            this.props.onXClick
          </div>

          )
          }}
      </MyContext.Consumer>
    );
  }
}


function App() {
  return (
    <MyProvider>
    <div className="App">
      <A />
    </div>
    </MyProvider>
  );
}
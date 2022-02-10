
import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Question from './Component/question';

class App extends Component {
getQuestion = async()=>{try{
  const response = await fetch('http://jservice.io/api/random')
  const data = await response.json()
  
this.setState({question: data[0]}) }
  catch(err){
      console.log(err)
  }

}
right = ()=>{

this.setState({score:( Number(this.state.score) + 1)})
console.log(this.state.score)
}
wrong =()=>{
  this.setState({score:( Number(this.state.score) - 1)})
  console.log(this.state.score)
}

state ={
question:null,
score: null
}

  render(){
  return (
    <div >
      <h1>Jeaopardys App</h1>

    <button onClick={this.getQuestion}>Random Trivia Question </button>
    <div>
     { this.state.question && <Question question={this.state.question}/>}
    {this.state.score && <h1 value={this.statescore} name='score'>Score:{this.state.score}</h1>}

</div>

{this.state.question && <button onClick={this.right}>Right</button>}
{this.state.question && <button onClick={this.wrong}>Wrong</button>}
    </div>
    
  );
}
}


export default App;


import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Answer from './Component/answer';
import Question from './Component/question';
// import Answer from './Component/answer';

class App extends Component {
getQuestion = async()=>{try{
  const response = await fetch('http://jservice.io/api/random')
  const data = await response.json()
  
this.setState({question: data[0], answer: ''}) }
  catch(err){
      console.log(err)
  }

}
right = ()=>{

this.setState({score:( Number(this.state.score) + Number(this.state.question.value))})
console.log(this.state.score)
}
wrong =()=>{
  this.setState({score:( Number(this.state.score) - Number(this.state.question.value))})
  console.log(this.state.score)
}
getAnswer =()=>{
 this.setState({answer: this.state.question.answer})
}
resetScore=()=>{
  this.setState({score: null, question: null},)
}

state ={
question:null,
score: null,
answer: null
}
componentDidMount= async()=>{
  try{
    const response = await fetch('http://jservice.io/api/random')
    const data = await response.json()
    
  this.setState({question: data[0], answer: ''}) }
    catch(err){
        console.log(err)
    }
  

}
  render(){
  return (
    <div >
      <h1 className='tittle'>Jeopardy App</h1> <br/>

    <button className='questionbtn' onClick={this.getQuestion}>Random Trivia Question </button>
    <div>
     { this.state.question && <Question question={this.state.question}/>}
    {this.state.score && <h1 value={this.statescore} name='score'>Score:{this.state.score}</h1>}

</div>

{this.state.question && <button onClick={this.right}>RIGHT</button>}
{this.state.question && <button onClick={this.wrong}>WRONG</button>}<br/>
{this.state.question && <button onClick={this.getAnswer}>Answer:</button>}
{this.state.answer && <Answer answer={this.state.question}/>}<br/>
{this.state.question && <button onClick={this.resetScore}>Reset</button>}

   
    </div>
    
  );
}
}


export default App;

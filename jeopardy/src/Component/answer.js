const Answer =(props)=>{
    const {answer} = props;
    return(
        <div className='answer' >
        
        
        <h2>What is {answer.answer}?</h2>
       
       {/* <button onClick={()=> (<li>answer: {question.answer}</li>)}>answer</button> */}
    
    
              
              </div>
        )
    
}
export default Answer;
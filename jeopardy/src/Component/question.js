const Question =(props)=>{
    const {question} = props;
    
    
    return(
     
    <div className='question' >
        
    <h1>Question: {question.question}</h1>
    <h2>Value: {question.value}</h2>
    <h3>Category: {question.category.title}</h3>
   
   {/* <button onClick={()=> (<li>answer: {question.answer}</li>)}>answer</button> */}


          
          </div>
    )
}


export default Question ;


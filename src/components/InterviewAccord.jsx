import React from 'react'
import questions from "../helper/data"
import {arrowup, arrowdown} from "../helper/icons"
import { useState } from 'react'

const InterviewAccord = () => {
  const[seciliId, setSeciliId] = useState("")


  console.log(questions, arrowup, arrowdown)
  return (
    <div className='card-group'>
      {questions.map(({id, question, answer})=>(
        <div key={id} className="card">
          <div className='ques'>
             <h5>{question}</h5>
             <button onClick={()=>setSeciliId(id)}>{seciliId===id ? arrowup : arrowdown}</button>
          </div>
          <div className='ques-answer'>
            <p>{answer}</p>
          </div>

        </div>
      ))}

    </div>
  )
}

export default InterviewAccord
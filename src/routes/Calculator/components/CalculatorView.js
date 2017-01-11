import React from 'react'
import Section from './Section.js'
import questions from '../assets/questions.json'

export const CalculatorView = () => (
  <div>
    Calculator for <span style={{"fontWeight": "bold", "color": "green", "fontSize": 16}}> {questions.address} </span>
    <Section />
  </div>
)
export default CalculatorView

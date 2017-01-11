import React, { Component } from 'react'
import questions from '../assets/questions.json'
import { connect } from 'react-redux'

class Questions extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    let allQuestions = questions.sections[this.props.sectionIndex].questions
    return (
      <div>
        {allQuestions[0].name}
        <input type={allQuestions[0].type} />
      </div>
    );
  }
}

var mapStateToProps = function(state) {
  return {
    sectionIndex: state.sectionIndex
  };
}

module.exports = connect(mapStateToProps)(Questions);

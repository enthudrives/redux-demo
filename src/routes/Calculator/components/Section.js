import React, { Component, PropTypes } from 'react'
import questions from '../assets/questions.json'
import Questions from './Questions.js'
import { connect } from 'react-redux'
import { nextSection } from '../modules/SectionModule'

class Section extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    console.log(this.props.router)
    let {sectionIndex, nextSection} = this.props
    return (
      <div>
        Section {sectionIndex} <br/>
        <Questions/>
        <button onClick={nextSection}>Next</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
    nextSection : () => nextSection()
}

const mapStateToProps = (state) => ({
  sectionIndex: state.sectionIndex
})

export default connect(mapStateToProps, mapDispatchToProps)(Section)

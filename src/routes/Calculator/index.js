import CalculatorView from './components/CalculatorView'
import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'calculator',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Section = require('./components/Section').default
      const reducer = require('./modules/SectionModule').default

      injectReducer(store, { key: 'sectionIndex', reducer })
      cb(null, Section)
    }, 'calculator')
  }
})

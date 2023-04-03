import {Switch, Route, Redirect} from 'react-router-dom'

import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/not-found" component={NotFound} />
    <Route exact path="/about" component={About} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App

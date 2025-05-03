import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Popular from './components/Popular'
import MovieItemDetails from './components/MovieItemDetails/index'

const App = () => (
  <>
    <BrowserRouter>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/popular" component={Popular} />
      <Route exact path="/movies/:id" component={MovieItemDetails} />
    </BrowserRouter>
  </>
)

export default App

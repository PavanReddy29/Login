import './App.css';
import Signup from './Signup';
import Login from './Login';
import {Switch,Route} from 'react-router-dom';
import {Container} from '@material-ui/core'

function App() {
  return (
    <>
    <Container maxWidth="100%" >
    <div className="app">
      <Switch>
        <Route path='/Signup' exact component={Signup}/>
        <Route path='/Login' exact component={Login}/>
      </Switch>
    </div>
    </Container>
    </>
  );
}

export default App;

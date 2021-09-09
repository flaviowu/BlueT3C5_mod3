import './App.scss';
import { Header } from './components/shared/Header/Header';
import { Footer } from './components/shared/Footer/Footer';
import { Home } from "./pages/Home/Home"
import { AddMovie } from "./pages/AddMovie/AddMovie"

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App"> 
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={ Home }/>
          <Route path="/addMovie" component={ AddMovie }/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;

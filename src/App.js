import './App.css'
import Home from './Components/Home';
import Perfumes from './Components/Perfumes';
import ContactUs from './Components/ContactUs';
import {Route} from 'react-router-dom'; 
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <div className="App">     
      <div>
        <NavigationBar />
        <Route path="/" exact component={Home} />
        <Route path="/fragrances" exact component={Perfumes} />

        <ContactUs email="fairyflowers@gmail.com" contactNumber="6497654686" address="No 45, Abc street" />
      </div>
    </div>
  );
}

export default App;

// Components Import
import Header from './components/header/Header';
import  TitleImage  from "./components/titleImage/TitleImage";
import { Cards } from './components/cards/Cards';
import { CountryPicker } from './components/countryPicker/CountryPicker';
import Footer from './components/footer/Footer';

// Function Component Imports
import { Data } from './functionalComponents/Data';

// Styles Import
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <TitleImage></TitleImage>
      <div className="container">
        <Data>
          <Cards></Cards>
          <CountryPicker></CountryPicker>
        </Data>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

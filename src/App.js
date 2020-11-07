// React Imports
import { useState } from 'react';

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

  // const for selected country from country Picker
  const [selectedCountry, setSelectedCountry] = useState("global")

  // function to set value of selected country it also goes as props to country picker
  async function receiveCountryValue(value) {
    setSelectedCountry(value)
  }

  return (
    <div>
      <Header></Header>
      <TitleImage></TitleImage>
      <div className="container">
        <Data selectedCountry={selectedCountry}>
          <Cards></Cards>
          <CountryPicker receiveValue={receiveCountryValue}></CountryPicker>
        </Data>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

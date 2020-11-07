// Components Import
import Header from './components/header/Header';
import  TitleImage  from "./components/titleImage/TitleImage";
import { Cards } from './components/cards/Cards';
import Footer from './components/footer/Footer';

// Styles Import
import './App.css';


function App() {
  return (
    <div>
      <Header></Header>
      <TitleImage></TitleImage>
      <div className="container">
        <Cards></Cards>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

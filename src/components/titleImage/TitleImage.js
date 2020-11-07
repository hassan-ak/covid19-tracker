// React Imports
import React from 'react';

// Image Import
import coronaImage from './titleImage.png';

// Styles Import
import './TitleImage.css'

// Image function
function TitleImage() {
  
  return (
    <div className="imageContainer">
      <img className="image" src={coronaImage} alt="COVID-19" />
    </div>
  );
}

export default TitleImage;

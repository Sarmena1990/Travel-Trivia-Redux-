import React from 'react';
import Question from './Question';
import Background from '../img/background9.jpg';
import '../CSS/app.css';

var sectionStyle = {
  backgroundImage: `url(${Background})`,
};
const App = () => {
  return (
    <div className="ui Container">
      <img src={Background} className="bg" />
      <Question />
    </div>
  );
};

export default App;

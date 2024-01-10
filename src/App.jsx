import { useEffect, useState } from 'react';
import './Style.sass'
import { text } from './Text'

function App() {
  const stringDisplay = text[0];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);
  
  const currentChar = stringDisplay.slice(0, currentIndex);
  
  return (
    <div className="wrapper">
      <div className="container">
        <div className="typing-container">
          {
            stringDisplay.map((item, index) => <div className="Box" key={index}>{item}</div>)
          }
        </div>
      </div>
    </div>
  )
}

export default App

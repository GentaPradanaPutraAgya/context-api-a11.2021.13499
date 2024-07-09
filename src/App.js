import React from 'react';
import './App.css';
import { ThemeProvider } from './context/Themecontext.js';
import ThemedComponent from './Themedcomponent.js';

const jsonData = [
  { id: 1, name: 'Genta Pradana Putra Agya' },
  { id: 1, name: 'A11.2021.13499' },
];

function App() {
  return (
    <div className='contianer'>
      
      <div>
        <div className="App">
          <h1>TUGAS REACT JS</h1>
          {jsonData.map(item => (
            <p>{item.name}</p>
          ))
          }
        </div>
        <hr />
        <div className="App container">
          <h1 className="text-danger">BootStrap</h1>
            <button className="btn btn-primary">Submit</button>
        </div>
       
        <div>
          <h1>Context API</h1>
          <ThemeProvider>
          <ThemedComponent />
        </ThemeProvider>
        </div>     
  </div>
</div>
  );
}
export default App;

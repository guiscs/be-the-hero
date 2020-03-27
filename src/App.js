import React from 'react';

import './global.css'

// import Header from './Header';
import Logon from './pages/Logon';

function App() {
//   const [contador, setCounter] = useState(0);

// State:
// array [valor, funcaoDeAtualizacao]

//   function incrementar(){
//     setCounter(contador + 1);
//   }

  return (
    <div>
      {/* <Header >Contador: {contador}</Header>
      <button onClick={incrementar}>Incrementar</button> */}

      <Logon></Logon>
    </div>
    ); 
  }

export default App;

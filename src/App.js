import {Fragment} from 'react';
import Header from  './components/layout/Header.js';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
       <Header/>
       <main>
         <Meals/>
       </main>
    </Fragment>
  );
}

export default App;

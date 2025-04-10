
import { Suspense } from 'react';
import './App.css'
import Countris from './components/Countris/Countris';


const countrisPromis=fetch('https://restcountries.com/v3.1/all')
.then(res =>res.json());

function App() {
  

  return (
    <>
      <Suspense fallback={<h3>all countris data is loading...</h3>}>
        <Countris countrisPromis={countrisPromis}></Countris>
      </Suspense>
    </>
  )
}

export default App

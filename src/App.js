import { useState } from 'react';
import './App.css';
import Variant from './components/Variant';
function App() {
  // const [expenses , setExpenses] = useState('')
  // const addExpenseHandler = expense => {
  //   setExpenses(PrevExpense => {
  //     return[expense, ...PrevExpense]
  //   })
  return (
    <div className="App">
      <Variant/>
    </div>
  );
}

export default App;

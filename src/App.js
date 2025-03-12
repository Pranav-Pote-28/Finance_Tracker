import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([])


  useEffect(() => {
      getTransactions().then(setTransactions);
  }, []);

  async function getTransactions() {
      const url = process.env.REACT_APP_API_URL + '/transactions';
      const response = await fetch(url);
      return await response.json();
  }


  function addNewTransaction(ev){
    ev.preventDefault()

    const url = process.env.REACT_APP_API_URL + '/transaction';
    const price = name.split(' ')[0]
    
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          price,
          name: name.substring(price.length+1),
          description,
          datetime }) 
    }).then(response => {
        response.json().then(json => {
          setName('')
          setDescription('')
          setDatetime('')
          console.log('result', json);

          getTransactions().then(setTransactions);
        });
    });

  }

  let balance = 0;

  for (const transaction of transactions){
    balance = balance + transaction.price
  }

  const formattedBalance = balance.toFixed(2);
  const [integerPart, fractionPart] = formattedBalance.split('.'); 


  return (
    <main>

      <h1>Total: {integerPart}<span>.{fractionPart}</span></h1>

      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text" 
              value={name} 
              onChange={ev => setName(ev.target.value)} 
              placeholder={'+200 Nokia Phone'} />
          <input type="datetime-local"
              value={datetime}
              onChange={ ev => setDatetime(ev.target.value)} />
        </div>
        <div className="description">
          <input type="text" 
              value={description}
              onChange={ ev => setDescription(ev.target.value)}
          placeholder="bought Nokia phone" />
        </div>
        <button type="submit">Add new transaction</button>
      </form>

      <div className="transactions">

        {transactions.length>0 && transactions.map(transaction => (

            <div className="transaction">
              <div className="left">
                <div className="name">{transaction.name}</div>
                <div className="description">{transaction.description}</div>
              </div>
              <div className="right">
                <div className={"price " +(transaction.price<0 ? "red":"green")}>
                  {transaction.price}
                </div>
                <div className="datetime">2022-12-18 15:45</div>
              </div>
            </div>

        ))}

      </div>

    </main>
  );
}


export default App;

import React, { useState, useEffect} from "react";
import TransactionsList from "./TransactionList";
import Search from "./Search";
import TransactionForm from "./TransactionForm";

function AccountContainer() {
 
  // const [SearchTerm,setSearchTerm]=useState('')
const [transactionsEvent, setTransactionsEvent] = useState([])
const [searchEvent, setSearchEvent] = useState("")

useEffect(() => {
  fetch("http://localhost:8001/transactions")
  .then(response => response.json())
  .then((data) => setTransactionsEvent(data));
}, [])

const getSearch = (search) =>{
  return setTransactionsEvent(transactionsEvent.filter(transaction => transaction.description === search))
}

function updatedTransactionEvents(addedTransactions) {
  const updatedTransactionEventsArray=[...transactionsEvent,addedTransactions];
  setTransactionsEvent(updatedTransactionEventsArray);

  // const handleSearchTerm=(event)={
  //   setSearchTerm(event.target.value);
  // }
}

  return (
    <div>
      <Search getSearch={getSearch} />
      <TransactionForm addedData ={updatedTransactionEvents} />
      <TransactionsList transactionsEvent={transactionsEvent}/>
    </div>
  );
}

export default AccountContainer;
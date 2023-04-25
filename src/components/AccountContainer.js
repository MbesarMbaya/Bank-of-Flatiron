import React, { useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
 
const [transactionsEvent, setTransactionsEvent] = useState([])
const [searchEvent, setSearchEvent] = useState("")

useEffect(() => {fetch("http://localhost:8001/transactions").then(response => response.json()).then((data) => setTransactionsEvent(data));
}, [])


function updatedTransactionEvents(addedTransactions) {
  const updatedTransactionEventsArray=[...transactionsEvent,addedTransactions];
  setTransactionsEvent(updatedTransactionEventsArray);
}

  return (
    <div>
      <Search  searchEvent={searchEvent} setSearchEvent={setSearchEvent }/>
      <AddTransactionForm addedData ={updatedTransactionEvents} />
      <TransactionsList transactionsEvent={transactionsEvent} setTransactionsEvent = {setTransactionsEvent}  searchEvent ={searchEvent}/>
    </div>
  );
}

export default AccountContainer;
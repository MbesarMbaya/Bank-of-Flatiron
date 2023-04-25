import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";
import Search from "./Search";
import TransactionsList from "./TransactionList";

function App() {
  const [transactions,setTransactions] = useState([])

  
  
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
      
    </div>
  );
}

export default App;

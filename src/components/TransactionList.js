import React, {useState} from "react";
import Transaction from "./Transaction";

function TransactionsList({transactionsEvent, setTransactionsEvent, searchEvent}) {


const [sortMethod] = useState({
  category: -1,
  description: -1,
})
let transactionEventList;

if (transactionsEvent) {
const filteredTransactions = transactionsEvent.filter(transaction => {
  return (transaction.description.toLowerCase().includes(searchEvent.toLowerCase()) || transaction.category.toLowerCase().includes(searchEvent.toLowerCase()))
  })

transactionEventList = filteredTransactions.map((transaction) => (
  <Transaction 
  key={transaction.id}
  id={transaction.id}
  date={transaction.date}
  description={transaction.description}
  category={transaction.category}
  amount={transaction.amount}
  />
));
}
//sort strategy
function updateSortMethod(item){
  sortMethod[item] = sortMethod[item] * -1;
}


function sortTransactions(event){

  const sortBy = event.target.textContent.toLowerCase();
  updateSortMethod(sortBy);


  let copyOftransactionsEvent;

  if (sortBy === 'description' || sortBy === 'category') {
    copyOftransactionsEvent = [...transactionsEvent].sort((a,b)=>{
      if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()){
              return sortMethod[sortBy] 
            }else if
              (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()){
                return sortMethod[sortBy]                                       
            }else{
              return 0
            }
    })

}
setTransactionsEvent(copyOftransactionsEvent)
}
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={sortTransactions}>Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header"onClick={sortTransactions}>Category</h3>
          </th>
          <th> 
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactionEventList}
      </tbody>
    </table>
  );
}

export default TransactionsList;
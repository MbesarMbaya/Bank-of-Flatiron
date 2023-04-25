import React, { useState, useMemo } from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactionsEvent }) {
  console.log(transactionsEvent)
  console.log(typeof(transactionsEvent))
  // console.log(Object.entries(transactionsEvent))

  // transactionsEvent.map(transaction => {
  //   console.log(transaction)
  // })

  const transactionEventList = transactionsEvent.map(transaction => {
    return  <Transaction key={transaction.id} id={transaction.id} date={transaction.date} description={transaction.description} category={transaction.category}amount={transaction.amount}
    />

  })
  
  

  

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th> 
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactionEventList}
      </tbody>
    </table>
  );
};
// const transactionEventList = transactionsEvent.map((transaction) => {
//   return  <Transaction key={transaction.id} id={transaction.id} date={transaction.date} description={transaction.description} category={transaction.category}amount={transaction.amount}
//     />
// const [sortMethod, setSortMethod] = useState({
  //   category: -1,
  //   description: -1,
  // });

  // const filteredTransactions = useMemo(() => {
  //   if (!transactionsEvent) return [];
  //   return transactionsEvent.filter(transaction => {
  //     return (
  //       transaction.description.toLowerCase().includes(searchEvent.toLowerCase()) ||
  //       transaction.category.toLowerCase().includes(searchEvent.toLowerCase())
  //     );
  //   });
  // }, [transactionsEvent, searchEvent]);

  // const transactionEventList = transactionsEvent.map((transaction) => {
  //   return  <Transaction key={transaction.id} id={transaction.id} date={transaction.date} description={transaction.description} category={transaction.category}amount={transaction.amount}
  //     />
  
  //  });

  // const handleSort = (sortBy) => {
  //   setSortMethod(prevSortMethod => ({
  //     ...prevSortMethod,
  //     [sortBy]: -prevSortMethod[sortBy],
  //   }));

  //   const sortedTransactions = [...filteredTransactions].sort((a, b) => {
  //     const order = sortMethod[sortBy];
  //     const valA = a[sortBy].toLowerCase();
  //     const valB = b[sortBy].toLowerCase();

  //     if (valA < valB) return -order;
  //     if (valA > valB) return order;
  //     return 0;
  //   });

  //   setTransactionsEvent(sortedTransactions);
  // };

export default TransactionsList;

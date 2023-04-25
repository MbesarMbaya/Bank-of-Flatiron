import React, { useState, useMemo } from "react";
import Transaction from "./Transaction";

const TransactionsList = ({ transactionsEvent, setTransactionsEvent, searchEvent }) => {

  const [sortMethod, setSortMethod] = useState({
    category: -1,
    description: -1,
  });

  const filteredTransactions = useMemo(() => {
    if (!transactionsEvent) return [];
    return transactionsEvent.filter(transaction => {
      return (
        transaction.description.toLowerCase().includes(searchEvent.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchEvent.toLowerCase())
      );
    });
  }, [transactionsEvent, searchEvent]);

  const transactionEventList = useMemo(() => {
    return filteredTransactions.map(transaction => (
      <Transaction 
        key={transaction.id}
        id={transaction.id}
        date={transaction.date}
        description={transaction.description}
        category={transaction.category}
        amount={transaction.amount}
      />
    ));
  }, [filteredTransactions]);

  const handleSort = (sortBy) => {
    setSortMethod(prevSortMethod => ({
      ...prevSortMethod,
      [sortBy]: -prevSortMethod[sortBy],
    }));

    const sortedTransactions = [...filteredTransactions].sort((a, b) => {
      const order = sortMethod[sortBy];
      const valA = a[sortBy].toLowerCase();
      const valB = b[sortBy].toLowerCase();

      if (valA < valB) return -order;
      if (valA > valB) return order;
      return 0;
    });

    setTransactionsEvent(sortedTransactions);
  };

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={() => handleSort('description')}>Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={() => handleSort('category')}>Category</h3>
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

export default TransactionsList;

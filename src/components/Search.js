import React, { useState } from "react";

function Search({getSearch}) {
  const [search, setSearch] = useState("")
function handleSubmit(event) {
  event.preventDefault()
  getSearch(search)
}



  return (
    // <div className="ui large fluid icon input">
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      <input />
      <button type="submit"><i className="circular search link icon"></i></button>

      </form>
      
    // 
  );
}

export default Search;
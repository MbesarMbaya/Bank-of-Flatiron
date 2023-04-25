import React from "react";

function Search({searchEvent, setSearchEvent}) {
function handleSearch(event) {
  setSearchEvent(event.target.value);
}



  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
        value={searchEvent}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
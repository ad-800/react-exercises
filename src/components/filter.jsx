import { useState, useEffect } from "react";

function Filter() {
  const itemList = [
    {
      name:"Apple",
      type:'good'
    },
    {
      name:"Orange",
      type:'bad'
    },
    {
      name:"Banana",
      type:'good'
    },
    {
      name:"Cherry",
      type:'good'
    },
    {
      name:"milk",
      type:'bad'
    },
    {
      name:"peanuts",
      type:'good'
    },
    {
      name:"butter",
      type:'good'
    }
  ];

  const [filteredList, setFilteredList] = new useState(itemList);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    let updatedList = [...itemList];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || item.type.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };

  return (
    <div className="App">
    <div className="search-header">
      <div className="search-text">Search:</div>
      <input id="search-box" onChange={filterBySearch} />
    </div>
    <div id="item-list">
      <ol>
        {filteredList.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ol>
    </div>
  </div>
 );
}

export default Filter;

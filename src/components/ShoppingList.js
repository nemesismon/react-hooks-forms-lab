import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [newItems, setNewItems] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = newItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => {
    
    if(searchText === "") return true;

    return item.name.toLowerCase().includes(searchText.toLowerCase());
  });

  function handleSearchChange(event) {
    setSearchText(event.target.value);
    }
  
  // This was used for the long hand version of the filter itemsToDisplay -> searchItemsToDisplay
  // const searchItemsToDisplay = itemsToDisplay.filter((item) => {
  //   if(searchText === "") return true;
  //   return item.name.toLowerCase().includes(searchText.toLowerCase());
  // })

  function handleItemFormSubmit (event) {
      event.preventDefault();
      const tempNewItem = [{
        key: event.target.key,
        name: event.target.name,
        category: event.target.category,
      }]
      setNewItems([...newItems, tempNewItem]) 
  }
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {/* {searchItemsToDisplay.map((search) => (
          <Item key={search.id} name={search.name} category={search.category} />
        ))} */}
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

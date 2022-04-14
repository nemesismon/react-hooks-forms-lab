import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  return (
    <form className="NewItem">
      
      <label>
        Name:
        <input id={uuid()} type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={onItemFormSubmit} >Add to List</button>
    </form>
  );
}

export default ItemForm;

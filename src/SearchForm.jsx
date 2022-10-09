import React, { useState } from "react";

export const SearchForm = ({searchText}) => {
  const [text,setText] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();
    searchText(text);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="e.g Politics" className="py-1 px-2 rounded-l-lg" onChange={(event)=> setText(event.target.value)} />
        <button type="submit" className="bg-green-400 py-1 px-2 rounded-r-lg text-white">Search</button>
      </form>
    </div>
  );
};


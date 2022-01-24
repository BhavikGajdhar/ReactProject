import React, { useState } from "react";

function Child(props){
  const [title, setTitle] = useState(null);
  return (
    <>
      <button onClick={() => props.greetHandler("bhavik here")}>
        Greet Parent
      </button>
      <label>
        Title:
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <button type="button" onClick={(e) => props.onTitleClick(title)}>
          Submit
        </button>
      </label>
    </>
  );
}
export default Child;

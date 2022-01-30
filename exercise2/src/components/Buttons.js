import React from 'react';

export default function Buttons(props) {
  /* Button clicked => set props callback function */ 
  function onBtnClicked(e) {
    props.ButtonClicked(e);
  }
  
  /* Return Button JSX */
  return (
    <div>
      {
        props.buttonItems.map((i, idx) => {
          return (
            <button onClick={() => onBtnClicked(i)} key={idx}>Add {i.itemName}</button>
          )
        })
      }
   </div>);
}

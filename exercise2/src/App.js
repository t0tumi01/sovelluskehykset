/* Imports */
import './App.css';
import Header from './components/Header';
import ShoppingListContent from './components/ShoppingListContent';
import Buttons from './components/Buttons';
import {useState} from 'react';

/* constants */
const MINRANDOMQTY = 1;
const MAXRANDOMQTY = 10;

function App() {
  /* Shopping list default content */
  const [ShoppingListItems, setShoppingListItems] = useState(
    [{
      id: 0,
      qty: 1,
      unit: "ltr",
      itemName: "Milk",
      usePluralForm: false
    },
    {
      id: 1,
      qty: 0,
      unit: "pc",
      itemName: "Egg carton",
      usePluralForm: true
    },
    {
      id: 2,
      qty: 1,
      unit: "pc",
      itemName: "Apple",
      usePluralForm: true
    },
    {
      id: 3,
      qty: 0,
      unit: "btl",
      itemName: "Hot sauce",
      usePluralForm: true
    }]
  );

  /* Handle button clicked hook => Add random amount of selected food to the list */
  const handleButtonClicked = (item) => {
    let newShoppingListItems = [...ShoppingListItems];
    let itemClickedIdx = newShoppingListItems.findIndex(i => item.id == i.id);
    
    if(itemClickedIdx > -1) {
      let newElement = {...newShoppingListItems[itemClickedIdx]}
      newElement.qty = newElement.qty + Math.floor(Math.random() * (MAXRANDOMQTY - MINRANDOMQTY) + MINRANDOMQTY);

      newShoppingListItems[itemClickedIdx] = newElement;
      setShoppingListItems(newShoppingListItems);
    }
  }

  /* Clear button clicked => Clear shopping list */
  function onClearButtonClicked() {
    let newShoppingListItems = [...ShoppingListItems];
    newShoppingListItems.forEach(i => i.qty = 0);
    setShoppingListItems(newShoppingListItems);
  };


  /* Main App => Return site JSX */
  return (
    <div className="App">
      <Header />
      <ShoppingListContent listItems = {ShoppingListItems}/>
      <Buttons buttonItems = {ShoppingListItems} ButtonClicked={handleButtonClicked}/>
      <div><button onClick={ onClearButtonClicked } className="ClearButton">Clear shopping list</button></div>
    </div>
  );
}

/* export */
export default App;

import './App.css';
import TitleBar from './components/TitleBar'
import SellItem from './components/SellItem';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('DataBase.json')
    .then(response => {
      //console.log(response.data);
      setItems(response.data.data);
    })
  }, []);

  const SearchAndSetVisibility = (text) => {
    let newItems = [...items];
    for (let i = 0; i < newItems.length; i++)
    {
      newItems[i].visible = newItems[i].description.toLowerCase().includes(text.toLowerCase());
    }
    setItems(newItems);  
  }

  return ( 
    <div>
      <TitleBar search={items} onSearchClick={SearchAndSetVisibility}/>
      <div className="pageContainer">    
        {     
          items.map(i => <SellItem key={i.id} visible={i.visible} desc={i.description} price={i.price} image={i.prodImg} stars={i.starsImg} ratings={i.ratingsCount}/>)
        }
      </div>
    </div>
  );
}

export default App;

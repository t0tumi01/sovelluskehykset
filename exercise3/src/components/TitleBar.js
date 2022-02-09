import {useState} from 'react';

export default function TitleBar(props) {
    const[inpVal, setInpVal] = useState("");

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') props.onSearchClick(inpVal);
    }
  
    return (<div className='titleBarBackground'>
        <div className='titleBar'>
            <img src="titleLeft.png" />
            <div className='searchBlock'>
                <input className='searchBox' type="text" value={inpVal} onChange={(event) => setInpVal(event.target.value)} onKeyDown={handleKeyDown}></input>
                <img src="search.png" onClick = {() => props.onSearchClick(inpVal)} />
            </div>
            <img src="titleRight.png" />
        </div>
    </div>);
}

import React from 'react';

export default function SellItem(props) {
  if (props.visible)
  {
    return <div>  
            <div className="pageItem">
                <img src={props.image} />
                <div>{props.desc}</div>
                <div className="starRow">
                    <img src={props.stars} />
                    <img src="arrowdown.png" />
                    <a href="">{props.ratings}</a>
                </div>
                <div className="price">
                    <div className="upper">$</div>
                    <div>{props.price.split(".")[0]}</div>
                    <div className="upper">{props.price.split(".")[1]}</div>
                </div>
            </div>      
    </div>
  }
  else
  {
      return <></>
  }
}

import React from 'react';

export default function HeadLines(props) {
  console.log(props);
    return (
    <div>
        <ul>
            {
                props.listItems.map(i => {
                    if(i.isAdv)
                        return <div className="headLineAdv">{i.line}</div>
                    else
                        return <div className="headLine">{i.line}</div>
                })
            }
        </ul>
      </div>)
}

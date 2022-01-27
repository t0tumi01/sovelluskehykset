import React from 'react';

export default function HeadLines(props) {
  console.log(props);
    return (
    <div className="news">
        {
            props.items.map(i => {
                    return <div><img src={i.img} width={i.scale} alt="news Pic" /></div>
            })
        }
      </div>)
}
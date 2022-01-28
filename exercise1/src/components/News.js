import React from 'react';

export default function HeadLines(props) {
  console.log(props);
    return (
    <div className="news">
        {
            props.items.map(i => {
                    return <img src={i.img} alt="news Pic" />
            })
        }
      </div>)
}
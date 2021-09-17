import React from 'react'

function Pizza({ details }) {
  if (!details) {
    return <h3>fetching your order details...</h3>
  }

  return (
    <div className='order container'>
      <h2>{details.name}</h2>
      <p>Size: {details.size}</p>
      <p>Sauce: {details.sauce}</p>
      <p>sides: {details.sides}</p>

      {
        !!details.sides && !!details.sides.length &&
        <div>
          Sides:
          <ul>
            {details.sides.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Pizza
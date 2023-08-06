import React from 'react';
import wagon from './3.png';
import ProductSelect from './ProductSelect';

export default function Cart(props) {
  let sum = 0;

  // Calculate the total price and update it using the 'uPrice' function from props
  if (props.selectPro.length !== 0) {
    props.selectPro.forEach((val) => {
      sum += val.productPrice;
      props.uPrice(sum);
    });
  } else {
    props.uPrice(sum);
  }

  return (
    <div style={{ display: 'flex', width: '700px', margin: 'auto', marginBottom: '10px', border: '2px green solid', padding: '10px', marginTop: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <h1 style={{ display: 'inline' }}>Cart</h1>
        <img style={{ marginLeft: '10px', height: '50px', width: '50px' }} src={wagon} alt="" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', borderLeft: '1px black solid' }}>
        {/* Map through selected products and render ProductSelect component */}
        {props.selectPro.map((val, index) => {
          return <ProductSelect val={val} ind={index} delet={props.deletPr} />;
        })}
        <p>Total price: {props.priceT}</p>
        <button
          style={{ background: 'green', color: 'white', height: '30px', margin: '10px' }}
          onClick={() => {
            if (props.priceT === 0) {
              alert('No products selected');
            }
            // Clear the selected products and reset the total price
            props.bye([]);
            props.addP(0);
          }}
        >
          buy
        </button>
      </div>
    </div>
  );
}

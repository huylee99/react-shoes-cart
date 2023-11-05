import React from 'react';
import { useDispatch } from 'react-redux';

// mock data
import { mockData } from '../data';

// actions
import { addToCart } from '../redux/app.actions';


export default function ShopItem() {
  const dispatch = useDispatch();
  const [products, setProducts] =  React.useState([]);

  React.useEffect(() => {
    setProducts(mockData);
  }, [])


  function handleAddToCart(product) {
    dispatch(addToCart(product))
  }

  return (
    <div className="shopItem">
      {products.map(product => (
        <React.Fragment key={product.id}>
          <div
            className="shopItem_image"
            style={{ backgroundColor: product.color }}
          >
            <img
              alt=""
              src={product.image}
            />
          </div>
          <div className="shopItem_name">{product.name}</div>
          <div className="shopItem_description">
            {product.description}
          </div>
          <div className="shopItem_bottom">
            <div className="shopItem_price">${product.price}</div>
            <div className="shopItem_button" onClick={() => handleAddToCart(product)}>
              <p>ADD TO CART</p>
            </div>
          </div>
          <br />
        </React.Fragment>
      ))}
      
    </div>
  );
}

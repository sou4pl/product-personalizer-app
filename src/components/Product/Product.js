import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useState } from 'react';
import PropTypes from 'prop-types'; 

const Product = ({id, name, title, basePrice, colors, sizes}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    const foundSize = sizes.find(element => element.name === currentSize);
    return (basePrice + foundSize.additionalPrice);
  };

  const pushOrder = () => {
    console.log('SUMMARY!')
    console.log('========')
    console.log('Name:', title);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()} $</span>
        </header>
        <ProductForm 
          getPrice={getPrice} 
          pushOrder={pushOrder} 
          sizes={sizes} 
          colors={colors} 
          setCurrentColor={setCurrentColor} 
          setCurrentSize={setCurrentSize} 
          currentColor={currentColor} 
          currentSize={currentSize} />
      </div>
    </article>
  )
};


Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import shortid from 'shortid';
import PropTypes from 'prop-types'; 

const ProductForm = ({ handleSumbit, pushOrder, sizes, colors, setCurrentColor, setCurrentSize, currentColor, currentSize  }) => {

  const handleSubmit = e => {
    e.preventDefault();
    pushOrder();
  };

  const preparaColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return(
    <form onSubmit={handleSubmit}>
      <OptionSize sizes={sizes} setCurrentSize={setCurrentSize} currentSize={currentSize} />
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {colors.map(color => <li key={shortid()}><button type="button" onClick={() => setCurrentColor(color)} className={clsx(preparaColorClassName(color), currentColor === color && styles.active)}></button></li>)}
        </ul>
      </div>
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

ProductForm.propTypes = {
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
}

export default ProductForm;
import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types'; 

const ProductForm = ({ handleSumbit, pushOrder, sizes, colors, setCurrentColor, setCurrentSize, currentColor, currentSize  }) => {

  const handleSubmit = e => {
    e.preventDefault();
    pushOrder();
  };

  return(
    <form onSubmit={handleSubmit}>
      <OptionSize sizes={sizes} setCurrentSize={setCurrentSize} currentSize={currentSize} />
      <OptionColor colors={colors} setCurrentColor={setCurrentColor} currentColor={currentColor} />
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
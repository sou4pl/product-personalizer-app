import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import shortid from 'shortid';
import PropTypes from 'prop-types'; 

const OptionColor = ({colors, setCurrentColor, currentColor }) => {

  const preparaColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };
  
  return (
<div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {colors.map(color => <li key={shortid()}><button type="button" onClick={() => setCurrentColor(color)} className={clsx(preparaColorClassName(color), currentColor === color && styles.active)}></button></li>)}
        </ul>
      </div>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default OptionColor;
import styles from './Button.module.css';

function Button({ color, onButtonClick }: Props) {
  return (
    <button 
      type="button"
      className={[styles.btn, styles['btn-' + color]].join(' ')}
      onClick={onButtonClick}
    >
      Do a Fart!
    </button>
  )
}

export default Button

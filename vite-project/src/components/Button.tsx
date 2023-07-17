interface Props {
  color: string;
  onButtonClick: () => void;
}

function Button({ color, onButtonClick }: Props) {
  return (
    <button 
      type="button"
      className={'btn btn-' + color}
      onClick={onButtonClick}
    >
      Do a Fart!
    </button>
  )
}

export default Button

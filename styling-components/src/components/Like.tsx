import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface Props {
  onClick: () => void;
}

function Like ({ onClick }: Props) {
  // useState hook
  const [status, setStatus] = useState(true);

  const toggle = () => {
    // Inverts the status
    setStatus(!status);
    // Notifies component consumer of click.
    onClick();
  }

  if (status)
    return (
      <div>
        <AiFillHeart color="red" size="40" onClick={toggle} />
      </div>
    );

  return <AiOutlineHeart size="40" onClick={toggle} />

}

export default Like;

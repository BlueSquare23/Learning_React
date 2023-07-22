import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from "react";

function App() {
  let places = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
  ]

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  // To initially hide our alert.
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>

      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>🍑💨</Alert> }

      <ListGroup 
        items={places} 
        heading="Places" 
        onSelectItem={handleSelectItem} 
      />

      <Button 
//        onButtonClick={handleButtonClick}
        onButtonClick={ () => setAlertVisibility(true) }
        color='primary'
      />
    </div>
    )

}

export default App;

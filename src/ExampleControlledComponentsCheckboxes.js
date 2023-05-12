import { useState } from 'react';
import styles from './App.css';

export default function ExampleControlledComponentsCheckboxes() {
  // 1. Create state variable
  const [Attending, setAttending] = useState(false);

  return (
    <form>
      {Attending}
      <label>
        Attending?
        {/*// 2.use the current value in the input value*/}
        <input
          checked={Attending}
          type="checkbox"
          // 3. update state from onchange event with the event.currentTarget.checked
          onChange={(event) => {
            setAttending(event.currentTarget.checked);
          }}
        />
      </label>
    </form>
  );
}

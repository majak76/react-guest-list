import './App.css';
import { useState } from 'react';
import ExampleArrayOfObjectsInReact from './ExampleArrayOfObjectsInReact';
import ExampleControlledComponentsCheckboxes from './ExampleControlledComponentsCheckboxes';
import logo from './logo.svg';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [Attending, setAttending] = useState('');
  return (
    <>
      <form>
        <br />
        <label>
          First Name
          <input
            checked={firstName}
            type="input field"
            onChange={(event) => {
              setFirstName(event.currentTarget.checked);
            }}
          />
        </label>
        <br />
        <br />
        <label>
          Last Name
          <input
            checked={lastName}
            type="input field"
            onChange={(event) => {
              setLastName(event.currentTarget.checked);
            }}
          />
        </label>

        <br />
      </form>
      <button> Remove</button>
      <img src={`https://randomuser.me/api/portraits/med/women/12.jpg`} />
      <form>
        {Attending}
        <label>
          Attending
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
    </>
  );
}

<div>
  <h1>Example:Controlled Components Checkboxes</h1>
  <ExampleControlledComponentsCheckboxes />
  {/* <h1>Example:Array of Objects in react</h1>
      <ExampleArrayOfObjectsInReact /> */}

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</div>;

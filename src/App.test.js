import './App.css';
import { useState } from 'react';
import logo from './logo.svg';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <>
      <form>
        <label>
          First Name:
          <input
            value={firstName}
            onChange={(event) => {
              setFirstName(event.currentTarget.value);
            }}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            value={lastName}
            onChange={(event) => {
              setLastName(event.currentTarget.value);
            }}
          />
        </label>

        <br />
        <br />
      </form>

      <button> Remove</button>

      <img
        src={`https://api.memegen.link/images/${firstName}/${lastName}.png`}
        alt="Girl in a jacket"
      />
    </>
  );
}

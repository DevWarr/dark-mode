import { useState } from "react";

export default function useLocalStorage(key, initialValue) {

    // Error handling: if key is not a string we will throw an error
    if (typeof key !== "string") {
        let errorMessage = "Invalid Params: useLocalStorage(key, initialValue)\n"
        errorMessage += `expected 'key' to be type 'string'; received '${typeof key}'.`
        throw new Error(errorMessage)
    }

  // using state to set our initial value IF local storage has it
  const [storedValue, setStoredValue] = useState(() => {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    } else {
      localStorage.setItem(key, JSON.parse(initialValue));
      return initialValue;
    }
  });

  // Creating a function that uses our state above to save to localStorage 
  //     AND update our current value
  const saveToStorage = value => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  // return our variable, 
  //     and the function to properly update our variable with localStorage
  return [storedValue, saveToStorage];
}

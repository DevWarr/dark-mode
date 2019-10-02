import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue
    });
    const saveToStorage = value => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    }
    return [storedValue, saveToStorage];
}
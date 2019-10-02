import { useEffect } from "react";

export default function useDarkMode() {
  // Using localStorage so we can save whether the user wanted dark mode or no
  const [dark, setDark] = useLocalStorage("darkmode", "false");
  
  // useEffect! Anytime dark mode is updated, we look at it and update the body's class
  useEffect(() => {
      const body = document.querySelector(body);
      if (dark) {
        body.classList.add("dark-mode")
      } else {
        body.classList.remove("dark-mode")
      }
  }, [dark])

  // return the two variables for hook usage
  return [dark, setDark];
}

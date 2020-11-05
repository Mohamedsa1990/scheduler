import { useState } from "react";


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(newMode, replace = false) {
    if (replace) {
      history.pop();
    }
    setHistory([...history, newMode]);
    setMode(newMode);
  };
  
  function back() {
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
    };
  };
  return {
    mode,
    transition,
    back
  };
};
// export default function useVisualMode(initial) {
//   const [history, setHistory] = useState([initial]);
//   function transition(mode, replace = false) {
//     setHistory(prev =>
//       replace ? [...prev.slice(0, prev.length - 1), mode] : [...prev, mode]
//     );
//   }
//   function back() {
//     if (history.length < 2) return;
//     setHistory(prev => [...prev.slice(0, history.length - 1)]);
//   }
//   return { mode: history[history.length - 1], transition, back };
// }
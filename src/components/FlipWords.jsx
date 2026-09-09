import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { twMerge } from "tailwind-merge";

export const FlipWords = ({ words, duration = 1800, className }) => {
  const reducedMotion = useReducedMotion();
  const [typing, setTyping] = useState({ index: 0, count: 0, deleting: false });
  const word = words[typing.index % words.length] ?? "";

  useEffect(() => {
    if (reducedMotion || !word) return;
    const complete = typing.count >= word.length;
    const empty = typing.count === 0;
    const delay = typing.deleting ? (empty ? 300 : 55) : (complete ? duration : 110);
    const timer = setTimeout(() => {
      setTyping((state) => {
        if (!state.deleting && complete) return { ...state, deleting: true };
        if (state.deleting && empty) return { index: (state.index + 1) % words.length, count: 0, deleting: false };
        return { ...state, count: state.count + (state.deleting ? -1 : 1) };
      });
    }, delay);
    return () => clearTimeout(timer);
  }, [typing, word, words.length, duration, reducedMotion]);

  return (
    <span className={twMerge("typing-word", className)}>
      <span className="sr-only">{words.join(", ")}</span>
      {/* Reserve the widest word so the surrounding layout stays still. */}
      {words.map((item) => <span className="typing-reserve" aria-hidden="true" key={item}>{item}</span>)}
      <span className="typing-visible" aria-hidden="true">{reducedMotion ? words[0] : word.slice(0, typing.count)}{!reducedMotion && <span className="typing-cursor" />}</span>
    </span>
  );
};

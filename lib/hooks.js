import { useOptimistic } from "react";

export const useOptimisticHook = (manuscripts) => {
  const [optimisticManuscripts, addOptimisticManuscripts] = useOptimistic(
    manuscripts,
    (state, manuscript) => [...state, { text: manuscript, _id: new Date().getTime() }]
  );

  return { optimisticManuscripts, addOptimisticManuscripts };
};

// export const useInterval = (callback, delay) => {
//   const savedCallback = useRef();

//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// };

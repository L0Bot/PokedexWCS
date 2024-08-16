import { useState } from "react";

// function Test() {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={handleClick}>
//         <p>Clique</p>
//       </button>
//     </>
//   );
// }

function Test() {
  const [user, setUser] = useState({ name: "Louis" });
  const handleClick = () => {
    setUser({ name: "Emma" });
  };
  return (
    <>
      <p>{user.name}</p>
      <button onClick={handleClick}>
        <p>Change</p>
      </button>
    </>
  );
}

export default Test;

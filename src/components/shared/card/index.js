import { useState } from "react";
import { StCardFooter, StCardRoot, StHeader } from "./style";

//
export const Card = () => {
  const [isColorDark, setIsColorDart] = useState(false);
  return (
    <div onClick={() => setIsColorDart((prev) => !prev)}>
      <StHeader dark={isColorDark}>Table</StHeader>
    </div>
  );
};



// const Card = () => {
//     return (
//       <div>
//         <div>
//           <h4>
//             Michael Sir,
//             <span>Partner</span>
//           </h4>
//           <p>(612) 123-456-789</p>
//           <p>Michael@oneprotection.tech</p>
//           <p>OneProtection.tech</p>
//         </div>
//         <h2>One Protection</h2>
//       </div>
//     );
//   };

//   export default Card;

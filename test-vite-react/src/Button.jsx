import { children } from "react";

function Button() {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
}

export default Button;

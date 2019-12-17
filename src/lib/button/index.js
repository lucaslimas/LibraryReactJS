import React, { useState } from "react";

function Button({ text }) {
  const [label, setLabel] = useState(text);
  return <button>{label}</button>;
}

export default Button;

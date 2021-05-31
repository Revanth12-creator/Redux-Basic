import React, { useState } from "react";

const Hooks = () => {
  const [name, changeName] = useState("revanth");
  return (
    <div>
      <button onClick={() => changeName("kumar")}>Change Name</button>
      {name}
    </div>
  );
};
export default Hooks;

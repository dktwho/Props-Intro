import React from "react";

const User = ({ name, spec }) => {
  return (
    <p>
      <span>
        {name} - {spec}
      </span>
    </p>
  );
};

export default User;

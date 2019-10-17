import React from "react";

export default function Header(props) {
  console.log(props);
  return (
    <header>
      HEADER:
      <Profile name={props.name} />
    </header>
  );
}

function Profile(props) {
  return <h1>{props.name}´s Profile</h1>;
}

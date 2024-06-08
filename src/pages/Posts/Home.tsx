import React, { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  console.log(isLoggedIn);
  return <div>Home</div>;
}

import React from "react";
import axios from "axios";

function UseLogin() {
  const login = async (email, password) => {
    axios
      .post("https://luna.c0mpli.repl.co/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return { login };
}

export default UseLogin;

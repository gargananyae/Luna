import React from 'react'; 
import axios from 'axios';


function UseLogin() {
  function login(email, password) {
    axios.post("luna.c0mpli.repl.co/user/login", {email:email, password:password})
    .then(res => {console.log(res)})
    .catch(error => {alert(error)})

}
return {login}
}

export default UseLogin
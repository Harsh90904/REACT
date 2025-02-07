import React from 'react'
const Form = () => {
  return (
    <div>
      <form action="http://localhost:8090/user/signup" method="post" id="form">
        <input type="text" name="Username" id="name" placeholder="Enter a your name"/>
        <input type="email" name="email" id="email" placeholder="Enter a your email"/>
        <input type="password" name="password" id="password" placeholder="Enter a your passowrd" />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
  
}

export default Form
// Code Keypad Component Here

import React from 'react'

export default function Keypad() {

    function handleChange(event){
        event.preventDefault()
        console.log('Entering password...')
    }
  return (
    <div>
        <form>
            <h5>Enter your Password</h5>
         <input type="password" placeholder='please enter your password' onChange={handleChange}/>
         <input type="submit" placeholder='Submit'/>
        </form>
    </div>
  )
}

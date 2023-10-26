// Code EyesOnMe Component Here
import React from 'react'

export default function EyesOnMe() {
    function focusingEvent(){
        console.log("Good!")
    }
    function blurringEvent(){
        console.log("Hey! Eyes on me!")
    }
  return (
    <div>
        <button onFocus={focusingEvent} onBlur={blurringEvent}>Eyes on me</button>
    </div>
  )
}


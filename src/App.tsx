import React, { useState } from 'react'
import './App.css'

const Greeting = (props: {message: string}) => {
  return <>{props.message}</>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Made with ♥️ by <Greeting message="John Samuel" />
      </header>
      
    </div>
  )
}

export default App

import React, { useEffect, useRef } from 'react';
import './App.css';
import io from 'socket.io-client'

function App() {
  const ref = useRef()

  useEffect(() => {
    ref.current = io('http://localhost:8000/')

    ref.current.on('loquesea', (data) => {
      console.log(data)
    })

    ref.current.on('message', data => {
      console.log(data)
    })

    ref.current.on('private', data => {
      console.log(data)
    })

    return () => {
      ref.current.close()
    }
  }, [])

  function handleClick() {
    console.log(ref.current)
    ref.current.emit('message', 'hola mundo')
  }

  function handleJoin() {
    ref.current.emit('join room', true)
  }

  return (
    <div className="App">
      <button type="button" onClick={handleClick}>Enviar</button>
      <button type="button" onClick={handleJoin}>Unirme</button>
    </div>
  );
}

export default App;

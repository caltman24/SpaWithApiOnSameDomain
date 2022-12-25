import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiData, setApiData] = useState<any | null>(null);
  
  async function fetchApiData(){
    const url = import.meta.env.DEV ? "https://localhost:5000/api/test" : "/api/test"
    const res = await fetch(url)
    const data = await res.text();
    console.log(res)
    return data;
  }
  
  useEffect(() => {
    fetchApiData().then(data => setApiData(data));
  }, [])

  return (
    <div className="App">
      <h1>Vite + React + Asp.net Web API</h1>
        <h3>On The same domain</h3>
        <span>{apiData && apiData}</span>
    </div>
  )
}

export default App

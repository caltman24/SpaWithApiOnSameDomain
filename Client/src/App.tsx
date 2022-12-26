import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [apiData, setApiData] = useState<any | null>(null);

    useEffect(() => {
        fetchApiData().then(data => setApiData(data));
    }, [])

    async function fetchApiData() {
        const url = import.meta.env.DEV ? "https://localhost:5000/api/test" : "/api/test"
        const res = await fetch(url)
        return res.text();
    }

    const handleLogin = () => 0;

    return (
        <div className="App">
            <h1>Vite + React + Asp.net Web API</h1>
            <h3>On The same domain</h3>
            <span>{apiData && apiData}</span>
            <div style={{marginTop: "15px"}}>
                <button onClick={handleLogin}>Login</button>
            </div>

        </div>
    )
}

export default App

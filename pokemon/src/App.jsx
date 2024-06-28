import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
    return (
        <>
            <h1>Pokemon</h1>
            <p>Know your favorite pokemon</p>
            <div>
                <h2>Search Pokemon</h2>
                <input type="text" />
                <button>search</button>
            </div>
            <div>
                <h2>Filter Pokemon</h2>
                <button>A</button>
                <button>B</button>
                <button>C</button>
            </div>
            <div>
                <h2>Pokemon List</h2>
                <p>Pikachu</p>
                <p>Bulbasur</p>
            </div>
        </>
    );
}

export default App;

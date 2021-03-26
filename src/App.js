import React from "react";
import Container from "./components/container/Container";
import './App.scss';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h2 className={'app-header_title'}>Unsplash Photo Gallery</h2>
            </header>
            <main className={'app-main'}>
                <Container/>
            </main>
        </div>
    );
}

export default App;

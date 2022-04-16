import React from "react"
import Routes from "./components/Routes"
import { BrowserRouter as Router } from 'react-router-dom'
import SessionProvider from './components/session/SessionProvider';

export default function App() {
  return (
    <SessionProvider>
      <Router>
        <Routes />
      </Router>
    </SessionProvider>
  );
}
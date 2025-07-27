import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import WelcomePage from './components/welcomepage';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1">
        <WelcomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
      <header className="App-header">
        <Nav/>
        {/* <h1> he roushan singh. </h1> */}
        <Banner/>
        {/* Navbar */}
        {/* H */}
        <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
        <Row title="Treding Now" fetchUrl={requests.fetchTrending} />
        {/* <Row title="Comedy movie" fetchUrl={requests.fetchComedyMovie}/> */}
        <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Documentation" fetchUrl={requests.fetchDocumantaries} />

        <Row title="Romantic movie" fetchUrl={requests.fetchRomanceMovies} />
      </header>
    </div>
  );
}

export default App;

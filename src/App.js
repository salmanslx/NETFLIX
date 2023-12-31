import './App.css';
import Row from './component/Row';
import requests from './requests';
import Banner from './component/Banner';
import Nav from './component/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchTrending}/>
     <Row isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchTrending} />
     <Row title="Trending In India" fetchUrl={requests.fetchNetflixOriginals} />
     <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />


    </div>
  );
}

export default App;

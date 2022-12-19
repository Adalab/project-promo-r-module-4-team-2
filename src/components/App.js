//Styles
import '../styles/App.scss';
//components
import Footer from './Footer';
import Landing from './Landing';
import Card from './Card';
//services
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/create" element={<Card></Card>}></Route>
      </Routes>
      {/* <Landing></Landing> */}
      {/* FOOTER */}
      <Footer></Footer>
    </>
  );
}

export default App;

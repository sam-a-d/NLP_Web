import './App.css';
import './static/css/bootstrap/bootstrap.min.css';
import './static/css/bootstrap/bootstrap.min.css.map';
import './static/css/main.css';
import './static/css/all.min.css';
import './static/css/animate.css';
import './static/css/magnific-popup.css';
import './static/css/meanmenu.min.css';
import './static/css/owl.carousel.css';
import './static/css/responsive.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import BlogList from './components/blog/Blog-list';
import Navbar from './components/Navigation';
import About from './components/about';
import Home from './components/Home';
import BlogDetail from './components/blog/Blog-detail';

const PageNotFound = () =>{
  <div>
      <h1>404</h1>
  </div>
}
function App() {

  return (
    <div className="App min-height-100">
      <BrowserRouter>

        <Navbar />
        
        <Routes >
            <Route exact path="/" element={<Home />}> </Route>
            <Route path="/articles" element={<BlogList />}> </Route>
            <Route path="/about" element={<About />}> </Route>
            <Route path="/article/:post_id" element={<BlogDetail />}></Route>
            <Route element={PageNotFound} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

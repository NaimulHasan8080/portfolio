import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/projects">
              <Projects></Projects>
            </Route>

            <Route path="/blog">
              <Blog></Blog>
            </Route>



            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>


          </Switch>
          <Footer></Footer>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;

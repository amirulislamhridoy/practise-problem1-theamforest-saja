import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from './components/Service/Service';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/BlogDetails/BlogDetails';
import { createContext, useState } from 'react';
import DetailsInfo from './components/DetailsInfo/DetailsInfo'
import NotFound from './components/NotFound/NotFound';

export const MatchBlogContext = createContext(' ')

function App() {
  const [blogs, setBlogs] = useState([])
  // console.log(blogs)
  return (
    <div>
      {/* <Header></Header> */}
      {/* <Banner></Banner> */}
      {/* <Home></Home> */}

      <MatchBlogContext.Provider value={[blogs, setBlogs]}>
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blogdetails/:id" element={<BlogDetails />}>
            <Route path=":detailsInfo" element={<DetailsInfo></DetailsInfo>}></Route>
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        
        {/* <Service></Service> */}
      </MatchBlogContext.Provider>
      <h1>Hridoy</h1>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import   AppLayoutContextWrapper from './components/AppLayoutContextWrapper';
import HomePageWrappper from './components/HomePageWrapper';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import MoviePage from './components/MoviePage';
import ShowPage from './components/ShowPage';
import TrendingPage from './components/TrendingPage';


const App =( )=>{
return(
    <Router>
    <AppLayoutContextWrapper>
    <Routes>
    <Route  exact path='/' element={<HomePageWrappper />}/>
    <Route path='/movie' element={<MoviePage movie='movie'/> }/>
    <Route path='/shows' element={<ShowPage tv='tv'/> }/>
    <Route path='/trending' element={<TrendingPage trending='trending'/> }/>

    </Routes>
        </AppLayoutContextWrapper>
        </Router>
)
};

export default App;
import React from 'react';
import './App.css';
import Header from './NetFlix_Header';
import Banner from './NetFlix_Banner.js';
import Join from './NetFlix_Join';
import MoreDetails from './NetFlix_MoreDetails';
import Post from './NetFlix_Post';  // this Component create By Class_Component
import Coming from './NetFlix_Coming';
import Footer from './NetFlix_Footer';

function App() {
  return (
    <React.Fragment>
      <div className='body'>
        <Header />
        <Banner />
        <Join />
        <MoreDetails />
        <Post />
        <Coming />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;

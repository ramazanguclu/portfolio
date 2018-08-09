import React, { Component } from 'react';

import Main from './Main';
import Header from './Header';
import Footer from './Footer';

import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.scrollspy');

    M.ScrollSpy.init(elems);
  }

  render() {
    return (
      <div>
        <Header />
        <main><Main /></main>
        <Footer />
      </div>
    );
  }
}

export default App;

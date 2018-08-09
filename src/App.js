import React, { Component } from 'react';
import './App.css';

import Section from './components/Section';

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
        <header>
          
          <nav className="top-nav white">
            <div className="container">
              <div className="nav-wrapper">
                <div className="row">
                  <div className="col s12 m10">
                    <h1 className="header blue-text text-lighten-1">ramazanguclu.com</h1>
                  </div>
                </div>
              </div>
            </div>
          </nav>

        </header>
        <main>
          <Section />
        </main>
      </div>
    );
  }
}

export default App;

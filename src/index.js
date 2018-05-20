import React from 'react';
import ReactDOM from 'react-dom';
import './index.min.css';
import TubesMag from './components/tubes_mag'
import TubesMin from './components/tubes_min'
import Metronome from './components/metronome'

class Main extends React.Component {
  render() {
    return (
        <div className='wrap-main'>
          <div className='title'>
            <p> THE MUSICAL PIPES </p>
          </div>
          <div className='major'>
            <h6 >Major</h6>
          </div>
              <TubesMin />
              <div className='minor'>
                <h6 >Minor</h6>
              </div>
              <TubesMag />
              <div className='met'>
            <h6>Metronome</h6>
            </div>
              <Metronome />

        </div>
    );
  }
}

ReactDOM.render( <Main />, document.getElementById('root'));

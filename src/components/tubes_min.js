import React from 'react';
import '../index.min.css';
import DO_alto from '../suoni puliti/DO-maggiore-basso.mp3';
import DO_RE from '../suoni puliti/DO_RE_basso.mp3'
import RE from '../suoni puliti/RE_basso.mp3';
import RE_MI from '../suoni puliti/RE_MI_basso.mp3'
import MI from '../suoni puliti/MI_basso.mp3';
import FA from '../suoni puliti/FA-basso.mp3';
import FA_SOL from '../suoni puliti/FA_SOL_basso.mp3'
import SOL from '../suoni puliti/SOL_basso.mp3';
import SOL_LA from '../suoni puliti/SOL_LA_basso.mp3'
import LA from '../suoni puliti/LA_basso.mp3';
import LA_SI from '../suoni puliti/LA_SI_basso.mp3'
import SI from '../suoni puliti/SI_basso.mp3';
import DO_basso from '../suoni puliti/DO_min_basso.mp3';


export default class TubesMin extends React.Component {

  DOplay = () => {
   const audio = new Audio(DO_basso);
   audio.play();
  }
  DO_REplay = () => {
   const audio1a = new Audio(DO_RE);
   audio1a.play();
  }
  REplay = () => {
   const audio1 = new Audio(RE);
   audio1.play();
  }
  RE_MIplay = () => {
   const audio2a = new Audio(RE_MI);
   audio2a.play();
  }
  MIplay = () => {
   const audio2 = new Audio(MI);
   audio2.play();
  }
  FAplay = () => {
   const audio3 = new Audio(FA);
   audio3.play();
  }
  FA_SOLplay = () => {
   const audio3a = new Audio(FA_SOL);
   audio3a.play();
  }
  SOLplay = () => {
   const audio4 = new Audio(SOL);
   audio4.play();
  }
  SOL_LAplay = () => {
   const audio4a = new Audio(SOL_LA);
   audio4a.play();
  }
  LAplay = () => {
   const audio5 = new Audio(LA);
   audio5.play();
  }
  LA_SIplay = () => {
   const audio5a = new Audio(LA_SI);
   audio5a.play();
  }
  SIplay = () => {
   const audio6 = new Audio(SI);
   audio6.play();
  }
  DOMplay = () => {
   const audio7 = new Audio(DO_alto);
   audio7.play();
}

  render() {
   return(
    <div className='wrap_min'>

      <button className='DOmin' onMouseDown={this.DOplay}>
        DO
      </button>

      <button className='DO_RE' onMouseDown={this.DO_REplay}>
        DO#
      </button>

      <button className='RE' onMouseDown={this.REplay}>
        RE
      </button>
      <button className='RE_MI' onMouseDown={this.RE_MIplay}>
        RE#
      </button>
      <button className='MI' onMouseDown={this.MIplay}>
        MI
      </button>
      <button className='FA' onMouseDown={this.FAplay}>
        FA
      </button>
      <button className='FA_SOL' onMouseDown={this.FA_SOLplay}>
        FA#
      </button>
      <button className='SOL' onMouseDown={this.SOLplay}>
        SOL
      </button>
      <button className='SOL_LA' onMouseDown={this.SOL_LAplay}>
        SOL#
      </button>
      <button className='LA' onMouseDown={this.LAplay}>
        LA
      </button>
      <button className='LA_SI' onMouseDown={this.LA_SIplay}>
        LA#
      </button>
      <button className='SI' onMouseDown={this.SIplay}>
        SI
      </button>
      <button className='DOmag' onMouseDown={this.DOMplay}>
        DO
      </button>

    </div>
   );
 }
}

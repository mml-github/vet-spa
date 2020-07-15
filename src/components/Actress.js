import React from 'react';
import {ActressList} from '../data/actress';
import { Link } from 'react-router-dom';

const Actress = (props) => {
    let actress = ActressList.map((actress) => {
      return (
        <div className="actor-container">
          <Link to={`/actors/${actress.url}`}><div className="actor-image" style={{ backgroundImage: "url(" + actress.img_src + ")" }}></div></Link>
 
        </div>
      );
    });

    return (

    );
}

export default Actress;
import './styles.css';
import React from 'react';

const Header = ({ downloadButton, onDownload }) => (
  <div className="header">
    <nav>
                CREATE YOUR CV
    </nav>
    {downloadButton 
      && <div className="downloadDiv">
        <button
          className="download"
          onClick={ onDownload }
        >
                        Download
        </button>
      </div>
    }
  </div>

);


export default Header;

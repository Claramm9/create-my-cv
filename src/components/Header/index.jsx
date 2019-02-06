import './styles.css';
import React from 'react';
import PropTypes from 'prop-types';

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

Header.propTypes = {
  downloadButton: PropTypes.bool,
  onDownload: PropTypes.func
};

export default Header;

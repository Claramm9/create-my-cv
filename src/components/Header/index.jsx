import './styles.css';
import React from 'react';

const Header = ({ downloadBut, onDownload }) => {
    return (
        <div className="header">
            <nav>
                CREATE YOUR CV
                </nav>
            {downloadBut &&
                <div className="downloadDiv">
                    <button
                        className="download"
                        onClick={onDownload}
                    >
                        Download
                    </button>
                </div>
            }
        </div>

    );
};

export default Header;

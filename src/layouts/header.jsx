import React, { useEffect, useState } from 'react';

import './header.css';

function Header(props) {
    return (
        <header>
            <div className="headerContainer" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            header
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header;
import React from 'react';

import DrawerToggleButton from './DrawerToggleButton';

const navbar = props => (
    <header className="navbar-custom">
        <nav className="navbar-navi">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="navbar-logo"><a href="/"></a></div>
            <div className="spacer" />
        </nav>
    </header>
)

export default navbar;
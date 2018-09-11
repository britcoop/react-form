import React from 'react';
import SideDrawerNav from './SideDrawerNav'

const Sidedrawer = props => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
   return ( 
        <nav className={drawerClasses}>
           <SideDrawerNav click={props.drawerClickHandler}/>
        </nav>
   )
}

export default Sidedrawer;
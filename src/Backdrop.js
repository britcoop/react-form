import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const backdrop = props => (
    <div className="backdrop" onClick={props.click}>
        <FontAwesomeIcon icon={faTimes}/>
    </div>
);

export default backdrop;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faMapMarkerAlt} />
const Marker = () => <div className="marker">{element}</div>;

export default Marker;

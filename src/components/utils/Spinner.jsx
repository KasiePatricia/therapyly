import React from 'react';
import ReactLoading from 'react-loading';
 
const Spinner = ({ type, color="white" }) => (
    <ReactLoading type= "spin"color={color} height={20} width={20} className="ml-4"/>
);
 
export default Spinner;
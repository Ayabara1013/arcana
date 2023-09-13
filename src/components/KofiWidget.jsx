import React from 'react';
import { KofiButton } from "react-kofi-button";


/**
 * 
 * @param {*} props username, label, skinny, thin, grey, red
 * @returns 
 */
function KoFiWidget(props) {
  const { username, label, skinny, thin, grey, red, subtle } = props;

  // Build the props object based on the presence of certain JSX attributes
  const buttonProps = {
    username: username || "greenbottle",
    label: label || "Support me",
    ...(thin ? { preset: 'thin' } : {}),
    ...(skinny ? { preset: 'skinny' } : {}),
    ...(red ? { backgroundColor: 'kofiRed' } : {}),
    ...(grey ? { backgroundColor: 'kofiGrey' } : {}),
    ...(subtle ?  {
                    backgroundColor: 'rgb(205, 92, 92)',
                  } : {}),
  };

  return (
    <KofiButton {...buttonProps} />
  );
};


export default KoFiWidget;
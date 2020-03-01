import React from 'react';

export const ButtonLarge = ({label, color, func, height}) => (
    <button className="btnLarge clickable d-flex a-center no-border no-outline cw-fill" style={{ backgroundColor: color, height }} onClick={func}>
        <span className="s-18 c-white">{label.toUpperCase()}</span>
    </button>
) 
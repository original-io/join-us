import React from 'react';

export const ButtonLarge = ({label, color, func, height}) => (
    <button className="btn clickable d-flex a-center no-border no-outline cw-fill" style={{ backgroundColor: color, height }} onClick={func}>
        <span className="s-18 c-white">{label.toUpperCase()}</span>
    </button>
) 

export const ButtonMin = ({label, color, func, style}) => (
    <button className="btn min clickable d-flex a-center no-border no-outline" style={{ backgroundColor: color, ...style }} onClick={func}>
        <span className="s-14 c-white">{label.toUpperCase()}</span>
    </button>
)

export const ButtonAnimated = ({label, style}) => (
    <button style={style} className="btn animated clickable d-flex a-center no-border no-outline">
        <span className="s-12 c-orange">{label.toUpperCase()}</span>
    </button>
)
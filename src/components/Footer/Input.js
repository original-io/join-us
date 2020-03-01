import React, { useState } from 'react';

const Input = ({label, width, style, type}) => {
    const [active, setFocus] = useState(false)
    const [input, setInput] = useState("")
    return (
        <div style={style} className={`input-anim pos-relative ${active || input ? "active" : "inactive"}`}>
            <label className="pos-absolute no-select no-events s-14 c-light3" htmlFor={label}>{label}</label>
            <input onChange={({target: { value }}) => setInput(value)} onBlur={() => setFocus(!active)} onFocus={() => setFocus(!active)} className="no-border c-strong s-14" style={{width}} type={type ? type : "type"}/>
        </div>
    )
}

export default Input;
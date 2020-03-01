import React from 'react';

const Nav = ({label, items}) => (
    <div className='Nav mar-r-62'>
        <span className="c-light font-gotham-bold s-12">{label}</span>
        <ul>
            {items.map(item => <li className="footer-nav-item c-strong s-14"><a href="#">{item}</a></li>)}
        </ul>
    </div>
)

export default Nav;
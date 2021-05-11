import React from 'react';
import '../styles/pages/Account.css'

const Account = () => {
    const bar = document.getElementById('bar');
    const toggleBar = () => {
        bar.classList.toggle('visible');
    }
    // bar.addEventListener('click', toggleBar);

    return(
    <nav className="bar" id='bar'>
        <ul className='visible'>
            <li>Go Live</li>
            <li>Active Challanges</li>
            <li>New Challenge</li>
            <li>Mainly Funders</li>
            <li>Settings</li>
        </ul>
    </nav>
);
};

export default Account;

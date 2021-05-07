import React from 'react';
import '../styles/components/userSelector.css';

const UserSelector = () => (
    <div className="userselector">
        <div className="columns">
            <button className="buttons">Are you a sportplayer?</button>
            </div>
        <div className="columns">
            <button className="buttons">Are you a donor?</button>
        </div>
    </div>
)

export default UserSelector;
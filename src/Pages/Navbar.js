import React from 'react';

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name">Lamia</div>
                <span>toogle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Projects</li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
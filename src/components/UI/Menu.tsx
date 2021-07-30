import React, {useState} from 'react';
import {BurgerEl} from './Burger';
import {Navigation} from './Navigation';

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <BurgerEl isOpen={isOpen} setIsOpen={toggleMenuHandler}/>
            <Navigation isOpen={isOpen} setIsOpen={toggleMenuHandler}/>
        </div>
    )
};
import React from 'react';

const navItems = ['Home', 'Expense', 'About'];
const Nav = (props) => {    
    const menuItems = navItems.map(item => <li key={item}>{item}</li>);
    return(
       <div 
        className={props.navClass.join(' ')}>
            <ul>
                {menuItems}
            </ul>
        </div> 
    );
}

export default Nav;
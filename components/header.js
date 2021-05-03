import classNames from 'classnames';
import React, { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';

import Link from 'next/link';
import { useRouter } from 'next/router';

import css from '../styles/header.module.scss';
import NAV_LINKS from '../constants/nav_links.js';
import Image from 'next/image';
import MenuIcon from '@material-ui/icons/Menu';

export function Header({ children }) {
    const router = useRouter();
    const navItemsJSX = NAV_LINKS.map((link, index) => {
        const classes = classNames({
            [css.active]: link.url === router.pathname,
        });
        const target = link.url.substring(0, 4) === 'http' ? '_blank' : null;
        return (  
            <>  
            <Link key={index} href= {link.name.toLowerCase() =="home" ? "/" : `/${link.name.toLowerCase()}`} >
                <a className={classes}> {link.name}</a>
            </Link>
            {/* <div className={css.smallMenu}>
                <div className={css.menuLists}>
                    <button>
                        <h1>World</h1>
                    </button>
                </div>
            </div> */}
            </>
        );
    });
    const [menu, setMenu] = useState(`${css.smallHeaderHidden}`);

    const handleClick = () => {
        if(menu == `${css.smallHeaderHidden}`){
            setMenu(`${css.smallHeader}`);
        }
        else if(menu == `${css.smallHeader}`){
            setMenu(`${css.smallHeaderHidden}`);
        }
    }

    return (
        <div className = {css.headertop}>
            <div className={css.headerleft}>
                <img 
                    src="/logo.png"
                    className={css.headerLeftImg}
                    alt="logo"
                />
                <h1 className={css.logotitle}>hacktoolkit</h1>
            </div>

            <div className={css.header}>   
                {/* <div className={css.mainMenu}> */}
                    {navItemsJSX}
                {/* </div> */}
            </div>
            
            <div className={menu}>
                <img 
                    src="/logo.png"
                    className={css.headerLeftImg}
                    alt="logo"
                />
                {navItemsJSX}
            </div>
            <button className={css.smallMenu} onClick={handleClick}><MenuIcon style={{fontSize: 50}}/></button>  

        </div>
    );
}

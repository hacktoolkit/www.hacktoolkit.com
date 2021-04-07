import classNames from 'classnames';

import Nav from 'react-bootstrap/Nav';

import Link from 'next/link';
import { useRouter } from 'next/router';

import css from '../styles/header.module.scss';
import NAV_LINKS from '../constants/nav_links.js';
import Image from 'next/image';

export function Header({ children }) {
    const router = useRouter();
    const navItemsJSX = NAV_LINKS.map((link, index) => {
        const classes = classNames({
            [css.active]: link.url === router.pathname,
        });
        const target = link.url.substring(0, 4) === 'http' ? '_blank' : null;
        return (    
            <Link href= {link.name.toLowerCase() =="home" ? "/" : `/${link.name.toLowerCase()}`} >
                <a className={classes}> {link.name}</a>
            </Link>
            // <Nav.Item key={`link-${index}`}>
            //     <Nav.Link href={link.url} className={classes} target={target}>
            //         {link.name}
            //     </Nav.Link>
            // </Nav.Item>
        );
    });
    return (
        <div className = {css.headertop}>
            <div>
                <Image 
                    src="/logo.png"
                    width={260}
                    height = {60}
                    alt="logo"
                />
            </div>
            <div className={css.header}>            
                {navItemsJSX}
                {/* <Nav>{navItemsJSX}</Nav> */}
            </div>
        </div>
    );
}

import Link from "next/link"
import imageLogo from "@/assets/logo.png"
import classes from "./main-header.module.css"
import MainHeaderBackground from "./main-headerBackground";
import NavLink from "./nav-link";

function MainHeader ({childern}){

    return(
        <header className={classes.header}> 

            <MainHeaderBackground/>
            <Link href={'/'} className={classes.logo}>
                <img src={imageLogo.src} alt="EzFood Home 'Logo' "/>
                EzGet
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li><NavLink href={'/meals'}>Meals</NavLink></li>
                    <li><NavLink href={'/community'}>Community</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader
import Link from "next/link"
import imageLogo from "@/assets/logo.png"
import classes from "./main-header.module.css"
import MainHeaderBackground from "./main-headerBackground";
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
                    <li><Link href={'/meals'}>Meals</Link></li>
                    <li><Link href={'/community'}>Community</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader
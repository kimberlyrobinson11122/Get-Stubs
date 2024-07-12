//import { Link, useLocation } from 'react-router-dom';

//import Nav from './NavTabs';
import NavList from './NavList';

function Header() {
    //const currentPage = useLocation().pathname;
    return (
        <div className="header">
            <h1 className="title"><a href="/">Get Stubs</a></h1>
            <NavList />
        </div>
    )
}  
export default Header;
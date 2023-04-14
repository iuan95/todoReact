import  {Outlet, NavLink} from "react-router-dom";
const setActive = ({isActive})=> isActive?'active-link': '';
function Header(){

    return(
        <>
            <header>
                <nav>
                    <NavLink to={'/'} className={setActive} >Главная </NavLink>
                    <NavLink to={'/about'} className={setActive}>Посты</NavLink>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}

export default Header;
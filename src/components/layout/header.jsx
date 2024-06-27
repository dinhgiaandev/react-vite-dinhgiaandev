import { Link, NavLink } from 'react-router-dom'
import './header.css'
import logoHeader from '../../assets/logo-header.png'

const Header = () => {
   return (
            <header>
               <div className="nav_logo">
                     <img className="logo-header" src={logoHeader} alt="logo" />
               </div>
               <nav>
                  <ul className="nav_link">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/users">Users</NavLink></li>
                  <li><NavLink to="/books">Books</NavLink></li>
                  </ul>
               </nav>
      </header>
   )
}

export default Header
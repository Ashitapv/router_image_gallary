import {Link} from "react-router-dom"

const Header = () =>
{
    return(
        <>
                <ul>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Blog">Blog</Link></li>
                    <li><Link to="/Home">Home</Link></li>
                </ul>
        </>
    )
}
export default Header;
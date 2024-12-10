import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>首頁</Link>
                </li>
                <li>
                    <Link to='/about'>關於我</Link>
                </li>
                <li>
                    <Link to='/news'>最新消息</Link>
                </li>
                <li>
                    <Link to='/jquery'>Jquery</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
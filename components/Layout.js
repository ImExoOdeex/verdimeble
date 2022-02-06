import NavLink from '../components/NavLink'
import Cookie from '../components/Cookie'

const Layout = ({ children }) => {
    return (
        <>
            <NavLink />
            {children}
            <Cookie />
        </ >
    )
}
export default Layout
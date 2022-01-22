import NavLink from '../components/NavLink'
import Cookie from '../components/Cookie'
import Router from 'next/router';

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
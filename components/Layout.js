import { Container } from "react-bootstrap"
import Navigation from "./Navigation"

const Layout = ({children}) => {
    return (
        <>
        <Navigation/>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout

import { Container } from "react-bootstrap"
import Navigation from "./Navigation"

const Layout = ({children, global}) => {
    return (
        <>
        <Navigation global={global}/>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout

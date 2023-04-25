import { FC } from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Cart from '../images/cart.png';
import { useShoppingCart } from "../context/ShoppingCartContext";



const Navbar:FC = () => {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs sticky='top' className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to='/' as={NavLink} style={{ color: '#3c5e91', fontWeight: 'bold'}} className="link">
                        Home
                    </Nav.Link>
                    <Nav.Link to='/store' as={NavLink} style={{ color: '#3c5e91', fontWeight: 'bold'}} className="link">
                        Store
                    </Nav.Link>
                    <Nav.Link to='/about' as={NavLink} style={{ color: '#3c5e91', fontWeight: 'bold'}} className="link">
                        About
                    </Nav.Link>
                </Nav>
                <Button 
                    onClick={openCart}
                    style={{ 
                        background: '#fff',
                        border: '1px solid #3c5e91',
                        height: '3rem',
                        padding: '0.5rem',
                        position: 'relative',
                        width: '3rem'
                    }}
                    //variant="outline-primary"
                    className="rounded-circle"
                >
                    <img style={{ width: '1.75rem', height: '1.75rem' }} src={Cart} />
                    <div className="rounded-circle bg-danger d-flex 
                    justify-content-center align-items-center"
                    style={{
                        bottom: 0,
                        color: 'white',
                        height: '1.5rem',
                        position: 'absolute',
                        right: 0,
                        transform: 'translate(25%, 25%)',
                        width: '1.5rem'
                    }}
                    >
                        {cartQuantity}
                    </div>
                </Button>
            </Container>
        </NavbarBs>
    )
}

export default Navbar;
import { Navbar, NavbarBrand } from 'react-bootstrap';

interface props { pageName: string }
export const MyNavbar = (props: props) => <Navbar className='bg-dark expand-lg'>
    <NavbarBrand className='mx-auto d-flex'>
        <NavbarBrand href='home' className='text-white'>TECHNO VANGUARD/</NavbarBrand>
        <a className='text-white-50 align-self-center'>{props.pageName}</a>
    </NavbarBrand>
</Navbar>
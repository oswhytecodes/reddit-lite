import React from 'react'
import logo from '../../assets/images/logo.png'
import Form from '../Form/Form'

const Header = () => {

    return (
        <div className='Header'>
            <img className='logo' src={logo} alt="logo" />
            <Form />
        </div>
    )
}
export default Header
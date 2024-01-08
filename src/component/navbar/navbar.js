import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
const Navbar = ({ onSearch, cartItemCount }) => {
    const [serachQuary, setserachQuary] = useState();
    const handleSubmit = () => {
        if (setserachQuary.trim().length) {
            onSearch(serachQuary.trim())
        } setserachQuary('')
    }
    return (
        <>
            <div className="wrapper">
                <header className="container">
                    <div className="header py-2">
                        <div>
                            <Link to="/" className="link">
                                <h1 className="brand">E-commerce</h1>
                            </Link>
                            <div className='FormContainer'>
                                <from className="Search">
                                    <div className='form-control'>
                                        <input type="text"
                                            value={serachQuary}
                                            onChange={(e) => setserachQuary(e.target.value)}
                                            placeholder='Search Products...' />
                                    </div>
                                    <button type='button' onClick={handleSubmit} className='serach-btn'>Search</button>
                                </from>
                            </div>
                            <Link to="/Cart" className='link headerCart'>
                                <FontAwesomeIcon icon={faShoppingCart} size="2x" color="blue" />
                            </Link>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

const SubName = () => {
    return <h1>SubName</h1>
}

export { Navbar, SubName }
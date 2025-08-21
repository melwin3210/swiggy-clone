import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

    const cart = useSelector((store) => store.cart.cart)
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img 
                        src="https://www.48hourslogo.com/48hourslogo_data/2014/01/20/2014012015281119637.png" 
                        alt="Swiggy Logo" 
                        className="h-12 w-auto"
                    />
                </Link>
                <nav className="flex items-center space-x-8">
                    <Link 
                        className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200" 
                        to="/"
                    >
                        Home
                    </Link>
                    <Link 
                        className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200" 
                        to="/about"
                    >
                        About us
                    </Link>
                    <Link 
                        className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200" 
                        to="/contact"
                    >
                        Contact
                    </Link>
                    <Link 
                        className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200" 
                        to="/cart"
                    >
                        Cart ({cart.length})
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;
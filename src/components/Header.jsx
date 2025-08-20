import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="h-13 w-full border-4 bg-gray-300 flex justify-between">
            <img src="https://www.48hourslogo.com/48hourslogo_data/2014/01/20/2014012015281119637.png" alt="" className="h-full"/>
            <div>
                <Link className="m-2 hover:text-blue-600" to="/">Home</Link>
                <Link className="m-2 hover:text-blue-600" to="/about">About us</Link>
                <Link className="m-2 hover:text-blue-600" to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Header;
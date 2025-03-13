import { Link } from 'react-router-dom';

export default function LinksOnTop() {
  return (
    <>
      <div className="w3-top">
        <div className="w3-row w3-large w3-light-grey">
          <div className="w3-col s1">
            <Link to="/" className='w3-button w3-block'>Home</ Link>
          </div>
          <div className="w3-col s1">
            <Link to="/plans" className="w3-button w3-block">Services</Link>
          </div>
          <div className="w3-col s1">
            <Link to="/about" className="w3-button w3-block">About</Link>
          </div>
          <div className="w3-col s1">
            <Link to="/contact" className="w3-button w3-block">Contact</Link>
          </div>
          <div className="w3-col s1">
            <Link to="/order-list" className="w3-button w3-block">Order List</Link>
          </div>
          <div className="w3-col s1">
            <Link to="/login" className='w3-button w3-block'>Login</ Link>
          </div>
          <div className="w3-col s1">
            <Link to="/register" className="w3-button w3-block">Register</Link>
          </div>
          <div className="w3-col s1">
            <Link to="/" className="w3-button w3-block">Logout</Link>
          </div>
          <div className="w3-col s1">
            <div className="userName">
              Pesho's profile
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
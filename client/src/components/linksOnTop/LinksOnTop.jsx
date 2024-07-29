import { Link } from 'react-router-dom';

export default function LinksOnTop() {
  return (
    <>
      <div className="w3-top">
        <div className="w3-row w3-large w3-light-grey">
          <div className="w3-col s3">
            <Link to="/" className='w3-button w3-block'>Home</ Link>
          </div>
          <div className="w3-col s3">
            <Link to="/plans" className="w3-button w3-block">Plans</Link>
          </div>
          <div className="w3-col s3">
            <Link to="/about" className="w3-button w3-block">About</Link>
          </div>
          <div className="w3-col s3">
            <Link to="/contact" className="w3-button w3-block">Contact</Link>
          </div>
        </div>
      </div>
    </>
  )
}
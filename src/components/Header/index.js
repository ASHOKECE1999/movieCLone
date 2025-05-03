import './index.css'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'

const Header = () => (
  <nav className="myNav">
    <div className="myDivForDis">
      <img
        src="https://res.cloudinary.com/dhowpxwxx/image/upload/v1676736217/Group_7399_ljj9pz.png"
        style={{backgroundColor: 'black', width: '100px', color: 'white'}}
        alt="home"
      />

      <Link to="/">Home</Link>

      <Link to="/popular">Popular</Link>
    </div>
    <div className="myDivForDis">
      <Link to="/search">
        <AiOutlineSearch />
      </Link>
      <Link to="/profile">
        {' '}
        <img
          src="https://res.cloudinary.com/dhowpxwxx/image/upload/v1678424318/Project/Mask_Group_g2gdar.png"
          alt="profile"
        />{' '}
      </Link>
    </div>
  </nav>
)
export default Header

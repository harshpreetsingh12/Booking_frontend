import './searchItem.css'
import { useNavigate } from 'react-router-dom'

const SearchItem = () => {
  const navigate = useNavigate()
  const handleSearch =()=>{
    navigate('/hotels/Hotel')
  }
  return (
    <div className='searchItem'>
      <img src="https://digital.ihg.com/is/image/ihg/holiday-inn-express-and-suites-austin-4106560966-4x3" className='siImg' alt="" />
      <div className="siDesc">
        <h1 className='siTitle'>Tower Street Apartments</h1>
        <span className='siDistance'>500m from center</span>
        <span className='siTaxiOp'>Free Airport Taxi</span>
        <span className='siSubtitle'>Studio Apartment with Air condition</span>
        <span className='siFeatures'>Entire studio - 1 Bathroom - 21mm 1 full bed</span>
        <span className='siCancelOp'>Free Cancellation</span>
        <span className='siCancelOpSubtitle'>You can check later, so lock in the great price today</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
            <span className='siPrice'>$124</span>
            <span className='siTaxOp'>Includes taxes and fees</span>
            <button className='siCheckButton'  onClick={handleSearch}>See Availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem

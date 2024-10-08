import { faBed, faCalendar, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'
import {DateRange} from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format, set} from 'date-fns'
import { type } from '@testing-library/user-event/dist/type'
import { useNavigate } from 'react-router-dom'
const Header = (props) => {
    const [date, setdate]=useState([
        {
            startDate:new Date(),
            endDate:new Date(),
            key:'selection'
        }
    ])
    const [openD, setOpend] = useState(false)
    const [destination, setDestination] = useState('')
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1
    })
    const navigate = useNavigate()
    const handleOption = (name, operation)=>{
        setOptions(prev=>{return{
            ...prev, [name]: operation === 'i' ? options[name] +1 : options[name] -1,
        }})
    }
    const handleSearch =()=>{
      navigate('/hotels',{state:{destination,date,options}})
    }
  return (
    <div className='header'>
        <div  className={props.type==="list"? "headerContainer listMode" : "headerContainer"}>
      <div className="headerList">
        <div className="headerlistItem active">
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div className="headerlistItem">
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
        </div>
        <div className="headerlistItem">
        <FontAwesomeIcon icon={faCar} />
        <span>Car rentals</span>
        </div>
        <div className="headerlistItem">
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
        </div>
        <div className="headerlistItem">
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport taxis</span>
        </div>
      </div>
      {props.type!='list' && 
      <>
      <h1 className="headerTitle">A Lifetime of discounts? It's Genius.</h1>
      <p className="headerDesc">
        Get rewarded for your travels - unlock instant savings of 10% or more with free LamaBooking accout.
      </p>
      <button className="headerBtn">Sign in / Register</button>
      <div className="headerSearch">
        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faBed} className='headerIcon'/>
        <input type="text" placeholder='Where are you going?' onChange={e=>setDestination(e.target.value)} className='headerSearchInput'/>
        </div>
        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faCalendar} className='headerIcon'/>
        <span onClick={()=>setOpend(!openD)} className='headerSearchText'>{`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
        </div>
        {openD && 
        <DateRange
        editableDateInputs={true}
        onChange={item=>setdate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        minDate={new Date()}
        className='date'/>
    }
        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
        <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult - ${options.children} childrens - ${options.room} room`}</span>
        {openOptions && 
        <div className="options">
            <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                <button className='optionCounterButton' disabled={options.adult<=1} onClick={()=>handleOption("adult","d")}>-</button>
                <span className='optionCounterNumber'>{options.adult}</span>
                <button className='optionCounterButton' onClick={()=>handleOption("adult","i")}>+</button>
                </div>
            </div>
            <div className="optionItem">
                <span className="optionText">Childrens</span>
                <div className="optionCounter">
                <button className='optionCounterButton' disabled={options.children<=0} onClick={()=>handleOption("children","d")}>-</button>
                <span className='optionCounterNumber'>{options.children}</span>
                <button className='optionCounterButton' onClick={()=>handleOption("children","i")}>+</button>
                </div>
            </div>
            <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                <button className='optionCounterButton' disabled={options.room<=1} onClick={()=>handleOption("room","d")}>-</button>
                <span className='optionCounterNumber'>{options.room}</span>
                <button className='optionCounterButton' onClick={()=>handleOption("room","i")}>+</button>
                </div>
            </div>
        </div>
        }
        </div>
        <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
        </div>

      </div>
      </>
      }
      </div>
    </div>
  )
}

export default Header

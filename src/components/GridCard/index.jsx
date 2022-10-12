import { Link } from "react-router-dom";
import person from '../../images/person.svg'
import bedroom from '../../images/bedrooms1.svg'
import bathroom from '../../images/bathroom1.svg'
import squareFootage from '../../images/expand__icon.svg'
import typeOfProperty from '../../images/house__icon.svg'
import './styles.css'


export default function GridCard(props) {
    const {link, price, location, name, imgUrl, numBeds, numBath, numPerson, description, id, footage, lot} = props
    return (
        <Link to={link} className="grid__card" key={id} >
            <div className="grid__imgs">
                <img src={imgUrl} alt="" />
            </div>
            <div className="grid__info">
                <div className="grid__details">
                    <div className="grid__card-details">
                        {price}
                    </div>
                
                    <div className="grid__card-details">
                        {location}
                    </div>
                </div>
                <div className="grid__card-title">
                    {name}
                </div>
                <div className="grid__card-icons">
                    {numBeds && (
                           <div className="grid__icon-details">
                                 <img className="grid__icons" src={bedroom} alt="" />
                                {numBeds}
                       </div>
                    )}
                    {numBath && (
                          <div className="grid__icon-details">
                             <img className="grid__icons" src={bathroom} alt="" />
                            {numBath}
                      </div>
                    )}
                    {numPerson && (
                        <div className="grid__icon-details">
                            <img className="grid__icons" src={person} alt="" />
                            {numPerson}
                    </div>
                    )}
                    {footage && (
                         <div className="grid__icon-details">
                             <img className="grid__icons" src={squareFootage} alt="" />
                            {footage}
                     </div>
                    )}
                    {lot && (
                         <div className="grid__icon-details">
                           <img className="grid__icons" src={typeOfProperty} alt="" />
                           {lot}
                        </div>
                    )}
                   
                </div>

                <div className="grid__description">
                    {description && (
                        <div>
                            {description}
                        </div>
                    )}
                </div>

                <div className="id">
                    #{id}
                </div>
            </div>

        </Link>)

}
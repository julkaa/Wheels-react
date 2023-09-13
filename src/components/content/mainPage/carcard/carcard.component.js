import CarImage from './card image.png'

import Like from './like.svg'
import Dislike from './dislike.svg'
import Clock from './clock.svg'
import Heart from './heart.svg'
import Scales from './scales.svg'

import DashBoard from './statSVGs/dashBoard.svg'
import FuelTank from './statSVGs/fuelTank.svg'
import Location from './statSVGs/location.svg'
import Steering from './statSVGs/steering.svg'
import './carcard.component.scss';
import { AdaptFuelType, AdaptRegion, AdaptTransmission } from '../../../../models/fakeDB'
import { Link } from 'react-router-dom'

export default function CarCard(props) {
    function softTimeDiff(v) {
        function calculateTimePassed(start, end) {
            const millisecondsPerMinute = 60000; // 1000 мілісекунд * 60 секунд
            const millisecondsPerHour = 3600000; // 1000 мілісекунд * 60 секунд * 60 хвилин
            const millisecondsPerDay = 86400000; // 1000 мілісекунд * 60 секунд * 60 хвилин * 24 години
          
            const timeDifference = Math.abs(end - start);
          
            if (timeDifference >= millisecondsPerDay) {
              const daysPassed = Math.floor(timeDifference / millisecondsPerDay);
              return `${daysPassed} днів`;
            } else if (timeDifference >= millisecondsPerHour) {
              const hoursPassed = Math.floor(timeDifference / millisecondsPerHour);
              return `${hoursPassed} годин`;
            } else {
              const minutesPassed = Math.floor(timeDifference / millisecondsPerMinute);
              return `${minutesPassed} хвилин`;
            }
          }
          return calculateTimePassed(v, new Date().getDate());
        
    }
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    const hasCarData = props.car != null;
    function Template() {
        if (hasCarData) {

            return (
                <Link to={`/CarCard/${props.car.id}`}>
                    <div className="card">
                        <div className="budge"><span>Перевірений VIN-код</span><div className='corner'><div></div></div></div>
                        <div className="like"><img src={Like} alt="" /></div>
                        <div className="dislike"><img src={Dislike} alt="" /></div>
                        <div className="image">
                            <img alt="" src={ props.car.AnnouncementsPhotos[0]? props.car.AnnouncementsPhotos[0].url: ''}/>
                        </div>
                        <div className="wrapper">

                            <div className="info">
                                <div className="title">{props.car.Brands.name} {props.car.CarModels.name} {props.car.vehicle_year} </div>
                                <div className="price"><span className='usd'>{numberWithSpaces(props.car.price_us)} $</span><span className='uah'>~ {numberWithSpaces(props.car.price_us * 40.3)} грн.</span></div>
                                <div className="stats">
                                    <div className="col">
                                        <div className="stat">
                                            <img src={DashBoard} alt="" /> {props.car.mileage / 1000} тис. км
                                        </div>
                                        <div className="stat">
                                            <img src={Location} alt="" /> {props.car.States.name}
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="stat">
                                            <img src={FuelTank} alt="" />{props.car.FuelTypes.name}
                                        </div>
                                        <div className="stat">
                                            <img src={Steering} alt="" />{props.car.TransmissionTypes.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <div className="published">
                                    <img src={Clock} alt="" />{props.car.created_at} {softTimeDiff(props.car.created_at)} тому
                                </div>
                                <div className="actions">
                                    <div className="compare"><img src={Scales} alt="" /></div>
                                    <div className="favorite"><img src={Heart} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        }
        else {
            return (<div className="card">
                <div className="budge"><span>Перевірений VIN-код</span><div className='corner'><div></div></div></div>
                <div className="like"><img src={Like} alt="" /></div>
                <div className="dislike"><img src={Dislike} alt="" /></div>
                <div className="image">
                    <img alt="" />
                </div>
                <div className="wrapper">

                    <div className="info">
                        <div className="title">Audi A6 2015 </div>
                        <div className="price"><span className='usd'>28 000 $</span><span className='uah'>~ 1 081 920 грн.</span></div>
                        <div className="stats">
                            <div className="col">
                                <div className="stat">
                                    <img src={DashBoard} alt="" /> 150 тис. км
                                </div>
                                <div className="stat">
                                    <img src={Location} alt="" /> Київ
                                </div>
                            </div>
                            <div className="col">
                                <div className="stat">
                                    <img src={FuelTank} alt="" />Дизель
                                </div>
                                <div className="stat">
                                    <img src={Steering} alt="" />Автомат
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="published">
                            <img src={Clock} alt="" /> 17 хвилин тому
                        </div>
                        <div className="actions">
                            <div className="compare"><img src={Scales} alt="" /></div>
                            <div className="favorite"><img src={Heart} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>)
        }
    }
    function emptyDataTemplate() {
        return Template()
    }
    return (
        Template()
    );
}
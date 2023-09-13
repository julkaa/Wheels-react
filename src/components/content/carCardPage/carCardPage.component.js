import './carCardPage.component.scss'
import Avatar from './avatar.jpg'
import MapPin from './map-pin-2-line.svg'
import Scales from './scales.svg'
import Heart from './heart.svg'
import Phone from './phone-line.svg'

import Speedometer from './speedometer.svg'
import Oil from './oil-line.svg'
import MapPinBlue from './map-pin-2-line-blue.svg'
import Steering from './steering-fill.svg'
import DoubleCheck from './check-double-line.svg'

import UAFlag from './UA.svg'
import Scale from './scaleIcon.svg'
import ArrowRight from './arrow-right-line.svg'


import Map from './map.png'
import MainCar from './mainCar.png'

import sCar1 from './1.png'
import sCar2 from './2.png'
import sCar3 from './3.png'
import sCar4 from './4.png'

import React from 'react'
import CardSlider from '../mainPage/cardSlider/cardslider.component'
import { unstable_deprecatedPropType } from '@mui/utils'
import CreateCar from '../../../models/car.model'
import { AdaptCity, AdaptFuelType, AdaptRegion, cars } from '../../../models/fakeDB'
import { currencyService } from '../../../services/currency.service'
import { Link, useParams } from 'react-router-dom'
import { func } from 'prop-types'
import { useState } from 'react'
import { useEffect } from 'react'
import { announcementsService } from '../../../core/api/supabase/services/announcements'
import { getValue } from '@mui/system'
export default function CarCardPage(props) {
    const { id } = useParams()

    const [didLoad, setdidLoad] = useState(false);

    const [car, setCar] = useState();
    useEffect(
        () => { announcementsService.getAnnouncments(id).then(v => { setCar(v[0]); console.log(v[0]); setdidLoad(true); }) },
        []);

    const [isPhoneNumberShown, setState] = useState(false);

    function showPhoneNumber(e) {
        return setState(true);
    }
    function AdditionalStats() {
        function getValues() {
            return [
                car.color,
                car.PaintCoatings,
                car.TechnicalStates,
                car.Headlights,
                car.InteriorMaterials,
                car.interior_color,
                car.SeatAdjustments,
                car.SeatHeatings,
                car.ElectricWindows,
                car.PowerSteerings,
                car.SteeringWheelAdjustments,
                car.SpareWheels,
            ]
        }
        let titles = [
            'Колір ',
            'Лакофарбове покриття',
            'Технічний стан',
            'Фари',
            'Матеріали салону',
            'Колір салону',
            'Регулювання сидінь салону ',
            'Підігрів сидінь ',
            'Електросклопідйомники',
            'Підсилювач керма ',
            'Регулювання керма ',
            'Запасне колесо',
        ]
        return getValues().map((v, index) => {
            if(v != null)
            return (
                <div className="stat">
                    <div className="statName">
                        {titles[index]}
                    </div>
                    <div className="statValue">
                        {v.name}
                    </div>
                </div>
            )
        })

    }

    if (didLoad)
        return (
            <>
                {
                    didLoad ?
                        (<div className="content" id='carCardPage'>
                            <div className="row">
                                <div className="leftSide">
                                    <div className="navigation"><p><span><Link to='/'>Домашня сторінка</Link></span> / <span>Вживані авто</span> / {`${car.Brands.name} ${car.CarModels.name} ${car.vehicle_year}`} </p></div>
                                    <Link to={'/Search'}><div className="button linkButton clickable"><img src={Scale} alt="" />Повернутись до пошуку</div></Link>
                                    <div className="images">
                                        <div className="main">
                                            <img src={car.AnnouncementsPhotos[0] ? car.AnnouncementsPhotos[0].url : ''} alt="" />
                                        </div>
                                        <div className="list">
                                            <div className="image"><img src={car.AnnouncementsPhotos[1] ? car.AnnouncementsPhotos[1].url : ''} alt="" /></div>
                                            <div className="image"><img src={car.AnnouncementsPhotos[2] ? car.AnnouncementsPhotos[2].url : ''} alt="" /></div>
                                            <div className="image"><img src={car.AnnouncementsPhotos[3] ? car.AnnouncementsPhotos[3].url : ''} alt="" /></div>
                                            <div className="image"><img src={car.AnnouncementsPhotos[4] ? car.AnnouncementsPhotos[4].url : ''} alt="" /></div>
                                        </div>
                                    </div>
                                    <div className="breefInfo">
                                        <div className="stat"><img src={Speedometer} alt="" />{car.mileage} тис. км</div>
                                        <div className="stat"><img src={Oil} alt="" />{car.FuelTypes.name}</div>
                                        <div className="stat"><img src={Steering} alt="" />{car.TransmissionTypes.name}</div>
                                        <div className="stat"><img src={MapPinBlue} alt="" />{car.States.name}</div>
                                    </div>
                                    {/* Тут мав бути VIN */}
                                    {/* <div className="vinAndCarCodes">
                            <div className="carCode vcc"><div className="countryBadge"><img src={UAFlag} alt="" />UA</div><div className='code'>ВС 4849 ЕН</div></div>
                            <div className="vinBadge vcc"><img src={DoubleCheck} alt="" />Перевірений VIN-код</div>
                            <div className="vinCode vcc"><div><img src={DoubleCheck} alt="" /></div> WN1ZZZ7PZ5LA2076</div>
                        </div> */}
                                    <div className="generalSettings">
                                        <div className="title">Основні характеристики</div>
                                        <div className="stat">
                                            <div className="statName">
                                                Марка, модель, рік випуску
                                            </div>
                                            <div className="statValue">
                                                {`${car.Brands.name} ${car.CarModels.name} ${car.vehicle_year}`}
                                            </div>
                                        </div>
                                        <div className="stat">
                                            <div className="statName">
                                                Двигун
                                            </div>
                                            <div className="statValue">
                                                {car.engine_volume} л
                                            </div>
                                        </div>
                                        <div className="stat">
                                            <div className="statName">
                                                Пробіг
                                            </div>
                                            <div className="statValue">
                                                {car.mileage} тис. кілометрів
                                            </div>
                                        </div>
                                        <div className="stat">
                                            <div className="statName">
                                                Пальне
                                            </div>
                                            <div className="statValue">
                                                {car.FuelTypes.name}
                                            </div>
                                        </div>
                                        <div className="stat">
                                            <div className="statName">
                                                Коробка передач
                                            </div>
                                            <div className="statValue">
                                                {car.TransmissionTypes.name}
                                            </div>
                                        </div>
                                        <div className="stat">
                                            <div className="statName">
                                                Привід
                                            </div>
                                            <div className="statValue">
                                                {car.DriveTypes.name}
                                            </div>
                                        </div>
                                        {
                                            AdditionalStats()
                                        }
                                    </div>
                                    <div className="ownerDescription">
                                        <div className="title">
                                            Опис від власника
                                        </div>
                                        <div className="text">
                                            {car.description}
                                        </div>
                                    </div>
                                </div>
                                <div className="rightSide">
                                    <div className="button linkButton">Дивитись наступне авто<img src={ArrowRight} alt="" /></div>
                                    <div className="title">
                                        {`${car.Brands.name} ${car.CarModels.name} ${car.vehicle_year}`}
                                    </div>
                                    <div className="price">
                                        <div className="usd">{currencyService.format(car.price_us)} $</div>
                                        <div className="uah">~ {currencyService.format(currencyService.toUAH(car.price_us))} грн.</div>
                                    </div>
                                    <div className="ownerInfo">
                                        <div className="userTitle">
                                            <div className="avatar"><img src={Avatar} alt="" /></div>
                                            <div className="info">
                                                <div className="role">Продавець</div>
                                                <div className="name">{car.users.firstname ? car.users.firstname : 'Невідомо'}</div>

                                            </div>
                                        </div>
                                        <div className="button" onClick={showPhoneNumber}>
                                            <span>
                                                {
                                                    !isPhoneNumberShown ? 'Показати телефон' : `${car.users.phone}`
                                                }
                                            </span><img src={Phone} alt="" /></div>
                                    </div>
                                    <div className="location">
                                        <div className="text"><div className="title">Місцезнаходження</div>
                                            <div className="locationName"><img src={MapPin} alt="" />{`${car.States.name}, ${car.Cities.name ? car.Cities.name : ''}`}</div></div>
                                        <div className="image"><img src={Map} alt="" /></div>
                                    </div>
                                    <div className="compareNsave">
                                        <div className="button"><img src={Heart} alt="" />Зберегти</div>
                                        <div className="button"><img src={Scales} alt="" />Порівняти</div>
                                    </div>
                                    <div className="markOffer">
                                        <p className="title">
                                            Вважаєте це авто унікальним?
                                        </p>
                                        <p className="text">Ставте оцінку та беріть участь у формуванні ТОП-100 найцікавіших моделей на сайті</p>
                                        <div className="button">Подобається</div>
                                        <div className="button">Не подобається</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="recomendations">
                                    <p>Рекомендації для вас</p>
                                    <CardSlider />
                                </div>
                            </div>
                        </div>)
                        : <></>}

            </>
        )



}
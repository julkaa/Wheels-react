import { Slider } from '@mui/material';
import DropDown from '../mainPage/dropdown/dropdown.component';
import './carlist.component.scss'
import ValueSlider from '../mainPage/slider/slider.component';
import SearchIcon from '../mainPage/svgs/search.svg'
import BluePlus from './bluePlus.svg'
import CrossedFilter from './crossedFilter.svg'
import CloseLine from './closeLine.svg'
import CarCard from '../mainPage/carcard/carcard.component';
import CreateCar from '../../../models/car.model';
import {
    AdaptFuelType, AdaptRegion,
    cars as FDBCars,
    fuelTypes as FDBFuelTypes,
    regions as FDBRegions,
    bodyTypes as FDBBodyTypes,
    brandTypes as FDBBrandTypes,
    modelTypes as FDBModelTypes,
    transmissionTypes as FDBTransmissionTypes,
    AdaptTransmission,
    wheelDriveTypes as FDBWheelDriveTypes,
    AdaptWheelDrive,
    years as FDBYears,
    years,
    engineVolumes as FDBEngineVolumes
} from '../../../models/fakeDB';
import { useState, useEffect  } from 'react';
import Link from 'react-dom'
import { carService } from '../../../core/api/supabase/services/cars';
import { selectService } from '../../../core/api/supabase/services/selects';
import { announcementsService } from '../../../core/api/supabase/services/announcements';

//

//
function Adapt(v) {
    return { value: v.id, title: v.name }
}


// 
// 
// 
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  тут задати колекції для форми
// 
// 
// 
//     
//
// const fuelTypes = FDBFuelTypes.map(ft => {
//     return { value: ft, title: AdaptFuelType(ft) }
// })
// const regions = FDBRegions.map(ft => {
//     return { value: ft, title: AdaptRegion(ft) }
// })
// const bodyTypes = FDBBodyTypes.map(ft => {
//     return { value: ft, title: ft }
// })
// const brandTypes = FDBBrandTypes.map(ft => {
//     return { value: ft, title: ft }
// })
// const modelTypes = FDBModelTypes.map(ft => {
//     return { value: ft, title: ft }
// })

// const transmissionTypes = FDBTransmissionTypes.map(ft => {
//     return { value: ft, title: AdaptTransmission(ft) }
// })
// const wheelDriveTypes = FDBWheelDriveTypes.map(ft => {
//     return { value: ft, title: AdaptWheelDrive(ft) }
// })
const carYearsOfCreation = FDBYears.map(ft => {
    return { value: ft, title: ft }
})
const engineVolumes = FDBEngineVolumes.map(ft => {
    return { value: ft, title: ft }
})
const priceRange = [5000, 100000]
const distanceTraveledRange = [5000, 400000]

// 
// 
// 
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let _region;
let _bodyType;
let _brand;
let _years = [undefined, undefined];
let _transmissions;
let _fuels;
let _wheelDriveTypes;
let _engineVolumeRng = [undefined, undefined];
let _model;
let priceRng = priceRange;
let drivenDistRng = distanceTraveledRange;
function isEmpty(v) {
    return (v == null || v == undefined || v == '')
}

export default function CarList() {
    const [spareWheel, setSpareWheel] = useState([]);
    const [conditioners, setConditioners] = useState([]);



    useEffect(
        () => { selectService.getAirConditioners().then(v => setConditioners(v.map(Adapt))); },
        []);

    useEffect(
        () => { selectService.getSpareWheels().then(v => setSpareWheel(v.map(Adapt))); },
        []);

    const [fuelTypes, setFuel] = useState([]);
    useEffect(
        () => { selectService.getFuelTypes().then(v => setFuel(v.map(Adapt))); },
        []);

    const [bodyTypes, setBodyType] = useState([]);
    useEffect(
        () => { selectService.getBodyTypes().then(v => setBodyType(v.map(Adapt))); },
        []);


    const [brandTypes, setBrandType] = useState([]);
    useEffect(
        () => { selectService.getBrands().then(v => setBrandType(v.map(Adapt))); },
        []);

    const [modelTypes, setModelType] = useState([]);
    useEffect(
        () => { selectService.getCarModels().then(v => setModelType(v.map(Adapt))); },
        []);

    const [transmissionTypes, setTransmissionType] = useState([]);
    useEffect(
        () => { selectService.getTransmissionTypes().then(v => setTransmissionType(v.map(Adapt))); },
        []);
    const [wheelDriveTypes, setWheelDriveType] = useState([]);
    useEffect(
        () => { selectService.getDriveTypes().then(v => setWheelDriveType(v.map(Adapt))); },
        []);

    const [regions, setRegion] = useState([]);
    useEffect(
        () => { selectService.getStates().then(v => setRegion(v.map(Adapt))); },
        []);

    const [cities, setCity] = useState([]);
    useEffect(
        () => {
            selectService.getCities().then(v => {
                setCity(v.map(Adapt))
            });
        },
        []);

    const [colors, setСolor] = useState([]);
    useEffect(
        () => { selectService.getColors().then(v => setСolor(v.map(Adapt))); },
        []);
    const [coutnries, setCoutnry] = useState([]);

    useEffect(
        () => { selectService.getCountries().then(v => setCoutnry(v.map(Adapt))); },
        []);


    const [techStates, setTechState] = useState([]);

    useEffect(
        () => { selectService.getTechnicalStates().then(v => setTechState(v.map(Adapt))); },
        []);
    const [lightTypes, setLightType] = useState([]);

    useEffect(
        () => { selectService.getHeadlights().then(v => setLightType(v.map(Adapt))); },
        []);

    const [salonMaterials, setSalonMaterials] = useState([]);

    useEffect(
        () => { selectService.getInteriorMaterials().then(v => setSalonMaterials(v.map(Adapt))); },
        []);
    const [windowLifters, setWindowLifters] = useState([]);

    useEffect(
        () => { selectService.getElectricWindows().then(v => setWindowLifters(v.map(Adapt))); },
        []);

    const [steeringAdjustment, setSteeringAdjustment] = useState([]);

    useEffect(
        () => { selectService.getSteeringWheelAdjustments().then(v => setSteeringAdjustment(v.map(Adapt))); },
        []);
    const [seatAdjustments, setSeatAdjustments] = useState([]);

    useEffect(
        () => { selectService.getSeatAdjustments().then(v => setSeatAdjustments(v.map(Adapt))); },
        []);

    const [seatsHeated, setSeatsHeated] = useState([]);

    useEffect(
        () => { selectService.getSeatHeatings().then(v => setSeatsHeated(v.map(Adapt))); },
        []);

    const [seatVentilation, setSeatVentilation] = useState([]);

    useEffect(
        () => { selectService.getSeatVentilations().then(v => setSeatVentilation(v.map(Adapt))); },
        []);
    const [varnishCoatings, setVarnishCoating] = useState([]);

    useEffect(
        () => { selectService.getPaintCoatings().then(v => setVarnishCoating(v.map(Adapt))); },
        []);
    const [salonColors, setSalonColor] = useState([]);

    useEffect(
        () => { selectService.getColors().then(v => setSalonColor(v.map(Adapt))); },
        []);
    const [powerSteeringAmplifies, setPowerSteeringAmplify] = useState([]);

    useEffect(
        () => { selectService.getPowerSteerings().then(v => setPowerSteeringAmplify(v.map(Adapt))); },
        []);
    const [vehicleTypes, setVehicleType] = useState([]);

    useEffect(
        () => { selectService.getVehicleTypes().then(v => setVehicleType(v.map(Adapt))); },
        []);
    
         
    const [announcements , setAnnouncements] = useState([]);
    useEffect(
        () => { announcementsService.getAnnouncments().then(v => {setAnnouncements(v); setAnnounce(v); console.log(v)})},
        []);
    
    const [annouces , setAnnounce] = useState([]);
    
    useEffect(
        () => { setAnnounce(announcements)},
        []);


    carService.getCars().then(v => console.log(`hello ${v}`))
    selectService.getAirConditioners().then(v => console.log(v))
    
    
    function Search(e) {
        let searchText = document.getElementById('_searchBar').value;


        return setAnnounce([...announcements].filter((c) => {
            // console.log((_region != '' || _region != null || c.region === _region))
            // console.log((_bodyType != '' || !_bodyType || c.bodyType === _bodyType))
            // console.log((c.drivenDistance > drivenDistRng[0] && c.drivenDistance < drivenDistRng[1]))
            // console.log((c.price > priceRng[0] && c.price < priceRng[1]))
            // console.log(_years)
            // console.log(typeof _bodyType)
            // console.log(typeof _region)
            _transmissions = Array.from(document.querySelectorAll('[id*="TM"]')).filter(tm => {
                return tm.checked
            }).map(tm => {
                return tm.value
            })
            _fuels = Array.from(document.querySelectorAll('[id*="FT"]')).filter(ft => {
                return ft.checked
            }).map(ft => {
                return ft.value
            })
            _wheelDriveTypes = Array.from(document.querySelectorAll('[id*="WD"]')).filter(wd => {
                return wd.checked
            }).map(wd => {
                return wd.value
            })
            let vtype1 = document.getElementById('vTypeList1').children
            let vtype2 = document.getElementById('vTypeList2').children
            let vtype = [...vtype1,...vtype2]
            
            let vTypeId = null;
            for(let v of vtype){
                if(v.classList.contains('active')){
                    vTypeId = v.value;
                }
                
            }
            console.log(vtype);
            console.log("Roman");
            console.log(vTypeId);
            console.log("Roman");
            console.log(_transmissions)
            console.log(_wheelDriveTypes)
            console.log(_fuels)



            return (c.price_us > priceRng[0] && c.price_us < priceRng[1])
                &&
                (c.mileage > drivenDistRng[0] && c.mileage < drivenDistRng[1])
                &&
                (isEmpty(_region) || c.States.id == _region)
                &&
                (isEmpty(_bodyType) || c.BodyTypes.id == _bodyType)
                &&
                (isEmpty(_brand) || c.Brands.id == _brand)
                &&
                (isEmpty(_model) || c.CarModels.id == _model)
                &&
                (isEmpty(_years) || isEmpty(_years[0]) && isEmpty(_years[1]) || (c.vehicle_year >= _years[0] && isEmpty(_years[1])) || (c.vehicle_year <= _years[1] && isEmpty(_years[0])) || c.vehicle_year >= _years[0] && c.vehicle_year <= _years[1])
                &&
                (isEmpty(_engineVolumeRng) || isEmpty(_engineVolumeRng[0]) && isEmpty(_engineVolumeRng[1]) || (c.engine_volume >= _engineVolumeRng[0] && isEmpty(_engineVolumeRng[1])) || (c.engine_volume <= _engineVolumeRng[1] && isEmpty(_engineVolumeRng[0])) || c.engine_volume >= _engineVolumeRng[0] && c.engine_volume <= _engineVolumeRng[1])
                &&
                (isEmpty(_transmissions) || _transmissions.find(x => x == c.TransmissionTypes.id))
                &&
                (isEmpty(_fuels) || _fuels.find(x => x == c.FuelTypes.id))
                &&
                (isEmpty(_wheelDriveTypes) || _wheelDriveTypes.find(x => x == c.DriveTypes.id))

        }));
    }
    const [carList, setState] = useState([...FDBCars]);








    //
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function changeActiveVType(e) {
        let childernList = document.getElementById('vTypeList1').children;
        for (let child of childernList) {
            child.classList.remove("active");
        }
        childernList = document.getElementById('vTypeList2').children;
        for (let child of childernList) {
            child.classList.remove("active");
        }
        e.target.classList.add("active");
    }
    function changeActiveCarWear(e) {
        let childernList = document.getElementById('carWear').children;
        for (let child of childernList) {
            child.classList.remove("active");
        }
        e.target.classList.add("active");
    }

    return (
        <>
            <div className="content" id='searchPage'>
                <div className="wrapper">
                    <div className="row navigation"><span>Домашня сторінка</span> / Вживані </div>
                    <div className="row types" id='vTypeList1'>
                        <div className="button blueTransparentButton clickable" onClick={changeActiveVType} value='1'>Легкові</div>
                        <div className="button blueTransparentButton clickable" onClick={changeActiveVType} value='2'>Мото</div>
                        <div className="button blueTransparentButton clickable" onClick={changeActiveVType} value='3'>Вантажівки</div>
                        <div className="button blueTransparentButton clickable" onClick={changeActiveVType} value='4'>Спецтехніка</div>
                    </div>
                    <div className="row types" id='vTypeList2'>
                        <div className="button blueTransparentButton clickable" onClick={changeActiveVType} value='5'>Сільгосптехніка</div>
                        <div className="button blueTransparentButton clickable" onClick={changeActiveVType} value='6'>Автобуси</div>
                        <div className="button blueTransparentButton clickable" onClick={changeActiveVType} value='7'>Причепи</div>
                        <div className="button blueTransparentButton clickable" onClick={changeActiveVType} value='8'>Автобудинки</div>
                    </div>
                </div>
                <div className="row filtersAndResults">
                    <div className="filters">
                        <p className='title'>Фільтри</p>
                        <div className="carWear" id='carWear'>
                            <div className="button blueTransparentButton clickable" onClick={changeActiveCarWear} value='any'>Всі</div>
                            <div className="button blueTransparentButton clickable" onClick={changeActiveCarWear} value='old'>Вживані</div>
                            <div className="button blueTransparentButton clickable" onClick={changeActiveCarWear} value='new'>Нові</div>
                        </div>
                        <div className="region dropdown">
                            <p>Регіон</p>
                            <DropDown items={regions} onChange={(v) => _region = v} />
                        </div>
                        <div className="carBody dropdown">
                            <p>Тип кузова</p>
                            <DropDown items={bodyTypes} onChange={(v) => _bodyType = v} />
                        </div>  
                        <div className="Price slider">
                            <p>Ціна</p>
                            <ValueSlider
                                width="360px"
                                min={priceRange[0]}
                                max={priceRange[1]}
                                onChange={(v) => { priceRng = v }}
                            />
                            <div className="sliderRange">
                                <span>{numberWithSpaces(priceRange[0])}$</span>
                                <span>{numberWithSpaces(priceRange[1])}$</span>
                            </div>

                        </div>
                        <div className="distanceTraveled slider">
                            <p>Пробіг</p>
                            <ValueSlider
                                width="360px"
                                min={distanceTraveledRange[0]}
                                max={distanceTraveledRange[1]}
                                onChange={(v) => { drivenDistRng = v }} />
                            <div className="sliderRange">
                                <span>{numberWithSpaces(distanceTraveledRange[0])} км</span>
                                <span>{numberWithSpaces(distanceTraveledRange[1])} км</span>
                            </div>
                        </div>
                        <div className="Brand dropdown">
                            <p>Марка</p>
                            <DropDown items={brandTypes} onChange={(v) => _brand = v} />
                        </div>
                        <div className="Model dropdown">
                            <p>Модель</p>
                            <DropDown items={modelTypes} onChange={(v) => _model = v} />
                        </div>
                        <div className="Age dropdown fromto">
                            <p>Роки</p>
                            <div className='row'>
                                <DropDown items={carYearsOfCreation} onChange=
                                    {(v) => _years[0] = v}
                                />
                                <p>до</p>
                                <DropDown items={carYearsOfCreation} onChange=
                                    {(v) => _years[1] = v} />
                            </div>
                        </div>
                        <div className='button addMark '><img src={BluePlus} alt="" /> Додати ще марку</div>
                        <div className="includeModel dropdown">
                            <p>Виключити модель</p>
                            <DropDown />
                        </div>
                        <div className="checkbox">
                            <p>Коробка передач</p>
                            <div className="box">
                                {
                                    transmissionTypes != undefined?
                                    transmissionTypes.map((f, index) =>
                                        <div>
                                            <input type='checkbox' name={'TM'} value={f.value} id={'TM' + index} />
                                            <label htmlFor={'TM' + index}>{f.title}</label>
                                        </div>)
                                        :<></>
                                }


                            </div>
                        </div>
                        <div className="checkbox">
                            <p>Паливо</p>

                            <div className="box">
                                {
                                    fuelTypes != undefined?
                                    fuelTypes.map((f, index) =>
                                        <div>
                                            <input type='checkbox' name={'FT'} value={f.value} id={'FT' + index} />
                                            <label htmlFor={'FT' + index}>{f.title}</label>
                                        </div>)
                                        :<></>
                                }
                                <div>
                                    <input type='checkbox' name='thing8' value='valuable' id="thing8" />
                                    <label htmlFor="thing8">Інше</label>
                                </div>
                            </div>
                        </div>
                        <div className="checkbox">
                            <p>Тип приводу</p>
                            <div className="box">
                                {
                                    fuelTypes != undefined?
                                    wheelDriveTypes.map((f, index) =>
                                        <div>
                                            <input type='checkbox' name={'WD'} value={f.value} id={'WD' + index} />
                                            <label htmlFor={'WD' + index}>{f.title}</label>
                                        </div>):
                                        <></>
                                }
                            </div>
                        </div>
                        <div className="engineVolume dropdown fromto">
                            <p>Об’єм двигуна (л)</p>
                            <div className='row'>
                                <DropDown items={engineVolumes} onChange=
                                    {(v) => _engineVolumeRng[0] = v}
                                />
                                <p>до</p>
                                <DropDown items={engineVolumes} onChange=
                                    {(v) => _engineVolumeRng[1] = v} />
                            </div>
                        </div>
                        <div className="checkbox">
                            <p>Розмитнений</p>
                            <div className="box">
                                <div>
                                    <input type='checkbox' name='thing0' value='valuable' id="thing0" />
                                    <label htmlFor="thing0">Розмитнений</label>
                                </div>
                                <div>
                                    <input type='checkbox' name='thing11' value='valuable' id="thing11" />
                                    <label htmlFor="thing11">Нерозмитнений</label>
                                </div>
                            </div>
                        </div>
                        <div className="state dropdown">
                            <p>Стан</p>
                            <DropDown />
                            <DropDown />
                            <DropDown />
                        </div>
                        <div className='dropAllFilters'><img src={CrossedFilter} alt="" /> Скинути всі фільтри</div>
                        <div className='ExtendedSearch'><img src={Search} alt="" />Розширений пошук</div>
                    </div>
                    <div className="rightSide">
                        <div className="searchBar"><input type="text" id='_searchBar' /><div onClick={Search}>Шукати<img src={SearchIcon} alt="" /></div></div>
                        {/* <div className="tags"><div><div className="tag"><img src={CloseLine} alt="" />a</div></div>
                            <div className='saveSearch'><div>Зберегти пошук</div>
                            </div>
                        </div> */}
                        <div className="resultCount"><p>{carList.length} результатів</p></div>

                        {/* <div className="orderByAndOfferQuantity">
                            <div className="orderBy">
                                <DropDown />
                            </div>
                            <div className="offerQuantity">
                                <DropDown />
                            </div>
                        </div> */}
                        <div className="carCollection">
                            {
                                annouces.map((c) => <CarCard car={c} />)
                            }
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
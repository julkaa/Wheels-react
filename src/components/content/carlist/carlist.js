// import { Slider } from '@mui/material';
// import DropDown from '../mainPage/dropdown/dropdown.component';
// 
// import ValueSlider from '../mainPage/slider/slider.component';
// 
// 
// 
// import CloseLine from './closeLine.svg'
// import CarCard from '../mainPage/carcard/carcard.component';
// import CreateCar from '../../../models/car.model';
import DropDown from '../mainPage/dropdown/dropdown.component';
import './carlist.component.scss'
import BluePlus from './bluePlus.svg'
import ValueSlider from '../mainPage/slider/slider.component';
import CrossedFilter from './crossedFilter.svg'
import SearchIcon from '../mainPage/svgs/search.svg'
import CarCard from '../mainPage/carcard/carcard.component';

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
import { useState } from 'react';
import Link from 'react-dom'

//

//


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
const fuelTypes = FDBFuelTypes.map(ft => {
    return { value: ft, title: AdaptFuelType(ft) }
})
const regions = FDBRegions.map(ft => {
    return { value: ft, title: AdaptRegion(ft) }
})
const bodyTypes = FDBBodyTypes.map(ft => {
    return { value: ft, title: ft }
})
const brandTypes = FDBBrandTypes.map(ft => {
    return { value: ft, title: ft }
})
const modelTypes = FDBModelTypes.map(ft => {
    return { value: ft, title: ft }
})

const transmissionTypes = FDBTransmissionTypes.map(ft => {
    return { value: ft, title: AdaptTransmission(ft) }
})
const wheelDriveTypes = FDBWheelDriveTypes.map(ft => {
    return { value: ft, title: AdaptWheelDrive(ft) }
})
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

export default function CarLList() {


    function Search(e) {
        let searchText = document.getElementById('_searchBar').value;



        return setState([...FDBCars].filter((c) => {
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

            console.log(_transmissions)
            console.log(_wheelDriveTypes)
            console.log(_fuels)



            return (c.price > priceRng[0] && c.price < priceRng[1])
                &&
                (c.drivenDistance > drivenDistRng[0] && c.drivenDistance < drivenDistRng[1])
                &&
                (isEmpty(_region) || c.region == _region)
                &&
                (isEmpty(_bodyType) || c.bodyType == _bodyType)
                &&
                (isEmpty(_brand) || c.brand == _brand)
                &&
                (isEmpty(_model) || c.model == _model)
                &&
                (isEmpty(_years) || isEmpty(_years[0]) && isEmpty(_years[1]) || (c.year >= _years[0] && isEmpty(_years[1])) || (c.year <= _years[1] && isEmpty(_years[0])) || c.year >= _years[0] && c.year <= _years[1])
                &&
                (isEmpty(_engineVolumeRng) || isEmpty(_engineVolumeRng[0]) && isEmpty(_engineVolumeRng[1]) || (c.engineVolume >= _engineVolumeRng[0] && isEmpty(_engineVolumeRng[1])) || (c.engineVolume <= _engineVolumeRng[1] && isEmpty(_engineVolumeRng[0])) || c.engineVolume >= _engineVolumeRng[0] && c.engineVolume <= _engineVolumeRng[1])
                &&
                (isEmpty(_transmissions) || _transmissions.find(x => x == c.transmission))
                &&
                (isEmpty(_fuels) || _fuels.find(x => x == c.fuelType))
                &&
                (isEmpty(_wheelDriveTypes) || _wheelDriveTypes.find(x => x == c.wheelDrive))


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
    console.log(FDBCars[0])

    return (
        <>
            <div className="content" id='searchPage'>
                <div className="wrapper">
                    <div className="row navigation"><span>Домашня сторінка</span> / Вживані </div>
                    <div className="row types" id='vTypeList1'>
                        <div className="button" onClick={changeActiveVType} value='lehkovy'>Легкові</div>
                        <div className="button" onClick={changeActiveVType} value='moto'>Мото</div>
                        <div className="button" onClick={changeActiveVType} value='vantazhny'>Вантажівки</div>
                        <div className="button" onClick={changeActiveVType} value='spetz'>Спецтехніка</div>
                    </div>
                    <div className="row types" id='vTypeList2'>
                        <div className="button" onClick={changeActiveVType} value='silhos'>Сільгосптехніка</div>
                        <div className="button" onClick={changeActiveVType} value='avtobus'>Автобуси</div>
                        <div className="button" onClick={changeActiveVType} value='prychepy'>Причепи</div>
                        <div className="button" onClick={changeActiveVType} value='avtobudynky'>Автобудинки</div>
                    </div>
                </div>
                <div className="row filtersAndResults">
                    <div className="filters">
                        <p className='title'>Фільтри</p>
                        <div className="carWear" id='carWear'>
                            <div className="button" onClick={changeActiveCarWear} value='any'>Всі</div>
                            <div className="button" onClick={changeActiveCarWear} value='old'>Вживані</div>
                            <div className="button" onClick={changeActiveCarWear} value='new'>Нові</div>
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
                                    transmissionTypes.map((f, index) =>
                                        <div>
                                            <input type='checkbox' name={'TM'} value={f.value} id={'TM' + index} />
                                            <label htmlFor={'TM' + index}>{f.title}</label>
                                        </div>)
                                }


                            </div>
                        </div>
                        <div className="checkbox">
                            <p>Паливо</p>

                            <div className="box">
                                {
                                    fuelTypes.map((f, index) =>
                                        <div>
                                            <input type='checkbox' name={'FT'} value={f.value} id={'FT' + index} />
                                            <label htmlFor={'FT' + index}>{f.title}</label>
                                        </div>)
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
                                    wheelDriveTypes.map((f, index) =>
                                        <div>
                                            <input type='checkbox' name={'WD'} value={f.value} id={'WD' + index} />
                                            <label htmlFor={'WD' + index}>{f.title}</label>
                                        </div>)
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
                                carList.map((c) => <CarCard car={c}/>)
                            }
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
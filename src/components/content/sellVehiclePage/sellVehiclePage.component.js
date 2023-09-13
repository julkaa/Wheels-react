import './sellVehiclePage.component.scss'



import Check from './check-line.svg'
import Cam from './cam.svg'
import Shield from './shield.svg'
import Filter from './filter-line.svg'
import Plus from './add-line.svg'
import ArrowDropRight from './arrow-drop-right-line.svg'

import ToyotaRed from './toyota-corolla-red@1x 1.png'
import ToyotaBlue from './toyota-corolla-blue@1x 1.png'

import FilledOrange from './fOrange.png'
import TransparentOrange from './tOrange.png'

import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import DropDown from '../mainPage/dropdown/dropdown.component'
import Input from 'react-phone-number-input/input'
import { AdaptCarAccidents, AdaptVehicleType } from '../../../models/fakeDB'
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
    engineVolumes as FDBEngineVolumes,
    cities as FDBCities,
    AdaptCity,
    currencies as FDBCurrencies,
    colors as FDBColors,
    AdaptColor,
    coutnries as FDBCountries,
    AdaptCountry,
    varnishCoatings as FDBVarnishCoatings,
    carAccidents as FDBCarAccidents,
    techStates as FDBTechSatets,
    lightTypes as FDBlightTypes,
    salonMaterials as FDBsalonMaterials,
    salonColors as FDBsalonColors,
    windowLifters as FDBwindowLifters,
    powerSteeringAmplifies as FDBpowerSteeringAmplifies,
    steeringAdjustment as FDBsteeringAdjustment,
    spareWheel as FDBspareWheel,
    conditioners as FDBconditioners,
    seatAdjustments as FDBseatAdjustments,
    seatsHeated as FDBseatsHeated,
    seatVentilation as FDBseatVentilation,

} from '../../../models/fakeDB';
import { carService } from '../../../core/api/supabase/services/cars'
import { selectService } from '../../../core/api/supabase/services/selects'
import { announcementsService } from '../../../core/api/supabase/services/announcements'
import CreateCar, { AdaptCar } from '../../../models/car.model'
import { fromEvent } from 'file-selector'
import { Modal } from '@mui/base'
import { Box } from '@mui/system'
import { Backdrop, Fade, Typography } from '@mui/material'
import { errorService } from '../../../services/errorModal.service'
import { accountService } from '../../../services/account.service'

const carYearsOfCreation = FDBYears.map(ft => {
    return { value: ft, title: ft }
})
const engineVolumes = FDBEngineVolumes.map(ft => {
    return { value: ft, title: ft }
})
const currencies = FDBCurrencies.map(ft => {
    return { value: ft, title: ft }
})
const carAccidents = FDBCarAccidents.map(ft => {
    return { value: ft == 'was in car accident', title: AdaptCarAccidents(ft) }
})


function Adapt(v) {
    return { value: v.id, title: v.name }
}




const formModel = {
    images: null,
    vehicleType: null,
    brand: null,
    model: null,
    year: null,
    engineVolume: null,
    transmission: null,
    fuelType: null,
    wheelDrive: null,
    drivenDistance: null,
    bodyType: null,
    region: null,
    city: null,
    description: null,
    color: null,
    deliveredFrom: null,
    involvmentInAccidents: null,
    varnishCoatings: null,
    techState: null,
    lightType: null,
    salonMaterial: null,
    salonColor: null,
    windowLifter: null,
    powerSteeringAmplifie: null,
    steeringAdjustment: null,
    spareWheel: null,
    conditioners: null,
    seatAdjustments: null,
    seatsHeated: null,
    seatVentilation: null,
    cover: null,
    price: null,
    phoneNumber: null,
}
export default function SellVehiclePage() {

    const [spareWheel, setSpareWheel] = useState();
    const [conditioners, setConditioners] = useState();

    useEffect(
        () => { selectService.getAirConditioners().then(v => setConditioners(v.map(Adapt))); },
        []);

    useEffect(
        () => { selectService.getSpareWheels().then(v => setSpareWheel(v.map(Adapt))); },
        []);

    const [fuelTypes, setFuel] = useState();

    useEffect(
        () => { selectService.getFuelTypes().then(v => setFuel(v.map(Adapt))); },
        []);

    const [bodyTypes, setBodyType] = useState();

    useEffect(
        () => { selectService.getBodyTypes().then(v => setBodyType(v.map(Adapt))); },
        []);


    const [brandTypes, setBrandType] = useState();

    useEffect(
        () => { selectService.getBrands().then(v => setBrandType(v.map(Adapt))); },
        []);

    const [modelTypes, setModelType] = useState();

    useEffect(
        () => { selectService.getCarModels().then(v => setModelType(v.map(Adapt))); },
        []);

    const [transmissionTypes, setTransmissionType] = useState();

    useEffect(
        () => { selectService.getTransmissionTypes().then(v => setTransmissionType(v.map(Adapt))); },
        []);
    const [wheelDriveTypes, setWheelDriveType] = useState();

    useEffect(
        () => { selectService.getDriveTypes().then(v => setWheelDriveType(v.map(Adapt))); },
        []);

    const [regions, setRegion] = useState();

    useEffect(
        () => { selectService.getStates().then(v => setRegion(v.map(Adapt))); },
        []);

    const [cities, setCity] = useState();

    useEffect(
        () => {
            selectService.getCities().then(v => {
                setCity(v.map(Adapt))
            });
        },
        []);

    const [colors, setСolor] = useState();

    useEffect(
        () => { selectService.getColors().then(v => setСolor(v.map(Adapt))); },
        []);
    const [coutnries, setCoutnry] = useState();

    useEffect(
        () => { selectService.getCountries().then(v => setCoutnry(v.map(Adapt))); },
        []);


    const [techStates, setTechState] = useState();

    useEffect(
        () => { selectService.getTechnicalStates().then(v => setTechState(v.map(Adapt))); },
        []);
    const [lightTypes, setLightType] = useState();

    useEffect(
        () => { selectService.getHeadlights().then(v => setLightType(v.map(Adapt))); },
        []);

    const [salonMaterials, setSalonMaterials] = useState();

    useEffect(
        () => { selectService.getInteriorMaterials().then(v => setSalonMaterials(v.map(Adapt))); },
        []);
    const [windowLifters, setWindowLifters] = useState();

    useEffect(
        () => { selectService.getElectricWindows().then(v => setWindowLifters(v.map(Adapt))); },
        []);

    const [steeringAdjustment, setSteeringAdjustment] = useState();

    useEffect(
        () => { selectService.getSteeringWheelAdjustments().then(v => setSteeringAdjustment(v.map(Adapt))); },
        []);
    const [seatAdjustments, setSeatAdjustments] = useState();

    useEffect(
        () => { selectService.getSeatAdjustments().then(v => setSeatAdjustments(v.map(Adapt))); },
        []);

    const [seatsHeated, setSeatsHeated] = useState();

    useEffect(
        () => { selectService.getSeatHeatings().then(v => setSeatsHeated(v.map(Adapt))); },
        []);

    const [seatVentilation, setSeatVentilation] = useState();

    useEffect(
        () => { selectService.getSeatVentilations().then(v => setSeatVentilation(v.map(Adapt))); },
        []);
    const [varnishCoatings, setVarnishCoating] = useState();

    useEffect(
        () => { selectService.getPaintCoatings().then(v => setVarnishCoating(v.map(Adapt))); },
        []);
    const [salonColors, setSalonColor] = useState();

    useEffect(
        () => { selectService.getColors().then(v => setSalonColor(v.map(Adapt))); },
        []);
    const [powerSteeringAmplifies, setPowerSteeringAmplify] = useState();

    useEffect(
        () => { selectService.getPowerSteerings().then(v => setPowerSteeringAmplify(v.map(Adapt))); },
        []);
    const [vehicleTypes, setVehicleType] = useState();

    useEffect(
        () => { selectService.getVehicleTypes().then(v => setVehicleType(v.map(Adapt))); },
        []);

    function updateCities() {
        selectService.getCities(formModel.region).then(v => {
            setCity(v.map(Adapt))
        });
    }
    const thumbsContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16
    };

    const thumb = {
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: 190,
        height: 119,
        padding: 0,
        boxSizing: 'border-box'
    };

    const thumbInner = {
        display: 'flex',
        minWidth: 0,
        overflow: 'hidden'
    };

    const img = {
        display: 'block',
        width: 'auto',
        height: '100%'
    };
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            let accepFiles = acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
            setFiles([...files, ...accepFiles]);
            formModel.images = files;
        }
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);




    let value;
    function setValue(v) {
        formModel.phoneNumber = v;
        console.log(v);
    }

    async function onSubmit(e) {
        if(!accountService.isLogined()){
            errorService.Log('ви маєте бути авторизовані перед створенням оголошення');
            return;
        }
        let pepData =
        {
            // id: new Date().getTime(),
            user: accountService.User.id,

            vehicle_type: formModel.vehicleType,
            brand: formModel.brand,
            model: formModel.model,
            vehicle_year: formModel.year,
            mileage: formModel.drivenDistance,
            mileage_unit: 'тис. ки',
            body_type: formModel.bodyType,
            state: formModel.region,
            city: formModel.city,
            description: formModel.description,
            color: formModel.color,
            shipped_from: formModel.deliveredFrom,
            technical_state: formModel.techState,
            paint_coating: formModel.varnishCoatings,
            price_us: formModel.price,
            fuel_type: formModel.fuelType,
            transmission_type: formModel.transmission,
            drive_type: formModel.wheelDrive,
            engine_volume: formModel.engineVolume,

            conditioner: formModel.conditioners,
            electric_windows: formModel.windowLifter,
            interior_material: formModel.salonMaterial,
            interior_color: formModel.salonColor,
            power_steering: formModel.powerSteeringAmplifie,
            steering_wheel_adjust: formModel.steeringAdjustment,
            spare_wheel: formModel.spareWheel,
            headlights: formModel.lightType,
            seat_adjust: formModel.seatAdjustments,
            seat_heating: formModel.seatsHeated,
            seat_ventilation: formModel.seatVentilation,
        }
        function Valid() {

            

            function isNotNull(a) {
                return a != null || a != undefined
            }
            if (
                isNotNull(pepData.vehicle_type) &&
                isNotNull(pepData.brand) &&
                isNotNull(pepData.model) &&
                isNotNull(pepData.vehicle_type) &&
                isNotNull(pepData.mileage) &&
                isNotNull(pepData.description) &&
                isNotNull(pepData.mileage_unit) &&
                isNotNull(pepData.body_type) &&
                isNotNull(pepData.body_type) &&
                isNotNull(pepData.state) &&
                isNotNull(pepData.city) &&
                isNotNull(pepData.color) &&
                isNotNull(pepData.shipped_from) &&
                isNotNull(pepData.technical_state) &&
                isNotNull(pepData.paint_coating) &&
                isNotNull(pepData.price_us) &&
                isNotNull(pepData.fuel_type) &&
                isNotNull(pepData.transmission_type) &&
                isNotNull(pepData.drive_type) &&
                isNotNull(pepData.engine_volume)
            )
                return true;
            else return false;
        }

        // AdaptCar(CreateCar(
        //     formModel.vehicleType,
        //     formModel.region,
        //     formModel.bodyType,
        //     formModel.price,
        //     formModel.drivenDistance,
        //     formModel.brand,
        //     formModel.model,
        //     formModel.year,
        //     formModel.transmission,
        //     formModel.fuelType,
        //     formModel.wheelDrive,
        //     true,
        //     false,
        //     formModel.techState,
        //     formModel.varnishCoatings,
        //     formModel.color,
        //     null,
        //     null,
        //     'some desc',
        //     formModel.phoneNumber,
        //     formModel.engineVolume,
        //     formModel.deliveredFrom,
        //     'some owner',
        //     formModel.city
        // ));
        if (!Valid()) {
            errorService.Log('було пропущено необхідні поля')
            return;
        }

        console.log(pepData);
        console.log(files)
        await announcementsService.createAnnouncment(
            pepData, files).then(v => console.log(v))

    }
    function onFormValueChange(propName, value) {
        carService.getCars().then(v => { console.log(v) })
        formModel[propName] = value;
        console.log(formModel);
    }
    return (
           
            <div className="content" id='SellVehicle'>


                <div className="row">
                    <div className="title">Продавайте ваш автомобіль</div>
                </div>
                <div className="row">
                    <p className='subTitleTip'>Ви можете обрати, як саме продати свій автомобіль</p>
                </div>
                <div className="row">
                    <div className="sellAdvert">
                        <div className="title">
                            Розмістіть оголошення на Wheels.com
                        </div>
                        <div className="advertContent">
                            <div className="item"><img src={Check} alt="" />Миттєве розміщення оголошень</div>
                            <div className="item"><img src={Check} alt="" />Просування вашого оголошення</div>
                            <div className="item"><img src={Check} alt="" />Наша команда підтримки</div>
                        </div>
                        <div className="button">
                            Створити оголошення
                        </div>
                        <div className="imageHolder">
                            <img src={ToyotaBlue} alt="" />
                        </div>
                    </div>
                    <div className="sellAdvert">
                        <div className="title">
                            Миттєва пропозиція від Wheels.com
                        </div>
                        <div className="advertContent">
                            <div className="item"><img src={Check} alt="" />Швидко продайте своє авто за готівку</div>
                            <div className="item"><img src={Check} alt="" />Без торгу щодо вашої ціни</div>
                            <div className="item"><img src={Check} alt="" />Дійсна протягом 7 днів</div>
                        </div>
                        <div className="button">
                            Отримати пропозицію
                        </div>
                        <div className="imageHolder">
                            <img src={ToyotaRed} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="guide">
                        <div className="guideTitle">Як швидко продати свій автомобіль</div>
                        <div className="boxes">
                            <div className="box">
                                <div className="logo">
                                    <img src={Cam} alt="" />
                                </div>
                                <div className="title">
                                    Робіть якісні фотографії
                                </div>
                                <div className="text">
                                    Це може здатися очевидним, але якісні фотографії можуть значно вплинути на час, необхідний для продажу вашого автомобіля. Оголошення з хорошими фотографіями продаються втричі швидше
                                </div>
                            </div>
                            <div className="box">
                                <div className="logo">
                                    <img src={Filter} alt="" />
                                </div>
                                <div className="title">
                                    Робіть якісні фотографії
                                </div>
                                <div className="text">
                                    Це може здатися очевидним, але якісні фотографії можуть значно вплинути на час, необхідний для продажу вашого автомобіля. Оголошення з хорошими фотографіями продаються втричі швидше
                                </div>
                            </div>
                            <div className="box">
                                <div className="logo">
                                    <img src={Shield} alt="" />
                                </div>
                                <div className="title">
                                    Робіть якісні фотографії
                                </div>
                                <div className="text">
                                    Це може здатися очевидним, але якісні фотографії можуть значно вплинути на час, необхідний для продажу вашого автомобіля. Оголошення з хорошими фотографіями продаються втричі швидше
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="row stretch">
                    <div className="saleAnnouncement">
                        <div className="title">
                            <div>Створити оголошення</div>
                        </div>
                        <div className="stages">
                            <div className="stage first"><div className="background"><img src={FilledOrange} alt="" /></div>
                                <div className="title">Основна інформація</div>
                                <div className="subtitle">Вкажіть основні характеристики вашого автомобіля</div>
                            </div>
                            <div className="stage second"><div className="background"><img src={TransparentOrange} alt="" /></div>
                                <div className="title">Публікація оголошення</div>
                                <div className="subtitle">Виберіть спосіб публікації вашого оголошення</div>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="step">
                                <div className="stepTitle"><div className="index">1</div>Додайте фотографії вашого автомобіля</div>
                                <div className="form">
                                    <section className="dragNDrop container">
                                        <div {...getRootProps({ className: 'dropzone' })}>
                                            <input {...getInputProps()} />
                                            <p><img src={Plus} alt="" />Додати фото</p>
                                        </div>
                                        <aside style={thumbsContainer}>
                                            {thumbs}
                                        </aside>
                                    </section>
                                </div>
                            </div>
                            <div className="step">
                                <div className="stepTitle"><div className="index">2</div>Основна інформація</div>
                                <div className="form">
                                    <div className="titleAside">
                                        <div className="title">
                                            Тип транспорту
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('vehicleType', e) }} items={vehicleTypes} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Марка авто
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('brand', e) }} items={brandTypes} defaultTitle={'Оберіть марку'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Модель авто
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('model', e) }} items={modelTypes} defaultTitle={'Оберіть модель'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Рік випуску
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('year', e) }} items={carYearsOfCreation} defaultTitle={'Оберіть рік'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Об’єм двигуна (л)
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('engineVolume', e) }} items={engineVolumes} defaultTitle={"Оберіть об'єм"} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Коробка передач
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('transmission', e) }} items={transmissionTypes} defaultTitle={'Оберіть тип коробки передач'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Паливо
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('fuelType', e) }} items={fuelTypes} defaultTitle={'Оберіть тип палива'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Тип приводу
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('wheelDrive', e) }} items={wheelDriveTypes} defaultTitle={'Оберіть тип приводу'} />
                                    </div>
                                    <div className="titleAside inputTextAndSelect">
                                        <div className="title">
                                            Пробіг
                                        </div>
                                        <div className='multipleInputs'>
                                            <input type="text" placeholder='Введіть пробіг' onChange={e => { onFormValueChange('drivenDistance', e.target.value) }} />
                                            <DropDown items={vehicleTypes} defaultTitle={'тис. км'} />
                                        </div>

                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Стиль кузова
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('bodyType', e) }} items={bodyTypes} defaultTitle={'Оберіть стиль кузова'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Регіон
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('region', e); updateCities() }} items={regions} defaultTitle={'Оберіть регіон'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Місто
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('city', e) }} items={cities} defaultTitle={'Оберіть місто'} />
                                    </div>
                                </div>
                            </div>
                            <div className="step">
                                <div className="stepTitle"><div className="index">3</div>Опис автомобіля </div>
                                <div className="form">
                                    <div className="rules">
                                        <div className="title">
                                            В даному полі забороняється:
                                        </div>
                                        <div className="text">
                                            <div className="rule"><img src={ArrowDropRight} alt="" /> Залишати посилання або контактні дані</div>
                                            <div className="rule"><img src={ArrowDropRight} alt="" /> Пропонувати інші (особисті) послуги</div>
                                        </div>
                                    </div>
                                    <textarea name="" id="Fdescription" onChange={e => { onFormValueChange('description', e.target.value) }}></textarea>
                                </div>
                            </div>
                            <div className="step">
                                <div className="stepTitle"><div className="index">4</div>Характеристики автомобіля </div>
                                <div className="form">
                                    <div className="titleAside">
                                        <div className="title">
                                            Колір
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('color', e) }} items={colors} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Пригнаний з
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('deliveredFrom', e) }} items={coutnries} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Участь в ДТП
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('involvmentInAccidents', e) }} items={carAccidents} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Технічний стан
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('techState', e) }} items={techStates} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Лакофарбове покриття
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('varnishCoatings', e) }} items={varnishCoatings} defaultTitle={'Оберіть'} />
                                    </div>
                                </div>
                            </div>
                            <div className="step">
                                <div className="stepTitle"><div className="index">5</div>Додаткові опції </div>
                                <div className="form">
                                    <div className="titleAside">
                                        <div className="title">
                                            Кондиціонер
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('conditioners', e) }} items={conditioners} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Електросклопідйомники
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('windowLifter', e) }} items={windowLifters} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Матеріали салону
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('salonMaterial', e) }} items={salonMaterials} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Колір салону
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('salonColor', e) }} items={salonColors} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Підсилювач керма
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('powerSteeringAmplifie', e) }} items={powerSteeringAmplifies} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Регулювання керма
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('steeringAdjustment', e) }} items={steeringAdjustment} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Запасне колесо
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('spareWheel', e) }} items={spareWheel} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Фари
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('lightType', e) }} items={lightTypes} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Регулювання сидінь
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('seatAdjustments', e) }} items={seatAdjustments} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Підігрів сидінь
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('seatsHeated', e) }} items={seatsHeated} defaultTitle={'Оберіть'} />
                                    </div>
                                    <div className="titleAside">
                                        <div className="title">
                                            Вентиляція сидінь
                                        </div>
                                        <DropDown onChange={e => { onFormValueChange('seatVentilation', e) }} items={seatVentilation} defaultTitle={'Оберіть'} />
                                    </div>

                                </div>
                            </div>
                            <div className="step">
                                <div className="stepTitle"><div className="index">6</div>Вартість </div>
                                <div className="form">
                                    <div className="titleAside inputTextAndSelect">
                                        <div className="title">
                                            Ціна
                                        </div>
                                        <div className='multipleInputs'>
                                            <input type="text" placeholder='Введіть вартість' onChange={e => { onFormValueChange('price', e.target.value) }} />
                                            <DropDown items={currencies} defaultTitle={'Валюта '} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="step">
                                <div className="stepTitle"><div className="index">7</div>Телефон продавця </div>
                                <div className="form phonenumber">
                                    <div className='titleAside'>
                                        <div className="title">
                                            Телефон
                                        </div>
                                        <Input
                                            country="UA"
                                            value={value}
                                            onChange={setValue} />
                                    </div>
                                </div>

                            </div>
                            <div className="step withoutBorder">
                                <div className='agreeCheckbox'>
                                    <input type='checkbox' name={'agree'} id={'formAgree'} />
                                    <label htmlFor={'formAgree'}>Я згоден(на) з умовами <span>Угоди про надання послуг </span></label>
                                </div>
                                <div className="tip">
                                    Ваші персональні дані будуть оброблені та захищені згідно з  <span>Політикою приватності</span>
                                </div>
                                <div className="submit" >
                                    <div className="button" onClick={onSubmit}>
                                        Розмістити оголошення
                                    </div>
                                    <div className="notes">
                                        При кліці на кнопку “Розмістити оголошення”<br />
                                        Ви перейдете до публікації свого оголошення
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
import CreateCar from "./car.model"


export const engineVolumes = [
    0.5,
    1,
    1.5,
    2,
    2.5,
    3,
    3.5,
    4,
    5,
    6,
    7,
    8
]
export const vehicleTypes = [
    'lehkovy',
    'moto',
    'vantazhny',
    'spetz',
    'silhos',
    'avtobus',
    'prychepy',
    'avtobudynky'
]
const vehicleTypesUA = [
    'Легкові',
    'Мото',
    'Вантажівки',
    'Спецтехніка',
    'Сільгосптехніка',
    'Автобуси',
    'Причепи',
    'Автобудинки',
]
export function AdaptVehicleType(VT) {
    let index = vehicleTypes.findIndex((r) => r == VT)
    if (index == -1)
        return;
    else
        return vehicleTypesUA[index];
}
export const regions = [
    'Vinnytsia',
    'Volyn',
    'Dnipropetrovsk',
    'Donetsk',
    'Zhytomyr',
    'Zakarpattia',
    'Zaporizhzhia',
    'Ivano-Frankivsk',
    'Kyiv',
    'Kirovohrad',
    'Luhansk',
    'Lviv',
    'Mykolaiv',
    'Odesa',
    'Poltava',
]

const regionsUA = [
    'Вінницька',
    'Волинська',
    'Дніпропетровська',
    'Донецька',
    'Житомирська',
    'Закарпатська',
    'Запорізька',
    'Івано-Франківська',
    'Київська',
    'Кіровоградська',
    'Луганська',
    'Львівська',
    'Миколаївська',
    'Одеська',
    'Полтавська',
]
export function AdaptRegion(region) {
    let index = regions.findIndex((r) => r == region)
    if (index == -1)
        return;
    else
        return regionsUA[index];
}
export const bodyTypes = [
    'SEDAN',
    'COUPE',
    'SPORTCAR',
    'STATIONWAGON',
    'HATCHBACK',
    'CONVERTIBLE',
    'SUV',
    'MINIVAN',
    'PICKUPTRUCK'
]
export const brandTypes = [
    'Toyota',
    'Volkswagen',
    'Ford',
    'Chevrolet',
    'Honda',
    'BMW',
    'MercedesBenz',
    'Audi',
    'Nissan',
    'Hyundai',
    'Kia',
    'Volvo',
    'Subaru',
    'Tesla',
    'Mazda',
    'Lexus',
    'Land Rover',
    'Jeep',
    'GMC',
    'Chrysler',
    'Dodge',
    'Jaguar',
    'Porsche',
    'Mitsubishi',
    'Fiat',
    'Mini',
    'Acura',
    'Buick',
    'Cadillac',
    'Infiniti',
    'Lincoln',
    'Ram',
    'Alfa Romeo',
    'Genesis',
    'McLaren',
    'AstonMartin',
    'Bentley',
    'Ferrari',
    'Lamborghini',
    'Maserati',
    'Rolls Royce',
    'Bugatti',
    'Lotus',
    'Karma',
    'Rivian',
    'Lucid Motors',
    'Byton',
    'Polestar',
    'Faraday Future',
    'NIO',
]
export const modelTypes = [
    'Accord',
    'Corolla',
    'Civic',
    'Mustang',
    'Silverado',
    'Golf',
    '3 Series',
    'C-Class',
    'Q5',
    'Rogue',
    'Sonata',
    'Sorento',
    'XC60',
    'Outback',
    'Model 3',
    'CX-5',
    'RX',
    'Range Rover',
    'Wrangler',
    'Sierra',
]
export const transmissionTypes = [
    'mechanical',
    'auto',
    'typtronik',
    'robot',
    'variator',
]
const transmissionTypesUA = [
    'Ручна / Механіка',
    'Автомат',
    'Типтронік',
    'Робот',
    'Варіатор',
]
export function AdaptTransmission(transmission) {
    let index = transmissionTypes.findIndex((r) => r == transmission)
    if (index == -1)
        return;
    else
        return transmissionTypesUA[index];
}
export const fuelTypes = [
    'patrol',
    'disel',
    'gas',
    'gasAndPatrol',
    'hybrid',
    'electro',
    'gas-metan',
    'gas-propan',
]
const fuelTypesUA = [
    'Бензин',
    'Дизель',
    'Газ',
    'Газ / Бензин',
    'Гібрид',
    'Електро',
    'Газ-метан',
    'Газ пропан-бутан',
]
export function AdaptFuelType(fuel) {
    let index = fuelTypes.findIndex((r) => r == fuel)
    if (index == -1)
        return;
    else
        return fuelTypesUA[index];
}
export const wheelDriveTypes = [
    'front',
    'back',
    'full',
]
const wheelDriveTypesUA = [
    'Передній',
    'Задній',
    'Повний',
]
export function AdaptWheelDrive(WD) {
    let index = wheelDriveTypes.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return wheelDriveTypesUA[index];
}
export const technicalStates = [
    'old',
    'new',
]
const technicalStatesUA = [
    'старі',
    'нові',
]
export const years = [
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
]
export const cities = [
    'Kiev',
    'Kharkiv',
    'Lviv',
    'Odessa',
    'Dnipro',
    'Donetsk',
    'Zaporizhzhia',
    'Kryvyi Rih',
    'Mykolaiv',
    'Mariupol',
    'Luhansk',
    'Vinnytsia',
    'Simferopol',
    'Kherson',
    'Poltava',
    'Chernihiv',
    'Cherkasy',
    'Sumy',
    'Zhytomyr',
    'Khmelnytskyi',
]
export const citiesUA = [

    'Київ',
    'Харків',
    'Львів',
    'Одеса',
    'Дніпро',
    'Донецьк',
    'Запоріжжя',
    'Кривий Ріг',
    'Миколаїв',
    'Маріуполь',
    'Луганськ',
    'Вінниця',
    'Сімферополь',
    'Херсон',
    'Полтава',
    'Чернігів',
    'Черкаси',
    'Суми',
    'Житомир',
    'Хмельницький',
]
export const currencies = [
    '$',
    '₴'

]
export function AdaptCity(WD) {
    let index = cities.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return citiesUA[index];
}
export const colors = [

    'White',
    'Black',
    'Silver',
    'Gray',
    'Blue',
    'Red',
    'Green',
    'Brown',
    'Yellow',
    'Orange',
    'Beige',
    'Gold',
    'Bronze',
    'Purple',
    'Pink',
    'Turquoise',
    'Burgundy',
    'Navy',
    'Teal',
    'Charcoal',
]
export const colorsUA = [
    'Білий',
    'Чорний',
    'Сріблястий',
    'Сірий',
    'Синій',
    'Червоний',
    'Зелений',
    'Коричневий',
    'Жовтий',
    'Помаранчевий',
    'Бежевий',
    'Золотий',
    'Бронзовий',
    'Фіолетовий',
    'Рожевий',
    'Бірюзовий',
    'Бордовий',
    'Темно-синій',
    'Брудно-зелений',
    'Вугільний',
]
export function AdaptColor(WD) {
    let index = colors.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return colorsUA[index];
}
export const coutnries = [
    'Albania',
    'Austria',
    'Belgium',
    'Croatia',
    'Cyprus',
    'Denmark',
    'Estonia',
    'Finland',
    'Germany',
    'Greece',
    'Hungary',
    'Ireland',
    'Italy',
    'Latvia',
    'Lithuania',
    'Malta',
    'Netherlands',
    'Poland',
    'Romania',
    'Sweden',
    'Ukraine',
]
export const coutnriesUA = [
    'Албанія',
    'Австрія',
    'Бельгія',
    'Хорватія',
    'Кіпр',
    'Данія',
    'Естонія',
    'Фінляндія',
    'Німеччина',
    'Греція',
    'Угорщина',
    'Ірландія',
    'Італія',
    'Латвія',
    'Литва',
    'Мальта',
    'Нідерланди',
    'Польща',
    'Румунія',
    'Швеція',
    'Україна',
]
export function AdaptCountry(WD) {
    let index = coutnries.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return coutnriesUA[index];
}
export const varnishCoatings = [
    'As new',
    'Professionally edited traces of use',
    'Unedited traces of use'
]
export const varnishCoatingsUA = [
    'Як нове',
    'Професійно виправлені сліди використання',
    'Невиправлені сліди використання',
]
export function AdaptvarnishCoatings(WD) {
    let index = varnishCoatings.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return varnishCoatingsUA[index];
}
export const carAccidents = [
    'was in car accident',
    "wasn't in car accident",
]
export const carAccidentsUA = [
    'Був у ДТП',
    "Не був у ДТП",
]
export function AdaptCarAccidents(WD) {
    let index = carAccidents.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return carAccidentsUA[index];
}
export const techStates = [
    "Completely undamaged",
    "Professionally repaired damages",
    'Unrepaired damages',
    'Non-functional / For parts',
]
export const techStatesUA = [
    'Повністю непошкоджене',
    'Професійно відремонтовані пошкодження',
    'Не відремонтовані пошкодження',
    'Не на ходу / На запчастини',
]
export function AdaptTechState(WD) {
    let index = techStates.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return techStatesUA[index];
}
export const lightTypes = [

    "Xenon/Bi-xenon",
    "Laser",
    "LED",
    "Matrix",
    "Halogen",
]
export const lightTypesUA = [
    'Ксенонові/Біксенонові',
    'Лазерні',
    'Світлодіодні',
    'Матричні',
    'Галогенні',
]
export function AdaptlightType(WD) {
    let index = lightTypes.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return lightTypesUA[index];
}

export const salonMaterials = [

    "Fabric",
    "Leather",
    "Velvet",
    "Combination",
    "Artificial leather",
    "Alcantara",
]

export const salonMaterialsUA = [
    'Тканина',
    'Шкіра',
    'Велюр',
    'Комбінований',
    'Штучна шкіра',
    'Алькантара',
]
export function AdaptSalonMaterial(WD) {
    let index = salonMaterials.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return salonMaterialsUA[index];
}
export const salonColors = [
    "Light",
    "Dark",
    "Brown",
]
export const salonColorsUA = [
    'Світлий',
    'Темний',
    'Коричневий',
]
export function AdaptSalonColor(WD) {
    let index = salonColors.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return salonColorsUA[index];
}
export const windowLifters = [
    "Front",
    "Front and rear",
]
export const windowLiftersUA = [
    'Передні',
    'Передні та задні',
]
export function AdaptwindowLifter(WD) {
    let index = windowLifters.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return windowLiftersUA[index];
}
export const powerSteeringAmplifies = [

    "Hydraulic",
    "Electric",
]
export const powerSteeringAmplifiesUA = [
    'Гідро',
    'Електро'
]
export function AdaptpowerSteeringAmplifies(WD) {
    let index = powerSteeringAmplifies.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return powerSteeringAmplifiesUA[index];
}
export const steeringAdjustment = [
    "Height adjustment",
    "Height and reach adjustment",
]
export const steeringAdjustmentUA = [
    'По висоті',
    'По висоті та по вильоту',
]
export function AdaptSteeringAdjustment(WD) {
    let index = steeringAdjustment.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return steeringAdjustmentUA[index];
}
export const spareWheel = [

    "Full-size",
    "Spare tire",
]
export const spareWheelUA = [
    'Повнорозмірне',
    'Докатка',
]
export function AdaptspareWheel(WD) {
    let index = spareWheel.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return spareWheelUA[index];
}
export const conditioners = [
    "Single-zone climate control",
    "Dual-zone climate control",
    "Multi-zone climate control",
]
export const conditionersUA = [
    'Клімат-контроль 1-зонний',
    'Клімат-контроль 2-зонний',
    'Клімат-контроль багатозонний',
]
export function AdaptConditioner(WD) {
    let index = conditioners.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return conditionersUA[index];
}
export const seatAdjustments = [

    "Manual driver seat adjustment",
    "Manual front seat adjustment",
    "Electric driver seat adjustment",
    "Electric front seat adjustment",
    "Electric front and rear seat adjustment",
]

export const seatAdjustmentsUA = [
    'Ручне регулювання сидіння водія',
    'Ручне регулювання передніх сидінь',
    'Електрорегулювання сидіння водія',
    'Електрорегулювання передніх сидінь',
    'Електрорегулювання передніх та задніх сидінь',
]
export function AdaptSeatAdjustments(WD) {
    let index = seatAdjustments.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return seatAdjustmentsUA[index];
}
export const seatsHeated = [

    "Front seats",
    "Front and rear seats",
]
export const seatsHeatedUA = [
    'Передні сидіння',
    'Передні та задні сидіння',
]
export function AdaptSeatsHeated(WD) {
    let index = seatsHeated.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return seatsHeatedUA[index];
}
export const seatVentilation = [
    "Front seats",
    "Front and rear seats",
]
export const seatVentilationUA = [
    'Передні сидіння',
    'Передні та задні сидіння',
]
export function AdaptseatVentilation(WD) {
    let index = seatVentilation.findIndex((r) => r == WD)
    if (index == -1)
        return;
    else
        return seatVentilationUA[index];
}
export const cars = [
    CreateCar(
        vehicleTypes[0],
        regions[0],
        bodyTypes[0],
        10000,
        100000,
        brandTypes[0],
        modelTypes[0],
        2005,
        transmissionTypes[0],
        fuelTypes[0],
        wheelDriveTypes[0],
        true,
        false,
        technicalStates[0],
        '',
        10,
        ['card image.png'],
        'some description',
        '098 666 66 66',
        1
    ),
    CreateCar(
        vehicleTypes[1],
        regions[1],
        bodyTypes[1],
        10000,
        8000,
        brandTypes[1],
        modelTypes[1],
        2005,
        transmissionTypes[1],
        fuelTypes[1],
        wheelDriveTypes[1],
        true,
        false,
        technicalStates[1],
        '',
        10,
        ['volkswagen_golf__418081862f.webp'],
        'some description',
        '098 666 66 66',
        2
    ),
    CreateCar(
        vehicleTypes[1],
        regions[1],
        bodyTypes[1],
        10000,
        6000,
        brandTypes[1],
        modelTypes[1],
        2005,
        transmissionTypes[1],
        fuelTypes[1],
        wheelDriveTypes[1],
        true,
        false,
        technicalStates[1],
        '',
        10,
        ['volkswagen_golf__418081862f.webp'],
        'some description',
        '098 666 66 66',
        5
    ),
    CreateCar(
        vehicleTypes[1],
        regions[1],
        bodyTypes[1],
        10000,
        6000,
        brandTypes[1],
        modelTypes[1],
        2005,
        transmissionTypes[1],
        fuelTypes[1],
        wheelDriveTypes[1],
        true,
        false,
        technicalStates[1],
        '',
        10,
        ['volkswagen_golf__418081862f.webp'],
        'some description',
        '098 666 66 66',
        4
    )


]







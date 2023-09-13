import './footer.component.scss'
import Logo from '../header/logo.svg'

export default function Footer() {
    return (
        <div id="footer">
            <div className="logo">
                <img src={Logo} alt="" />
                © 2023 Wheels.com. Всі права захищені.
            </div>
            <div className='links'>
                <div>Угода про надання послуг</div>
                <div>Політика приватності</div>
                <div>Карта сайту</div>
                <div>Зв’яжіться з нами</div>
            </div>

        </div>
    )
}
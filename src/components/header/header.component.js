import React from "react";
import './header.component.scss'
import logo from './logo.svg';
import saved from './saved.svg';
import chat from './chat.svg'
import notification from './notification.svg'
import user from './user.svg'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";
import { authService } from "../../core/api/supabase/services/auth";
import { accountService } from "../../services/account.service";
import { errorService } from "../../services/errorModal.service";
import { func } from "prop-types";
export default function MyHeader(props) {


  const [openRegister, setRegisterOpen] = React.useState(false);
  const handleRegisterOpen = () => setRegisterOpen(true);
  const handleRegisterClose = () => setRegisterOpen(false);


  const [openLogout, setLogoutOpen] = React.useState(false);
  const handleLogoutOpen = () => setLogoutOpen(true);
  const handleLogoutClose = () => setLogoutOpen(false);
  const [userNSN, setUserNSN] = React.useState(false);

  function setUser(v) {
    accountService.setUser(v)
    let name = accountService.User.user_metadata.firstname;
    let lastname = accountService.User.user_metadata.lastname;

    setUserNSN(`${name} ${lastname}`)
    handleLoginClose();
  }
  const [openLogin, setLoginOpen] = React.useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleLogOut = () => { setUserNSN(false); handleLogoutClose(); accountService.setUser(null) };


  const [openError, setErrorOpen] = React.useState(false);
  const [ErrorMsg, setErrorMsg] = React.useState('Some msg');
  const handleErrorOpen = () => setErrorOpen(true);
  const handleErrorClose = () => setErrorOpen(false);

  function LogErroMsg(value) { 
    setErrorMsg(value);
    handleErrorOpen();
  }
  errorService.onLog(LogErroMsg);

  const switchToRegister = () => {

    handleLoginClose();
    handleRegisterOpen();
  }
  const switchToLogin = () => {
    handleRegisterClose()
    handleLoginOpen()
  }
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log('sss');
    let email = document.getElementById('LEmail').value;
    let password = document.getElementById('LPassword').value;
    let loginModel = {
      email: email,
      password: password
    }
    console.log(loginModel);
    authService.loginWithEmailAndPassword(loginModel).then(v => { setUser(v.user); console.log(v) })

  }
  const handleRegisterSubmit = (e) => {
    let name = document.getElementById('Rname').value;
    let surname = document.getElementById('Rsurname').value;
    let phone = document.getElementById('RPhone').value;
    let email = document.getElementById('REmail').value;
    let password = document.getElementById('Rpassword').value;

    let registerModel = {
      email: email,
      password: password,
      firstname: name,
      lastname: surname,
      phone: phone,
    }
    console.log(registerModel);
    authService.registerWithEmailAndPassword(registerModel);
    e.preventDefault();
  }
  return (
    <header>
      <Modal
        open={openLogin}
        onClose={handleLoginClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="LoginNSignUp">
          <form action="" onSubmit={handleLoginSubmit}>
            <div className="wrapper">
              <div className="title">Вхід на сайт <span>Wheels.com</span></div>
              <div className="form">
                <input type="text" placeholder="Введіть e-mail" id="LEmail" />
                <input type="password" placeholder="Введіть пароль" id="LPassword" />
                <div className="keepLogIn">
                  <div>

                    <input type='checkbox' name='keepLogData' id='keepLogData' />
                    <label htmlFor='logLogin'>Запам’ятати мене</label>
                  </div>
                  <span>Забули пароль?</span>
                </div>
                <input type="submit" value={'Увійти'} className="button" />
                <div className="orRegister" onClick={switchToRegister}>
                  <p >Зареєструватися на Wheels.com</p>
                </div>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
      <Modal
        open={openRegister}
        onClose={handleRegisterClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="LoginNSignUp">
          <form action="" onSubmit={handleRegisterSubmit}>
            <div className="wrapper">
              <div className="title">Реєстрація на сайті <span>Wheels.com</span></div>
              <div className="form">
                <input type="text" placeholder="Введіть ваше ім’я" id="Rname" />
                <input type="text" placeholder="Введіть ваше прізвище" id="Rsurname" />
                <input type="text" placeholder="Введіть номер телефону" id="RPhone" />
                <input type="text" placeholder="Введіть e-mail" id="REmail" />
                <input type="password" placeholder="Введіть пароль" id="Rpassword" />

                <div className="agreement">
                  <div>

                    <input type='checkbox' name='agreement' id='UserAgreement' />
                    <label htmlFor='UserAgreement'>Я згоден(на) з умовами <span className="rules">Угоди про надання послуг</span></label>
                  </div>

                </div>
                <div className="partOfAgreement">
                  Ваші персональні дані будуть оброблені та захищені згідно з  <span>Політикою приватності</span>
                </div>
                <input type="submit" value={'Зареєструватися'} className="button" />

                <div className="orRegister" onClick={switchToLogin}>
                  <p >Вже зареєстовані?</p>
                </div>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
      <Modal
        open={openLogout}
        onClose={handleLogoutClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="LogOut">
          <div className="title">
            Бажаєте вийти з обліково запису?
          </div>
          <div className="button clickable orangeBGButton" onClick={handleLogOut}>
            Вийти з обліково запису
          </div>
        </Box>
      </Modal>
      <Modal
        open={openError}
        onClose={handleErrorClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="Error">
          <div className="title">
            Помилка:
          </div>
          <div className="msg">
            {ErrorMsg}
          </div>
        </Box>
      </Modal>
      <nav>
        <ul className="navList">
          <Link to={'/'}><img src={logo} alt="Logo" /></Link>
          <li className="navItem"><Link className="navLink transparentLink" to={'/Search'}>Купити</Link></li>
          <li className="navItem"><Link className="navLink transparentLink" to={'/SellVehicle'}>Продати</Link></li>
          <li className="navItem"><Link className="navLink transparentLink">Фінанси</Link></li>
          <li className="navItem"><Link className="navLink transparentLink">ТОП-100</Link></li>
        </ul>
        <div className="headerRightSide">
          <ul className="userNotificationList">
            <li ><img src={saved} alt="saved" /></li>
            <li ><img src={chat} alt="chat" /></li>
            <li ><img src={notification} alt="notification" /></li>
          </ul>
          <button onClick={!userNSN ? handleLoginOpen : handleLogoutOpen}>
            <img src={user} alt="user" />
            <p>{userNSN ? userNSN : 'Особистий кабінет'}</p>
          </button>
        </div>

      </nav>
    </header>
  );
}
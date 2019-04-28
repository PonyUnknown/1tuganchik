import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGooglePlusG, faPinterest } from "@fortawesome/free-brands-svg-icons";

let OneProfile = styled.div`

${OneProfile}{
    background: linear-gradient(to bottom, #8f8273, #e48863);
    height: 100vh;
    padding-top: 3%;
}

.main-container{
    width: 67%;
    height: 550px;
    margin: auto;
    display: flex;
}

.container1{
    width: 35%;
    height: inherit;
    background-color: #4c3e3d;
    text-align: center;
    color: #d1d1d1;
    border-right: 1px solid #453737;
}

.container2{
    width: 15%;
    height: inherit;
    background-color: #4c3e3d;
}

.container3{
    width: 50%;
    height: inherit;
    background-color: #ede6e3;
    border-left: 1px solid #453737;
}

.container1 .background{
    background: url('./img/Profile/background.jpg') no-repeat;
    width: 100%;
    height: 150px;
    background-size: 100%;
    margin: auto;
    border-bottom: 1px solid #453737;
}

.container1 .profile{
    height: 300px;
    margin-top: -27%;
    border-bottom: 1px solid #453737;
}

.profile .avatar{
    background: url('./img/Profile/avatar.jpg') no-repeat;
    width: 150px;
    height: 150px;
    background-size: 100%;
    margin: auto;
    border-radius: 50%;
    border: 5px solid #d4c3ae;
}

.profile .nickname{
    margin-top: 3%;
    font-weight: bolder;
    font-size: 20px;
    color: #ddcfbd;
}

.profile button{
    width: 35%;
    height: 30px;
    display: block;
    margin: auto;
    margin-top: -1%;
    border-radius: 10%;
}

.profile .message{
    background-color: #d1c0aa;
    color: #493a39;
}

.profile .contact{
    margin-top: 2%;
    background-color: #9b6450;
    color: #ddcfbd;
}

.socials button{
    margin: auto;
    margin-top: 1%;
    text-align: left;
    width: 35%;
    height: 40px;
    display: block;
    background-color: #4c3e3d;
    color: #ddcfbd;
    border: none;
    border-bottom: 2px solid #453737;
    display: block;
}

.socials .pinterest{
    border: none;
}

.socials button:hover{
    cursor: pointer;
}

.socials button .fa{
    display: inline-block;
}

.socials button p{
    display: inline-block;
    margin-left: 15%;
}

.pages button{
    width: 100%;
    height: 63px;
    display: block;
    background-color: #4c3e3d;
    color: #ddcfbd;
    border: none;
    border-top: 1px solid #453737;
}

.pages button p{
    margin-left: 15%;
}

.pages .login{
    background: url('./img/Profile/login.png') no-repeat 15% 50%;
}

.pages .signup{
    background: url('./img/Profile/signup.png') no-repeat 5% 50%;
}

.pages .profile{
    background: url('./img/Profile/profile.png') no-repeat 15% 50%;
}

.pages .about{
    background: url('./img/Profile/about.png') no-repeat 15% 50%;
}

.pages .tree{
    background: url('./img/Profile/tree.png') no-repeat 15% 50%;
    border-bottom: 1px solid #453737;
}

.overview h1{
    color: #493a39;
    font-weight: lighter;
    text-align: center;
    margin-top: 3%;
    margin-bottom: 7%;
}

.overview p{
    text-align: center;
    color: black;
}

.overview h3{
    color: #493a39;
    margin-top: -3%;
    font-size: 20px;
    text-align: center;
}
`;

class Profile extends Component {
    render() {
        let {profile} = this.props;

        return (
            <OneProfile>

                <div className='main-container'>

                    <div className='container1'>
                        <div className='background'></div>
                        <div className='profile'>
                            <div className='avatar'></div>
                            <p className='nickname'>{profile.nickname}</p>
                            <a><button className='message'>Сообщение</button></a>
                            <a><button className='contact'>Контакты</button></a>
                        </div>
                        <div className='socials'>
                            <button className='facebook'><FontAwesomeIcon icon={faFacebookF} className='fa' /><p>Facebook</p></button>
                            <button className='twitter'><FontAwesomeIcon icon={faTwitter} className='fa' /><p>Twitter</p></button>
                            <button className='googleplus'><FontAwesomeIcon icon={faGooglePlusG} className='fa' /><p>Google+</p></button>
                            <button className='pinterest'><FontAwesomeIcon icon={faPinterest} className='fa' /><p>Pinterest</p></button>
                        </div>
                    </div>

                    <div className='container2'>
                        <div className='pages'>
                            <a><button className='login'><p>Вход</p></button></a>
                            <a><button className='signup'><p>Регистрация</p></button></a>
                            <a><button className='profile'><p>Профиль</p></button></a>
                            <a><button className='about'><p>О нас</p></button></a>
                            <a><button className='tree'><p>Дерево</p></button></a>
                        </div>
                    </div>

                    <div className='container3'>
                        <div className='overview'>
                            <h1>Описание</h1>
                                <p>Имя:</p>
                                <h3>{profile.name}</h3>
                                <p>Фамилия:</p>
                                <h3>{profile.surname}</h3>
                                <p>Национальность:</p>
                                <h3>{profile.nationality}</h3>
                                <p>Пол:</p>
                                <h3>{profile.sex}</h3>
                                <p>Возраст:</p>
                                <h3>{profile.age}</h3>
                                <p>Адрес:</p>
                                <h3>{profile.address}</h3>
                        </div>
                    </div>

                </div>

                    {/* <div className='overview' id='link-overview'>
                        <a href='#link-overview'><h1>Overview</h1></a>
                        <p>Name: {profile.name}</p>
                        <p>Surname: {profile.surname}</p>
                        <p>Nationality: {profile.nationality}</p>
                        <p>Sex: {profile.sex}</p>
                        <p>Age: {profile.age}</p>
                        <p>Address: {profile.address}</p>
                    </div> */}

            </OneProfile>
        );
    }
}

export default Profile;
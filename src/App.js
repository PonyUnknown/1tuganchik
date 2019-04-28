import React, { Component } from "react";
import ProfileJs from "./pages/profile/Profile";

export default class App extends Component {
    state = { 
        profiles: [
            {nickname: 'Аширов Альдияр', name: 'Альдияр', surname: 'Аширов', nationality: 'Казах', sex: 'Мужской', age: '16', address: 'Проспект Манаса, 7',},
        ]
     }
    render() {

        let {profiles} = this.state;
        return (
            <div>
                <ProfileJs profile={profiles[0]}/>
            </div>
        );
    }
}



// webpack, reactBuild

// const request = async () => {
//     const response = await fetch('https://api.com/values/1');
//     const json = await response.json();
//     console.log(json);
// }

// request();
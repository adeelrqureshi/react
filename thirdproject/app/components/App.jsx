import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

export default class App extends React.Component {

        constructor (props){
            super(props);
            this.state = {
                profiles: [
                    {name: 'Sue', age: 30, hobbies:['swim','bike'],bio: 'enjoys swimming'},
                    {name: 'Bill',age:40, hobbies:['games','gardening'],bio: 'enjoys games'}
                ]
            };
        }

        addUser(newProfile){
            console.log(this)
            // var user = {
            //     name: 'Tom',
            //     age: 22,
            //     bio:'enjoys sports',
            //     hobbies: ['basketball','baseball']
            // }
            this.setState({
                profiles: this.state.profiles.concat([newProfile])
            })
        }        
    render(){
        let profile1 = this.state.profiles[0]

        let profiles = this.state.profiles.map( profile=>
            <Profile 
            name = {profile.name}
            age = {profile.age}
            bio = {profile.bio}
            hobbies = {profile.hobbies}
            /> 
         )

        

        return (
        <div>
          <p> button should show </p>
          {profiles}
          <AddProfile addUser={this.addUser.bind(this)}/>
        </div>            
        );
    }
}

ReactDOM.render(<App />,document.getElementById('app'));

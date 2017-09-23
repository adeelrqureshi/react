import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

class Profile extends React.Component{
    render(){
        let hobbies = this.props.hobbies.map( hobby=>{
            return (<li>{hobby}</li>)
        })
        return (
            <section>
                <hr/>
                <h3>{this.props.name}</h3>
                <p>
                    {this.props.name } is { this.props.age } and {this.props.bio}  
                </p>
                <h3>Hobbies</h3>
                <ul>
                    {hobbies}
                </ul>
            </section>
        )
    }
}
class App extends React.Component {

        constructor (props){
            super(props);
            this.state = {
                profiles: [
                    {name: 'Sue', age: 30, hobbies:['swim','bike'],bio: 'enjoys swimming'},
                    {name: 'Bill',age:40, hobbies:['games','gardening'],bio: 'enjoys games'}
                ]
            };
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
          {profiles}
        </div>            
        );
    }
}

ReactDOM.render(<App />,document.getElementById('app'));

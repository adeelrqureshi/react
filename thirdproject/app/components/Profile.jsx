import React from 'react'
//  export default class Profile extends React.Component{
//     render(){
//         let hobbies = this.props.hobbies.map( hobby=>{
//             return (<li>{hobby}</li>)
//         })
//         return (
//             <section>
//                 <hr/>
//                 <h3>{this.props.name}</h3>
//                 <p>
//                     {this.props.name } is { this.props.age } and {this.props.bio}  
//                 </p>
//                 <h3>Hobbies</h3>
//                 <ul>
//                     {hobbies}
//                 </ul>
//             </section>
//         )
//     }
// }

//Using an alternate syntax for creating stateless (without this ) component

let Profile = props => (
    <section>
        <hr/>
        <h3>{props.name}</h3>
        <p>
            {props.name } is { props.age } and {props.bio}  
        </p>
        <h3>Hobbies</h3>
        <ul>
            {props.hobbies.map (hobby => <li>{hobby}</li>)}            
        </ul>
    </section>
)

export default Profile
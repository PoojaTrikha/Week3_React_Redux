
import React, {PureComponent} from 'react'
import User from './User'

export default class UserBoard extends PureComponent {

   render(){
       const users = ['Alice', 'Bob', 'Charles']
       return(
           <div>
               <h3>User Board</h3>
               {users.map((user) => {
                    return <User names = {user} />

               })}

              

               {/* <User name="Alice"/>
               <User name="Bob"/>
               <User name="Charles"/> */}
           </div>
       )
   }
}
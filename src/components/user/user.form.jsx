import { Button, Input } from 'antd';
import './user.css'
import { useState } from 'react';
const UserForm = () => {
   const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [phone, setPhone] = useState("");

   const handleClickButton = () => {
      console.log(">>>check state: ", {fullName, email, password, phone})
   }
   return (
      <div className="user-form">
         <div className='form-input'>
         <div className='form-child'>
               <div>
                  <span className='place-text'>FullName</span>
                  <Input className='input-info'
                     value={fullName} 
                     onChange={(event) => {setFullName(event.target.value)}}
                  />
               </div>
               <div>
                  <span className='place-text'>Email</span>
                  <Input className='input-info'
                     value={email}
                     onChange={(event) => {setEmail(event.target.value)}}
                  />
               </div>
               <div>
                  <span className='place-text'>Password</span>
                  <Input.Password className='input-info'
                     value={password}
                     onChange={(event) => {setPassword(event.target.value)}}
                  />
               </div>
               <div>
                  <span className='place-text'>Phone</span>
                  <Input className='input-info'
                     value={phone}
                     onChange={(event) => {setPhone(event.target.value)}}
                  />
               </div>
               <div>
               <Button type="primary" className='button-createUser'
                  onClick={() => {handleClickButton()}}
               >Create user</Button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default UserForm;
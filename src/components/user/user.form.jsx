import { Button, Input } from 'antd';
import './user.css'
import { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
   const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [phone, setPhone] = useState("");

   const handleClickButton = () => {
      const URL_BACKEND = "http://localhost:8080/api/v1/user";
      const data = {
         fullName: fullName,
         email: email,
         password: password,
         phone: phone
      }
      axios.post(URL_BACKEND, data)
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
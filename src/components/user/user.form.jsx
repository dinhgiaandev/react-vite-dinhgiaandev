import { Button, Input } from 'antd';
import './user.css'
const UserForm = () => {
   return (
      <div className="user-form">
         <div className='form-input'>
         <div className='form-child'>
               <div>
                  <span className='place-text'>FullName</span>
                  <Input className='input-info'/>
               </div>
               <div>
                  <span className='place-text'>Email</span>
                  <Input className='input-info'/>
               </div>
               <div>
                  <span className='place-text'>Password</span>
                  <Input.Password className='input-info'/>
               </div>
               <div>
                  <span className='place-text'>Phone</span>
                  <Input className='input-info'/>
               </div>
               <div>
               <Button type="primary" className='button-createUser'>Create user</Button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default UserForm;
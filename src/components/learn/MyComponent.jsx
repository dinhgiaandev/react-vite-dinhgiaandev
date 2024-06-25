// <> : is fragment, which can be help us to have more than 1 div in return
//JSX : only have 1 parent
import './style.css'
const MyComponent = () => {
   return(
      <>
         <div> Kato & Dinhgiaandevv</div>
         <div className='child'> I wanna be a full-stack in 2025</div>
      </>
   );
}

export default MyComponent;
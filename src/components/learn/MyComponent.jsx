// <> : is fragment, which can be help us to have more than 1 div in return
//JSX : only have 1 parent
import './style.css'
const MyComponent = () => {
   // const dinhgiaandev = "Kato"; // string
   // const myAge = 20; // number
   // const testArray = [1, 2, 3] // array
   const testObject = {
      name: "Dinhgiaan",
      age: 20
   }
   return(
      <>
         <div> {JSON.stringify(testObject)} & Dinhgiaandevv</div>
         <div> {console.log("Kato")}</div>
         <div className='child' 
            style={{fontSize: "3rem"}}
         > I wanna be a full-stack in 2025</div>
      </>
   );
}

export default MyComponent;
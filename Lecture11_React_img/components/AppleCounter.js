import Button from "./Button"
import LeftArrow from "url:/assets/images/left-arrow.png"
import RightArrow from "url:/assets/images/right-arrow.png"
import AppleBasket from "./AppleBasket"
import './AppleCounter.css'
import { useState } from "react"


// let rightAppleCount = 0;
// let leftAppleCount = totalAppleCount - rightAppleCount;


const AppleCounter = () => {

    const totalAppleCount = 10;
    const [rightAppleCount, setRightAppleCount] = useState(0)
    const [leftAppleCount, setLeftAppleCount] = useState(totalAppleCount - rightAppleCount)
        
    const leftClickHandler = () => {
        if(rightAppleCount > 0){
            setRightAppleCount(rightAppleCount - 1);
            setLeftAppleCount(leftAppleCount + 1);
        }
        
    }

    const rightClickHandler = () => {
        if(leftAppleCount > 0){
            setRightAppleCount(rightAppleCount + 1);
            setLeftAppleCount(leftAppleCount - 1);
        }
       
    }

  return (
    <>
        <section>
            <AppleBasket 
                appleCount={leftAppleCount} basketName="Basket 1"
            />

            <Button 
                clickHandler={leftClickHandler} imageUrl={LeftArrow} buttonName="Left Arrow">
            </Button>

            <Button 
                clickHandler={rightClickHandler} imageUrl={RightArrow}
            />

            <AppleBasket 
                appleCount={rightAppleCount} basketName="Basket 2"
            />
        </section>
    </>
  )
}

export default AppleCounter

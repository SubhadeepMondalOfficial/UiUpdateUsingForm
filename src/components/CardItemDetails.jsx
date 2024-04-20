import PropTypes from 'prop-types';
import { useEffect, useState } from "react"

function CardItemDetails(props) {
    //  const month = props.itemDate.toLocaleString('en-US', {month: 'long'})
    //  const year = props.itemDate.getFullYear()
    //  const day = props.itemDate.toLocaleString('en-Us', {day: '2-digit'})
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let monthInNum = (props.itemDate.split('-')[1])
    if(monthInNum < 10){
        monthInNum = monthInNum.charAt(1)
    }
    let [month, setMonth] = useState(monthList[monthInNum])
    
    useEffect(()=>{setMonth(monthList[monthInNum-1])},[setMonth])
    console.log(monthInNum);
    
    const year = props.itemDate.split('-')[0]
    const day = props.itemDate.split('-')[2]

     const [itemName, setItemName] = useState(props.itemName)

     function addCardHandler(){
        if(itemName == 'Text Updated'){
            setItemName(props.itemName)
        }
        else {setItemName('Text Updated')}
     }

    return(
        <div className="flex justify-between align-middle bg-slate-300 gap-5 rounded-lg px-8 py-5">
            <div className="flex justify-center align-middle bg-black text-white min-w-24 px-2 py-1 rounded-lg">
                <div className="flex flex-col justify-center text-center">
                    <span>{month}</span>
                    <span>{year}</span>
                    <span>{day}</span>
                </div>
            </div>
            <div className="flex flex-col justify-center text-center min-w-52">
                <h3 className="text-xl font-bold">{itemName}</h3>
            </div>
            <div className="flex flex-col justify-center text-center ">
                <button className="bg-cyan-500 px-2 py-1 hover:bg-black hover:text-white trans rounded duration-500" onClick={addCardHandler}>Add to Card</button>
            </div>
        </div>
    )
}
CardItemDetails.propTypes = {
    itemDate: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired
  };

export default CardItemDetails
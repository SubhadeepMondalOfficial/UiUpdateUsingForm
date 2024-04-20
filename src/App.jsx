
import { useState, useEffect } from 'react';
import Card from './components/Card'
import CardForm from './components/CardForm'

function App() {

  const oldItemDetails = [
    {
        key: 1,
        itemDate: '2010-2-1',
        itemName: 'boAt Earphone',
    },
    {
        key: 2,
        itemDate: '2015-5-2',
        itemName: 'Noise AirBud',
    },
    {
        key: 3,
        itemDate: '2020-10-3',
        itemName: 'Samsung Neckband',
    },
  ];

  let [itemDetails, setItemDetails] = useState(oldItemDetails)

  // let newObj = {
  //     itemDate: new Date(2000, 1, 28),
  //     itemName: 'Samsung Neckband',
  // }
  // useEffect(() => {
  //   // Create a new array with the old item details and the new object
  //   // setItemDetails([...oldItemDetails, newObj]);
    
  // }, [setItemDetails]);

  // console.log(itemDetails);

  return (
    <div className='flex justify-center align-middle gap-24 mt-10' >
        <CardForm oldItem={itemDetails} newItem={setItemDetails} />
        <Card items={itemDetails}/>
    </div>
  )
}


export default App

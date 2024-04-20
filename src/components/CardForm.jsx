
// import { useState } from "react";

function CardForm({oldItem, newItem}) {
  function onSubmitForm(event){
    event.preventDefault()
    const formData = new FormData(event.target);
    console.log(formData);
    const newDataObj = Object.fromEntries(formData.entries());
    console.log('obj', newDataObj);

    newItem([...oldItem, newDataObj])

    // console.log('Item Date->', formDataObj.itemDate);
    // console.log('Item Name->', formDataObj.itemName);
  }

  return (
  
    <div className=" flex flex-col align-middle ">
      <div className="bg-cyan-700 px-4 py-8 rounded-lg">
        <h3 className="font-bold text-xl mb-6 text-slate-300">
          Add New Item in Card
        </h3>
        <form onSubmit={onSubmitForm}>
          <label htmlFor="itemDate" className="text-cyan-100 mr-3">Item Date: </label>
          <input type="date" id="itemDate" name="itemDate"  className="px-2 py-1 focus:outline-none rounded min-w-48" />
          <br />
          <br />
          <label htmlFor="itemName" className="text-cyan-100">Item Name: </label>
          <input type="text" id="itemName" name="itemName" className="px-2 py-1 focus:outline-none rounded"/>
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            className="bg-black text-white px-3 py-1 rounded cursor-pointer hover:bg-cyan-500 hover:text-black duration-300"
          />
        </form>
      </div>
    </div>
  );
}

export default CardForm;

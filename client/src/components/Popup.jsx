import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from "axios";
const Popup = ({Setshowpopup , popupcontent , SetupdateUI}) => {

    const[input,Setinput] = useState("") 

    const updateToDo = () => {
        axios
          .put(`http://localhost:5000/api/update/${popupcontent.id}`, { todo: input })
          .then((res) => {
            console.log(res.data);
            SetupdateUI((prevState) => !prevState);
            Setshowpopup(false);
          });
      };

  return (
    <main className="bg-violet-600 p-3" >
        <div className="flex justify-center mb-2 ">
        <h2 className="text-white font-semibold text-2xl">Update</h2>
        <div className="flex justify-center items-center relative right-[-90px]">
             <IoCloseCircleOutline className="text-2xl " onClick={()=>Setshowpopup(false)}/></div>
        </div>
   
    <div className="flex bg-violet-600 gap-2">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
 focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700
dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
dark:focus:border-blue-500"
        name="todo"
        placeholder="update-toDo"
        value={input} onChange={(e)=>Setinput(e.target.value)}
      />

      <button
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600
to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300
dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
  onClick={updateToDo}    >
        update
      </button>
    </div>
    </main>
  );
};

export default Popup;

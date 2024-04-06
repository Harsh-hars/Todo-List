import axios from "axios";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
const Cards = ({ todo, id, SetupdateUI , Setshowpopup , Setpopupcontent}) => {

  const delete_todo = () => {
    axios.delete(`http://localhost:5000/api/delete/${id}`).then((res) => {
      console.log("deleted successfully " + res.data);

      SetupdateUI((prev_state) => !prev_state);
    });
  };

  const update_todo = ()=>{
    Setpopupcontent({todo , id});
    Setshowpopup(true);
  }

  return (
    <div>
      <div
        className="flex flex-col gap-2 mt-2 max-w-sm p-3 bg-white border
       border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <div className="flex justify-between">

          {todo}<div className="flex gap-1 justify-center items-center"> <GrUpdate onClick={update_todo}/> <MdDelete className="text-xl" onClick={delete_todo}/>  </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

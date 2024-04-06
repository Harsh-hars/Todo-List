import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Popup from "./components/popup";
import axios from "axios";

const App = () => {
  const [todo, Settodo] = useState([]);

  const [updateUI, SetupdateUI] = useState(false);

  const [input, Setinput] = useState("");

  const [showpopup, Setshowpopup] = useState(false);

  const [popupcontent, Setpopupcontent] = useState({});

  const save_todo = () => {
    axios
      .post("http://localhost:5000/api/save", { todo: input })
      .then((e) => console.log(e.data + " posted"))
      .catch((e) => console.log(e));
   
    SetupdateUI((prev_state) => !prev_state);
    Setinput("");
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get")
      .then((result) => {
        Settodo(result.data);
        console.log(result.data);
        console.log("result setted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateUI]);

  return (
    <main className="h-[100vh] w-[100vw] overflow-hidden">
      <div className="  p-2 flex flex-col gap-3 justify-center items-center ">
        <div className="p-5  bg-violet-600 flex flex-col  justify-center">
          <h2 className="text-center text-3xl font-semibold text-white">
            TO-DO-APP
          </h2>

          <div className="flex mt-3 justify-center items-center gap-3 ">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
 focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700
dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
dark:focus:border-blue-500"
              name="todo"
              placeholder="Add-toDo"
              onChange={(e) => Setinput(e.target.value)}
              value={input}
            />

            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600
to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300
dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
              onClick={save_todo}
            >
              Add
            </button>
          </div>

          {todo.map((e) => {
            return (
              <Cards
                key={e._id}
                todo={e.todo}
                id={e._id}
                SetupdateUI={SetupdateUI}
                Setshowpopup={Setshowpopup}
                Setpopupcontent={Setpopupcontent}
              />
            );
          })}
        </div>

        <div>
          {showpopup && (
            <Popup
              Setshowpopup={Setshowpopup}
              popupcontent={popupcontent}
              SetupdateUI={SetupdateUI}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default App;

// <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>

// <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>

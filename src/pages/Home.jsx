import { useContext } from "react";
import { RxPlus } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import AllTodos from "../components/AllTodos";
import Greeting from "../components/ui/Greeting";
import { DataContext } from "../context/DataContext";



export default function Home() {
  const navigate = useNavigate();


  const {data, setData} = useContext(DataContext);
  console.log("data", data)
  return (
    <div className=" w-full relative min-h-screen pb-60 bg-gradient-to-r from-purple-700 to-purple-500">
      <div className="max-w-[1300px] px-4">
        <div>
          {/* Nav bar */}
          <Greeting />

          {/* display all todos */}
          <AllTodos />

          <div
            onClick={() => navigate("/addTodo")}
            className=" fixed bottom-8 w-44 h-16 max-sm:w-44 max-sm:h-14 cursor-pointer bg-purple-900 hover:bg-white text-white hover:text-purple-900 font-bold grid place-items-center  left-[50%] -translate-x-[50%]"
          >
            {/* <RxPlus className=" text-4xl max-sm:text-3xl plusIcon" /> */}
            <div className="flex items-center space-x-2">
              <RxPlus /> 
              <button>Create Todo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

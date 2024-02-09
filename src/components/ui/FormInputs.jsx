import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { DataContext } from "../../context/DataContext";

export default function FormInputs() {
  const navigate = useNavigate();
  const { data, setData } = useContext(DataContext);

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  const handleName = (e) => {
    let title = e.target.value;
    setTaskName(e.target.value);

    if (title.length > 35 ) {
      toast.error("Name should be less than or equal to 30 characters");
    } 
  };
  const handleDescription = (e) => {
    let description = e.target.value;
    setTaskDescription(e.target.value);

    if (description.length > 250) {
      toast.error("Description should be less than or equal to 200 characters");
    } 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new Date object
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    // Get the hours (in 24-hour format)
    let hours = now.getHours();
    // Determine whether it's AM or PM
    const amOrPm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = (hours % 12 || 12).toString().padStart(2, "0");

    // Get the minutes
    const minutes = now.getMinutes().toString().padStart(2, "0");

    const id = uuidv4();
    const title = taskName;
    const description = taskDescription;
    const currentTime = `${date}/${month}/${year} ,${hours}:${minutes} ${amOrPm}`;
    const check = false;

    if (taskName === "") {
      return toast.warn("please enter your task name");
    } else {
      const newTask = {
        id: id,
        title: title,
        description: description,
        currentTime: currentTime,
        check: check,
      };

      localStorage.setItem("todoItems", JSON.stringify([...data, newTask]));
      setData([...data, newTask]);
      toast.success("Task added successfully");
      setTaskName("");
      setTaskDescription("");
      navigate("/");
    }
  };
  return (
    <div className=" py-10">
      <form onSubmit={handleSubmit} className="max-w-[600px] m-auto">
        <div>
          <label
            className={"text-sm max-sm:text-xs text-purple-200"}
            htmlFor="taskName"
          >
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            placeholder="Enter task name"
            value={taskName}
            onChange={handleName}
            onKeyDown={handleKeyDown}
            className="w-full h-14 max-sm:h-12 
              border-none
             rounded-xl p-4 text-base max-sm:placeholder:text-sm mt-1 outline-none"
          />
          {/* <p className="text-red-500 text-base max-sm:text-xs mt-1">
            {toast.error("Please enter your task")}
          </p> */}
        </div>
        <div className=" mt-7 max-sm:mt-4">
          <label
            className="text-sm max-sm:text-xs  text-purple-200"
            htmlFor="taskDescription"
          >
            Task Description
          </label>
          <textarea
            id="taskDescription"
            placeholder="Enter task description"
            value={taskDescription}
            onChange={handleDescription}
            className="resize-none border-none
              w-full rounded-xl p-4 max-sm:p-3 mt-1 text-base max-sm:placeholder:text-sm h-48 max-sm:h-36 outline-none"
          ></textarea>
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            className="hover:bg-purple-800 text-white 
             transition text-xl font-bold bg-purple-400 p-4 max-sm:p-3 max-sm:text-lg rounded-xl w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

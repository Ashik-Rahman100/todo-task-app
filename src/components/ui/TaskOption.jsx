/* eslint-disable react/prop-types */

import { useContext } from "react";
import { BiTask } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { DataContext } from "../../context/DataContext";

export default function TaskOption({
  data,
  setData,
  todo,
  setOpenOptions,
  index,
}) {
  const { setIndex, setEdit } = useContext(DataContext);

  const handleDelete = (isData) => {
    const deleteData = data.filter((val) => val.id !== isData.id);
    setData(deleteData);
    localStorage.setItem("todoItems", JSON.stringify(deleteData));
    toast.error(isData.title, "Deleted");
    setOpenOptions(false);
  };

  const handleCheck = (id) => {
    const doneData = data.map((todo) =>
      todo.id === id ? { ...todo, check: !todo.check } : todo
    );
    setData(doneData);
    setOpenOptions(false);
    localStorage.setItem("todoItems", JSON.stringify(doneData));
  };
  return (
    <div className="absolute z-10 w-[215px] shadow bg-white top-8 left-0 max-xl:-left-48 p-3 rounded-2xl">
      <ul className=" flex flex-col text-black">
        <li
          onClick={() => handleCheck(todo.id)}
          className="max-sm:text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-100 py-3 max-sm:py-2 px-2 rounded-md"
        >
          <FaCheck className=" text-2xl max-sm:text-xl text-slate-700" />
          {todo.check ? "Not Complete" : "Complete"}
        </li>
        <li
          onClick={() => {
            setIndex(index);
            setEdit({
              id: todo.id,
              title: todo.title,
              description: todo.description,
              check: todo.check,
              currentTime: todo.currentTime,
              catagory: todo.catagory,
            });
          }}
        >
          <Link
            to={"/edit"}
            className=" max-sm:text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-100 py-3  px-2 rounded-md"
          >
            <RiEdit2Fill className=" text-2xl max-sm:text-xl text-slate-700" />
            Edit
          </Link>
        </li>
        <li
          onClick={() => handleDelete(todo)}
          className="max-sm:text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
        >
          <MdDelete className=" text-2xl max-sm:text-xl text-slate-700" />
          Delete
        </li>
        <li>
          <Link
            to={`/todo/${todo.id}`}
            className=" max-sm:text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
          >
            <BiTask className=" text-2xl max-sm:text-xl text-slate-700" />
            Task details
          </Link>
        </li>
      </ul>
    </div>
  );
}

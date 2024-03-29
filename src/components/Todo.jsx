/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import TaskOption from "./ui/TaskOption";


export default function Todo({
  index,
  todo,
  data,
  setData,
}) {
  const [openOptions, setOpenOptions] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenOptions(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="flex justify-between gap-4 max-w-full items-center text-white bg-purple-800 rounded-2xl px-6 py-5 max-sm:py-4 max-sm:px-4">
      {todo?.check && (
        <div className=" bg-purple-500 p-4 max-sm:p-2 rounded-xl">
          <FaCheck className=" text-4xl" />
        </div>
      )}

      <div className="black w-full">
        <div
          className={`flex justify-between gap-10 items-center ${
            todo?.description ? "mb-3 max-sm:mb-1" : "mb-0"
          }`}
        >
          <h2
            className={`${
              todo?.check ? "line-through" : null
            } font-bold text-lg displayInput max-sm:text-sm`}
          >
            {todo?.title}
          </h2>
          <p
            className={`${
              todo?.check ? "line-through" : null
            } min-w-[110px] max-sm:text-xs font-light text-gray-200`}
          >
            {todo?.currentTime}
          </p>
        </div>
        <p
          className={`${
            todo.check ? "line-through" : null
          } text-base max-sm:text-sm ${!todo?.description && "hidden"}`}
        >
          {todo?.description}
        </p>
      </div>

      <div ref={menuRef} className=" relative">
        <SlOptionsVertical
          onClick={() => setOpenOptions(!openOptions)}
          className=" text-lg cursor-pointer"
        />

        <div
          className={`${openOptions ? "animationActive" : "animationUnactive"}`}
        >
           {openOptions && (
            <TaskOption
              index={index}
              todo={todo}
              data={data}
              setData={setData}
              setOpenOptions={setOpenOptions}
            />
          )}
        </div>
      </div>
    </div>
  );
}

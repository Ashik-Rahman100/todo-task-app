/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Todo from "./Todo";

export default function AllTodos({ data, setData }) {
  // console.log("data", data.length);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const completedTask = () => {
    const completed = data.filter((val) => val.check);

    if (data.length) {
      const completePercentage = (completed.length / data.length) * 100;
      return completePercentage.toFixed();
    } else {
      return 0;
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filterResults = data.filter(
      (val) =>
        val.title.toLowerCase().includes(search.toLowerCase()) ||
        val.description.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filterResults);
  }, [data, search]);

  const handleTasksStatus = () => {
    const parsePercentage = parseFloat(completedTask());

    if (parsePercentage === 0) {
      return "No tasks completed";
    } else if (parsePercentage === 100) {
      return "All tasks completed";
    } else if (parsePercentage >= 50) {
      return "More than half tasks completed";
    } else {
      return "Less than half tasks completed";
    }
  };

  return (
    <div>
      {/* if have any store data in localstorage then display this section otherwise
      did not see any todo task */}
      {data?.length ? (
        <div>
          {/* Progress Bar and total data */}
          <div className="max-md:container border text-white max-w-[700px] mt-10 max-sm:mt-2 m-auto rounded-3xl bg-gradient-to-r from-purple-500 to-purple-700 p-10 max-sm:p-5">
            <h1 className=" text-2xl max-sm:text-base font-medium">
              Overall Progress
            </h1>
            <h3 className=" max-sm:text-xs">{`${data.length} ${
              data.length > 1 ? "Tasks" : "Task"
            }`}</h3>

            <div className="flex flex-col w-[60%] max-sm:w-[100%] mt-7 max-sm:mt-5">
              <div className="flex justify-between items-center">
                <p className=" max-sm:text-xs">
                  Progress
                  <span
                    className={` text-sm max-sm:text-xs ${
                      handleTasksStatus() === "No tasks completed"
                        ? "text-red-700"
                        : handleTasksStatus() ===
                          "Less than half tasks completed"
                        ? "text-red-700"
                        : "text-green-500"
                    } font-semibold`}
                  >
                    {" "}
                    ({handleTasksStatus()})
                  </span>
                </p>
                <p className="text-sm">{completedTask()}%</p>
              </div>

              <div className="  bg-purple-800 w-full h-2 mt-2 rounded-3xl">
                <div
                  className="h-full rounded-3xl transition-all bg-purple-100"
                  style={{ width: `${completedTask()}%` }}
                ></div>
              </div>
            </div>
          </div>
          {/* Filter search input */}
          <div className="max-md:container max-w-[700px] m-auto mt-7 max-sm:mt-5 mb-7 max-sm:mb-5 relative">
            <input
              type="text"
              name="search"
              value={search}
              onChange={handleSearch}
              placeholder="Search for task..."
              className="w-full h-14 max-sm:h-12 rounded-xl pl-11 placeholder:text-sm outline-none"
            />
            <IoMdSearch className="absolute top-[50%] left-3 -translate-y-[50%] text-purple-600 text-2xl max-sm:text-xl" />
          </div>

          {/* Display todo card */}
          <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:gap-3 pb-5">
              {searchResults?.map((todo, index) => (
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  data={data}
                  setData={setData}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1 className=" w-full text-center text-2xl max-md:text-2xl max-sm:text-xl text-white font-bold absolute bottom-[50%] left-[50%] -translate-x-[50%]">
          You don&#39;t have any Task
        </h1>
      )}
    </div>
  );
}

/* eslint-disable react/prop-types */
import { IoMdSearch } from "react-icons/io";
import Todo from "./Todo";

export default function AllTodos({ data, setData }) {
  console.log("data", data.length);
  return (
    <div>
      {/* if have any store data in localstorage then display this section otherwise
      did not see any todo task */}
      {data?.length ? (
        <div>
          {/* Filter search input */}
          <div className="max-md:container max-w-[700px] m-auto mt-7 max-sm:mt-5 mb-7 max-sm:mb-5 relative">
            <input
              type="text"
              name="search"
              placeholder="Search for task..."
              className="w-full h-14 max-sm:h-12 rounded-xl pl-11 placeholder:text-sm outline-none"
            />
            <IoMdSearch className="absolute top-[50%] left-3 -translate-y-[50%] text-purple-600 text-2xl max-sm:text-xl" />
          </div>

          {/* Display todo card */}
          <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:gap-3 pb-5">
              {data?.map((todo, index) => (
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

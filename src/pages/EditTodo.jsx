import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TopNav from "../components/ui/TopNav";
import { DataContext } from "../context/DataContext";

export default function EditTodo() {
  const {
    data,
    setData,
    edit,
    setEdit,
    index,
  } = useContext(DataContext);
  const [descriptionCountError, setDescriptionCountError] = useState("");
  const [nameCountError, setNameCountError] = useState("");

  const navigate = useNavigate("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleEditTitle = (e) => {
    let title = e.target.value;
    setEdit({
      id: edit.id,
      title: title,
      description: edit.description,
      check: edit.check,
      currentTime: edit.currentTime,
    });

    if (title.length >= 35) {
      setNameCountError("Name should be less than or equal to 30 characters");
    } else {
      setNameCountError("");
    }
  };

  const handleEditDescription = (e) => {
    let description = e.target.value;
    setEdit({
      id: edit.id,
      title: edit.title,
      description: description,
      check: edit.check,
      currentTime: edit.currentTime,
      catagory: edit.catagory,
    });

    if (description.length >= 200) {
      setDescriptionCountError(
        "Description should be less than or equal to 200 characters"
      );
    } else {
      setDescriptionCountError("");
    }
  };

  const handleEditSubmit = (e, index) => {
    e.preventDefault();

    if (edit.title === "") {
      return toast.warn("please enter your task name");
    } else {
      const editIndex = [...data];
      editIndex[index] = edit;

      setData(editIndex);
      localStorage.setItem("todoItems", JSON.stringify(editIndex));
      toast.success("Edit successfully done.")
      setEdit("");
      navigate("/");
    }
  };

  const handleCancel = () => {
    setEdit("");
    navigate("/");
  };
  return (
    <div className="w-full relative min-h-screen bg-[#1a0a36]">
      <div className="max-w-[1300px] px-10 max-md:px-5 m-auto">
        <div>
          <TopNav title={"Edit Todo"} />
          <div className="mt-10">
            <form className="max-w-[600px] m-auto">
              <div>
                <label
                  className={`text-sm max-sm:text-xs ${
                    nameCountError ? "text-red-500" : "text-purple-200"
                  } text-purple-200`}
                  htmlFor="taskName"
                >
                  Edit Name
                </label>
                <input
                  type="text"
                  id="taskName"
                  value={edit.title}
                  onChange={handleEditTitle}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter task name"
                  className={`w-full h-14 max-sm:h-12 ${
                    nameCountError ? "border-red-500 border-2" : "border-none"
                  } rounded-xl p-4 text-base max-sm:placeholder:text-sm mt-1 outline-none`}
                />
                <p className="text-red-500 text-base max-sm:text-xs mt-1">
                  {nameCountError}
                </p>
              </div>
              <div className=" mt-7 max-sm:mt-4">
                <label
                  className={`text-sm max-sm:text-xs ${
                    descriptionCountError ? "text-red-500" : "text-purple-200"
                  } text-purple-200`}
                  htmlFor="taskDescription"
                >
                  Task Description
                </label>
                <textarea
                  id="taskDescription"
                  value={edit.description}
                  onChange={handleEditDescription}
                  placeholder="Enter task description"
                  className={`resize-none ${
                    descriptionCountError
                      ? "border-red-500 border-2"
                      : "border-none"
                  }  w-full rounded-xl p-4 max-sm:p-3 mt-1 text-base max-sm:placeholder:text-sm h-48 max-sm:h-36 outline-none`}
                ></textarea>
                <p className="text-red-500 text-base max-sm:text-xs mt-1">
                  {descriptionCountError}
                </p>
              </div>

              <div className="text-center flex gap-4 max-sm:flex-col mt-4">
                <button
                  onClick={handleCancel}
                  className="bg-purple-400 hover:bg-purple-800 transition text-xl font-bold text-white p-4 max-sm:p-3 max-sm:text-lg rounded-xl w-full"
                >
                  Cancel
                </button>

                <button
                  disabled={
                    nameCountError || descriptionCountError || !edit.id
                      ? true
                      : false
                  }
                  type="submit"
                  onClick={(e) => handleEditSubmit(e, index)}
                  className={`${
                    nameCountError || descriptionCountError || !edit.id
                      ? "bg-purple-700 cursor-not-allowed text-purple-400"
                      : "hover:bg-purple-800 text-white"
                  } transition text-xl font-bold bg-purple-400  p-4 max-sm:p-3 max-sm:text-lg rounded-xl w-full`}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import AllTodos from "../components/AllTodos";
import Greeting from "../components/ui/Greeting";

export default function Home() {
  return (
    <div className=" w-full relative min-h-screen pb-60 bg-gradient-to-r from-purple-700 to-purple-500">
      <div className="max-w-[1300px] px-4">
        <div>
          {/* Nav bar */}
          <Greeting />

          {/* display all todos */}
          <AllTodos />
        </div>
      </div>
    </div>
  );
}

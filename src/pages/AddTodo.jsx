
import FormInputs from "../components/ui/FormInputs";
import TopNav from "../components/ui/TopNav";


export default function AddTodo({data, setData}) {



  return (
    <div className=" w-full relative min-h-screen bg-purple-600">
      <div className=" max-w-[1300px] px-10 max-md:px-5 m-auto">
        <div>
          <TopNav title={"Add New Todo"}/>
          <FormInputs
            data={data}
            setData={setData}
          />
        </div>
      </div>
    </div>
  )
}

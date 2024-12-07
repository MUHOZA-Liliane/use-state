import Input from "../components/Input"
import Button from "../components/Button"


const Bookmark = () => {
  return (
<div className="w-full">
            <h1 className="text-6xl font-bold text-center  text-[#504e4e] my-4">Bookmark management system </h1>
            <form className="bg-red-500 w-[800px] mx-auto p-4 rounded-[16px]">
                <Input type={"text"} placeholder={"Website Name"} />
                <Input type={"URL"} placeholder={"Website Link"} />
                <Button buttonText= "Add"/>
</form>
        </div>
  )
}

export default Bookmark

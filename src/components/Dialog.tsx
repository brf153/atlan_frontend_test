import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GoPlus } from "react-icons/go"
import { Select } from "./ui/select"
import { useEffect, useRef, useState } from "react"
import { LLMDataProps } from "@/db/data"
import { useDispatch } from "react-redux"
import {
  selectAvailableLLMs,
  setAvailableLLMs,
  setCurrentLLM,
} from "@/features/llm/llmSlice"
import { useAppSelector } from "@/app/hooks"
import { WaveBase64 } from "@/enum/enums"
import { useUser } from "@clerk/clerk-react"

// const UploadWidget = () =>{
//     const cloudinaryRef = useRef();
//     const widgetRef = useRef();
//         useEffect(()=>{
//             cloudinaryRef.current = window.cloudinary
//             widgetRef.current = cloudinaryRef.current.createUploadWidget({
//                 cloudName: 'dofq9gh9l',
//                 uploadPreset: 'qdmol9rf'
//             },function(error,result){
//                 console.log(result);
//             });
//         },[])
//         return(
//             <div>
//                 <button onClick={()=>widgetRef.current.open()}>Upload Image</button>
//             </div>
//         )
//     }

export function DialogDemo() {
  const [selectedValue, setSelectedValue] = useState("") // Initialize the state for selected value
  const [file, setFile] = useState(null) // Initialize the state for selected value

  // const handleChangeInput = (event:any) => {
  //   setSelectedValue(event.target.value); // Update the selected value when an option is selected
  // };

  const dispatch = useDispatch()

  const availableLLMs = useAppSelector(selectAvailableLLMs)

  const { isSignedIn, user, isLoaded } = useUser()

  const handleFile = (e: any) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0])
  }

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    prompt: "",
    type: "Creative" as LLMDataProps["type"],
    image: "", // Use null to represent no file selected initially
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    // console.log("e", e.target, e.target.value, e.target.name)
    setFormData(prevState => ({
      ...prevState,
      [name]: value, // Handle file input separately
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("submitted", file)
    const data = new FormData()
    console.log(file)
    if (file) {
      data.append("file", file)
    }
    data.append("upload_preset", "qdmol9rf")
    data.append("cloud_name", "dofq9gh9l")
    fetch("https://api.cloudinary.com/v1_1/dofq9gh9l/image/upload", {
      method: "post",
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setFormData(prevState => ({
          ...prevState,
          image: data.url,
        }))

        const selectedLLM: LLMDataProps = {
          id: availableLLMs.length + 1,
          name: formData.name,
          description: formData.description,
          prompt: formData.prompt,
          type: formData.type,
          image: data.url,
          creator: user?.firstName ?? "",
          creatorPic: user?.imageUrl ?? "",
          message:
            formData.type === "Creative"
              ? [{ id: 1, content: WaveBase64, sender: "bot" }]
              : [
                  {
                    id: 1,
                    content: "Hello, how can I help you?",
                    sender: "bot",
                  },
                ],
          views: 0,
          likes: 0,
        }

        const llmsArray = availableLLMs.concat(selectedLLM)
        dispatch(setAvailableLLMs(llmsArray))
      })
      .catch(err => {
        console.log(err)
      })
    console.log("formdata", formData)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <GoPlus className="text-[10vmin]" />
          <p className="text-center">Add AI</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark-bg text-white">
        <DialogHeader>
          <DialogTitle>Custom LLM</DialogTitle>
          <DialogDescription className="text-gray-200">
            Add your LLM details here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                name="name"
                id="name"
                onChange={handleChange}
                placeholder="Enter LLM Name"
                className="col-span-3 dark-bg border border-gray-400 placeholder:text-gray-400"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                name="description"
                id="description"
                onChange={handleChange}
                placeholder="Enter Description"
                className="col-span-3 dark-bg border border-gray-400 placeholder:text-gray-400"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="prompt" className="text-right">
                Prompt
              </Label>
              <Input
                name="prompt"
                id="prompt"
                onChange={handleChange}
                placeholder="Enter Prompt"
                className="col-span-3 dark-bg border border-gray-400 placeholder:text-gray-400"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              {/* <Input id="type" value="Hello there" className="col-span-3" /> */}
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="p-[10px] dark-bg border-gray-400 placeholder:text-gray-400 w-fit border rounded-md"
              >
                <option value="Creative">Creative</option>
                <option value="Programming">Programming</option>
                <option value="Academic">Academic</option>
              </select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              {/* <Input id="image" value="Hello there" type="file" className="col-span-3" /> */}
              <input
                name="image"
                type="file"
                className="col-span-3"
                onChange={e => handleFile(e)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-white text-black"
              onClick={e => handleSubmit(e)}
            >
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

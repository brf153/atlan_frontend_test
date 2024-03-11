import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LLMProps } from "@/enum/enums"

export function SelectDemo({ model, selectModel}:{model:string, selectModel:React.Dispatch<React.SetStateAction<LLMProps>>}) {
  return (
    <Select onValueChange={(value: LLMProps) => selectModel(value)} value={model}>
        <SelectTrigger className="w-[140px] dark-gray-bg text-white">
            <SelectValue placeholder="ChatGPT" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectItem value="ChatGPT">ChatGPT</SelectItem>
                <SelectItem value="Llama">Llama 2</SelectItem>
                <SelectItem value="Cohere">Cohere</SelectItem>
                <SelectItem value="Replit">Replit</SelectItem>
                <SelectItem value="Goose">Goose</SelectItem>
                <SelectItem value="EleutharAI">EleutharAI</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
  )
}

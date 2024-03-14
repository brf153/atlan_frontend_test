import Replicate from "replicate"
import OpenAI from "openai"
import axios from "axios"
import { LLMProps } from "@/enum/enums"
import LlamaAI from "llamaai"


const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
})

const replicate = new Replicate({
  auth: import.meta.env.VITE_REPLICATE_API_KEY,
})

const llamaAPI = new LlamaAI(
  import.meta.env.VITE_LLAMA_API_KEY,
)

type Response = {
  prompt: string
  temperature: number
  system_prompt: string
  type: LLMProps
}

export async function getResponse(props: Response): Promise<string | Error> {
  try {
    switch (props.type) {
      case "ChatGPT":
        const resultChatGPT = await openai.chat.completions.create({
          messages: [{ role: "user", content: props.prompt }],
          model: "gpt-3.5-turbo",
          max_tokens: 150,
          temperature: props.temperature,
        })
        return (
          resultChatGPT.choices[0]?.message?.content ||
          new Error("Error in getResponse from ChatGPT")
        )
      case "Replit":
        const resultReplit = await replicate.run(
          "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
          {
            input: {
              debug: false,
              top_k: 50,
              top_p: 1,
              prompt: props.prompt,
              temperature: props.temperature,
              system_prompt: props.system_prompt,
              max_new_tokens: 500,
              min_new_tokens: -1,
            },
          },
        )
        return (
          JSON.stringify(resultReplit) ||
          new Error("Error in getResponse from Replit")
        )
      case "Goose":
        const response = await axios.post(
          "https://api.goose.ai/v1/engines/gpt-j-6b/completions",
          {
            prompt: props.prompt,
            temperature: props.temperature,
            max_tokens: 150,
          },
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GOOSE_API_KEY}`,

            },
          },
        )
        const answer = response.data.choices[0].text
        return answer

      case "EleutharAI":
        const responseEleuthar = await axios.post(
          "https://api.goose.ai/v1/engines/gpt-neo-2-7b/completions",
          {
            prompt: props.prompt,
            temperature: props.temperature,
            max_tokens: 150,
          },
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GOOSE_API_KEY}`,
            },
          },
        )
        return responseEleuthar.data.choices[0].text
      case "Llama":
        const apiRequestJson = {
          messages: [
            {
              role: "system",
              content: props.system_prompt, // Replace with your system prompt text
            },
            {
              role: "user",
              content: props.prompt, // Replace with your custom prompt text
            },
          ],
          functions: [
            {
              name: "generate_text",
              description: "Generate text based on prompts",
              parameters: {
                type: "object",
                properties: {
                  max_tokens: {
                    type: "number",
                    description: "Maximum number of tokens to generate",
                    default: 1024,
                  },
                  temperature: {
              
                    type: props.temperature,
                    description:
                      "Controls the randomness of the generation (0.0-1.0)",
                  },
                },
              },
              required: [],
            },
          ],
          stream: false,
          function_call: "generate_text",
        }
        const responseLlama = await llamaAPI.run(apiRequestJson)
        return responseLlama.choices[0].message.content
      case "Image":
        const responseImage = await axios.post(
          "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image",
          {
            text_prompts: [
              {
                "text": props.prompt,
                "weight": 1
              },
              {
                "text": "blurry, bad",
                "weight": -1
              }
            ],
          },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_STABILITY_API_KEY}`,
            },
          },
        )
        return responseImage.data.artifacts[0].base64
      default:
        throw new Error("Invalid response type")
    }
  } catch (error) {
    console.error(error)
    throw new Error("Error in getResponse")
  }
}

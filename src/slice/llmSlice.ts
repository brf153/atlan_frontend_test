import { createAppSlice } from '@/app/createAppSlice';
import { LLMData, LLMDataProps } from '@/db/data';

interface LLMState {
  currentLLM?: LLMDataProps; 
  availableLLMs: LLMDataProps[];
}

const initialState: LLMState = {
  currentLLM: undefined, 
  availableLLMs: [],
};

const llmSliceName = 'llms';

export const llmSlice = createAppSlice({
  name: llmSliceName,
  initialState,
  reducers: {
    setAvailableLLMs: (state, action: { payload: LLMDataProps[] }) => {
      state.availableLLMs = action.payload;
    },
    setCurrentLLM: (state, action: { payload: LLMDataProps }) => {
      state.currentLLM = action.payload;
    },
  },
});

export const { setAvailableLLMs, setCurrentLLM } = llmSlice.actions;

// Selectors
export const selectAvailableLLMs = (state: { llms: LLMState }) => state.llms.availableLLMs;

export const selectCurrentLLM = (state: { llms: LLMState }) => state.llms.currentLLM;

export const selectLLMsByCreator = (creator: string) => (state: { llms: LLMState }) => {
  console.log("checking error", state.llms)
  return state.llms.availableLLMs.filter(llm => llm.creator === creator);
};

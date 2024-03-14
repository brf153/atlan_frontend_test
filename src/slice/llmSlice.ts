import { createAppSlice } from '@/app/createAppSlice';
import { LLMDataProps } from '@/db/data';

interface LLMState {
  currentLLM?: LLMDataProps; 
  availableLLMs: LLMDataProps[];
  favouriteLLMs: LLMDataProps[];
}

const initialState: LLMState = {
  currentLLM: undefined, 
  availableLLMs: [],
  favouriteLLMs: [],
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
    setFavouriteLLMs: (state, action: { payload: LLMDataProps[] }) => {
      state.favouriteLLMs = action.payload;
    }
},
});

export const { setAvailableLLMs, setCurrentLLM, setFavouriteLLMs } = llmSlice.actions;

// Selectors
export const selectAvailableLLMs = (state: { llms: LLMState }) => state.llms.availableLLMs;

export const selectCurrentLLM = (state: { llms: LLMState }) => state.llms.currentLLM;

export const selectLLMsByCreator = (creator: string) => (state: { llms: LLMState }) => {
  return state.llms.availableLLMs.filter(llm => llm.creator === creator);
};

export const selectFavouriteLLMs = (state: { llms: LLMState }) => state.llms.favouriteLLMs;

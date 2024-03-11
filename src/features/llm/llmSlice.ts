import { createAppSlice } from '@/app/createAppSlice';
import { LLMData, LLMDataProps } from '@/db/data';

interface LLMState {
  currentLLM?: LLMDataProps; // Currently selected LLM
  availableLLMs: LLMDataProps[]; // Array of available LLMs
}

const initialState: LLMState = {
  currentLLM: undefined, // No LLM selected initially
  availableLLMs: LLMData, // All LLMs are available initially
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

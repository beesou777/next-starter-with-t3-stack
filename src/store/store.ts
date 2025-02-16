import { create } from 'zustand';
import { handleAxiosError } from '~/lib/custom-axios-error';

// Define types for the store
interface StoreState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

// Create the Zustand store with types
const useCounterStore = create<StoreState>((set) => ({
  count: 0,
  increase: () => {
    try {
      set((state) => ({ count: state.count + 1 }));
    } catch (error) {
      return handleAxiosError(error)
    }
  },
  decrease: () => {
    try {
      set((state) => ({ count: state.count - 1 }));
    } catch (error) {
      return handleAxiosError(error)
    }
  },
}));

export default useCounterStore;

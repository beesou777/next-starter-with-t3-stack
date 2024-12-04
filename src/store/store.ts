import { create } from 'zustand';

// Define types for the store
interface StoreState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

// Create the Zustand store with types
const useCounterStore = create<StoreState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));


export default useCounterStore;

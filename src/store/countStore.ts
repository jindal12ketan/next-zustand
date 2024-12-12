import { create } from "zustand";
import { persist } from "zustand/middleware";

type CountStore = {
  count: number;
  increament: () => void;
  increamentAsync: () => Promise<void>;
  decreament: () => void;
  label: string;
};

export const useCountStore = create<CountStore>((set) => ({
  count: 0,
  increament: () => set((state) => ({ count: state.count + 1 })),
  increamentAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },
  decreament: () => set((state) => ({ count: state.count - 1 })),
  label: "",
}));

export const usePersistCountStore = create(
  persist<CountStore>(
    (set) => ({
      count: 0,
      increament: () => set((state) => ({ count: state.count + 1 })),
      increamentAsync: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set((state) => ({ count: state.count + 1 }));
      },
      decreament: () => set((state) => ({ count: state.count - 1 })),
      label: "",
    }),
    {
      name: "countStore",
    }
  )
);

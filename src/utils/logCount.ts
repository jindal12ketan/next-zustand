import { useCountStore, usePersistCountStore } from "@/store/countStore";

export const logCount = () => {
  const count = usePersistCountStore.getState().count;
  console.log(count);
};

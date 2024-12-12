import { useCountStore, usePersistCountStore } from "@/store/countStore";
export const setLabel = (label: string) => {
  usePersistCountStore.setState({ label: label });
};

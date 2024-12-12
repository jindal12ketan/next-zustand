"use client";
import { useCountStore, usePersistCountStore } from "@/store/countStore";
import { useEffect } from "react";
import { logCount } from "@/utils/logCount";
import { setLabel } from "@/utils/setLabel";

const OldComponent: React.FC = () => {
  const count = usePersistCountStore((state) => state.count);
  const label = usePersistCountStore((state) => state.label);
  logCount();
  return <NewComponent count={count} label={label} />;
};

const NewComponent: React.FC<{
  count: number;
  label: string;
}> = ({ count, label }) => {
  const increament = usePersistCountStore((state) => state.increament);
  const decreament = usePersistCountStore((state) => state.decreament);
  useEffect(() => {
    count < 0 ? setLabel("Number is negative") : setLabel("");
  }, [count]);
  return (
    <div>
      <h1>OldComponent</h1>
      <button onClick={increament}>Increment</button>
      <button onClick={decreament}>Decrement</button>
      <h2>Current count: {count}</h2>
      <h2>Label: {label}</h2>
    </div>
  );
};
export default OldComponent;

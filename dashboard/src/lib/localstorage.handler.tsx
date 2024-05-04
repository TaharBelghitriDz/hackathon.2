import { StartPull, Step } from "../components/modals/create.pull";

export const saveToLocal = (data: Step | StartPull) => {
  const localPull = localStorage.getItem("pull");

  if (!localPull) return localStorage.setItem("pull", JSON.stringify(data));

  const pullObject = JSON.parse(localPull) as StartPull;

  localStorage.setItem(
    "pull",
    JSON.stringify(pullObject.steps.push(data as Step))
  );
};

export const GetLocal = () => {
  const local = localStorage.getItem("pull") || undefined;

  if (!local) return undefined;

  return JSON.parse(local);
};

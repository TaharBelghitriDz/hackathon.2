import { useEffect, useState } from "react";
import CreatePullInformation from "../dashboard/create.pull.tsx/create.pull.information";
import { GetLocal, saveToLocal } from "../../lib/localstorage.handler";
import PullStep from "../dashboard/create.pull.tsx/pull.step";

type StepType = "img" | "video" | "file" | "questions" | "text";

export type Step = {
  title: string;
  img: string;
  des: string;
  points: number;
  stepType: StepType;
};

export type StartPull = {
  title: string;
  img: string;
  des: string;
  steps: Step[];
};

export default () => {
  const NextStepGeneratot = () => {
    setCurrentComponent(() => <PullStep />);
  };

  const [CurrentComponent, setCurrentComponent] = useState(
    <CreatePullInformation onClick={NextStepGeneratot} />
  );

  useEffect(() => {
    localStorage.removeItem("pull");

    if (!GetLocal())
      setCurrentComponent(
        <CreatePullInformation onClick={NextStepGeneratot} />
      );
    else setCurrentComponent(<PullStep />);
    // setCurrentComponent(<PullStep />);
  }, []);

  return <div className="pt-10">{CurrentComponent}</div>;
};

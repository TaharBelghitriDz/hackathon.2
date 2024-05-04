import { ArrowUpRight } from "@geist-ui/icons";
import { Button } from "@nextui-org/react";

export default () => {
  return (
    <div className=" h-full w-full flex justify-center items-center ">
      <div className="flex flex-col space-y-5 justify-between items-center max-w-xl ">
        <span className="text-4xl play"> FTrian </span>
        <span className="text-zinc-500 text-center ">
          TaskTrain: Tasks, tutorials, teamwork. Assign tasks, build guides, and
          track progress. Staff gets clear instructions and can ask questions.
          Boost productivity - try TaskTrain today!
        </span>
        <Button
          radius="full"
          color="primary"
          className="px-10"
          variant="shadow"
          endContent={<ArrowUpRight className="h-5 w-5" />}
        >
          Register now
        </Button>
      </div>
    </div>
  );
};

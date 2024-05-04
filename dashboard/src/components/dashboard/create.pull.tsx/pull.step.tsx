import { ArrowRight, Bookmark } from "@geist-ui/icons";
import { Button, Input, Textarea, useDisclosure } from "@nextui-org/react";
import Modals from "../../modals";
import ImageModal from "./image.modal";
import { useInput } from "../../../lib/hooks";
import { saveToLocal } from "../../../lib/localstorage.handler";

export default () => {
  const coverLink = useInput("");
  const description = useInput("");
  const title = useInput("");

  return (
    <div className="flex flex-col justify-start space-y-1">
      <span className="text-3xl pb-2"> step 1 </span>
      <div />
      <div />

      <div className="flex  justify-between w-full space-x-1 ">
        <Button
          size="sm"
          radius="full"
          className=" w-full px-5"
          variant="flat"
          color="success"
          endContent={<Bookmark className="h-3 w-3" />}
        >
          save
        </Button>

        <Button
          size="sm"
          radius="full"
          className=" w-full px-10"
          variant="flat"
          color="warning"
        >
          show all
        </Button>
      </div>
      <Button
        size="sm"
        className="w-full"
        radius="full"
        color="danger"
        variant="flat"
        endContent={<ArrowRight className="h-5 w-5" />}
      >
        Next step
      </Button>
      <div />
      <div />

      <div className="flex space-x-1 w-full h-full">
        <div className=" w-1/2 flex flex-col space-y-1 h-full">
          <Input size="sm" radius="lg" labelPlacement="inside" label="Title" />
          <Input
            size="sm"
            radius="lg"
            labelPlacement="inside"
            label="cover link"
          />
          <Textarea
            size="sm"
            radius="lg"
            labelPlacement="inside"
            label="description"
          />
        </div>
        <StepSide />
      </div>
    </div>
  );
};

const StepSide = () => {
  const discluser = useDisclosure();

  return (
    <div className=" w-1/2 flex flex-col space-y-1">
      {/* <Modals {...discluser} children={<ImageModal />} /> */}
      <Button
        variant="flat"
        radius="full"
        size="sm"
        className="w-full"
        onClick={discluser.onOpen}
      >
        Image
      </Button>
      <Button variant="flat" radius="full" size="sm" className="w-full">
        Video
      </Button>
      <Button variant="flat" radius="full" size="sm" className="w-full">
        File
      </Button>
      <Button variant="flat" radius="full" size="sm" className="w-full">
        Question
      </Button>
    </div>
  );
};

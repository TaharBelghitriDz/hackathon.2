import { Button, useDisclosure } from "@nextui-org/react";
import Modals from "../../modals";
import ImageModal from "./image.modal";

export default () => {
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

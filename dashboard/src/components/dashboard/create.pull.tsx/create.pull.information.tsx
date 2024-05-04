import { Button, Divider, Input, Textarea } from "@nextui-org/react";

import { useInput } from "../../../lib/hooks";
import toast from "react-hot-toast";
import { AlertTriangle } from "@geist-ui/icons";
import { saveToLocal } from "../../../lib/localstorage.handler";
import { useState } from "react";
import AddPullElemnts from "./add.pull.elemnts";

export default (props: { onClick: (e?: any) => void }) => {
  const [imagesList, setImagesList] = useState<Record<number, string>>({
    0: "",
  });

  const addImageInput = () => {
    const listLength = Object.values(imagesList).length - 1;

    const valuesArray = Object.values(imagesList);

    if (
      !!valuesArray[listLength] &&
      valuesArray.filter((e) => !!!e).length == 0
    )
      return setImagesList((e) => ({ ...e, [listLength + 1]: "" }));
    else
      return toast.error("Fill the last input ", {
        duration: 1000,
        className: "rounded-full px-10 bg-danger-700 text-danger-200 ",
        icon: <AlertTriangle className="h-5 w-5" />,
      });
  };

  const title = useInput("");
  const img = useInput("");
  const desc = useInput("");

  const save = () => {
    if (!!!title.input.value || !!!img.input.value || !!!desc.input.value)
      return toast.error("Fill All inputs", {
        duration: 1000,
        className: "rounded-full px-10 bg-danger-700 text-danger-200 ",
        icon: <AlertTriangle className="h-5 w-5" />,
      });

    saveToLocal({
      title: title.input.value,
      des: desc.input.value,
      img: img.input.value,
      steps: [],
    });
    props.onClick();
  };

  return (
    <div className="flex flex-col space-y-1 pt-5">
      <Input
        size="sm"
        radius="lg"
        labelPlacement="inside"
        label="Title"
        {...title.input}
      />
      <Input
        size="sm"
        radius="lg"
        labelPlacement="inside"
        label="cover link"
        {...img.input}
      />
      <Textarea
        size="sm"
        radius="lg"
        labelPlacement="inside"
        label="description"
        {...desc.input}
      />
      <div />
      <Divider />
      <div />
      <AddPullElemnts />
      <div />
      <Divider />
      <div />
      <div className="flex space-x-2">
        <Button
          className="w-full"
          size="sm"
          radius="full"
          color="success"
          onClick={save}
        >
          done
        </Button>
        <Button
          className="w-full"
          size="sm"
          radius="full"
          color="primary"
          onClick={save}
        >
          preview
        </Button>
      </div>
    </div>
  );
};

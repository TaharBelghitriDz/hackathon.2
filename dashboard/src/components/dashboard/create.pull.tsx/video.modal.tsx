import { AlertTriangle, Plus } from "@geist-ui/icons";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default () => {
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

  return (
    <div className="flex flex-col space-y-2">
      <span className="text-3xl"> add images </span>
      <div />
      {Object.values(imagesList).length > 0 &&
        Object.values(imagesList).map((_, i) => (
          <Input
            className="w-full"
            key={i}
            placeholder="paste image url"
            value={Object.values(i)[0]}
            onChange={({ target: { value } }) =>
              setImagesList((e) => ({ ...e, [i]: value }))
            }
          />
        ))}
      <div />
      <Button
        size="sm"
        color="primary"
        variant="flat"
        radius="full"
        onClick={addImageInput}
        startContent={<Plus className="h-5 w-5" />}
      >
        add image
      </Button>
      <Button size="sm" color="success" radius="full" onClick={addImageInput}>
        done
      </Button>
    </div>
  );
};

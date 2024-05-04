import { AlertTriangle, Plus } from "@geist-ui/icons";
import { Button, Image, Input, Link, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";
import Modals from "../../modals";
import ImageModal from "./image.modal";
import VideoModal from "./video.modal";

type Content = {
  type: "img" | "video" | "file" | "question";
  content: string;
  id: string;
};

export default () => {
  const discluser = useDisclosure();
  const discluser2 = useDisclosure();
  const [content, setContent] = useState<Content[]>([]);
  const [Comp, setComp] = useState<JSX.Element>();

  const addElemnt = (Comp: JSX.Element) => {
    setComp(() => Comp);
    discluser2.onOpen();
  };

  const ImageComp = (
    <ImageModal
      onClick={(s: string) => {
        setContent((e) => [
          ...e,
          { type: "img", content: s, id: Date.now().toString() },
        ]);
        discluser.onClose();
        discluser2.onClose();
      }}
    />
  );

  const VideoComponent = (
    <ImageModal
      onClick={(s: string) => {
        setContent((e) => [
          ...e,
          { type: "video", content: s, id: Date.now().toString() },
        ]);
        discluser.onClose();
        discluser2.onClose();
      }}
    />
  );
  const FileComponent = (
    <ImageModal
      onClick={(s: string) => {
        setContent((e) => [
          ...e,
          { type: "file", content: s, id: Date.now().toString() },
        ]);
        discluser.onClose();
        discluser2.onClose();
      }}
    />
  );

  const CompoentFilter = (e: Content) => {
    console.log(e);

    if (e.type === "img")
      return (
        <Image
          className="w-screen h-auto rounded-3xl"
          src={e.content}
          alt={e.content}
        />
      );

    if (e.type === "video")
      return (
        <video
          className="w-screen h-auto rounded-3xl bg-zinc-900"
          src={e.content}
        />
      );

    if (e.type === "file") return <Button>{e.content}</Button>;

    return <></>;
  };

  return (
    <div className="w-full flex flex-col space-y-1">
      {content.map((e, i) => (
        <CompoentFilter key={i} {...e} />
      ))}
      <Modals
        {...discluser}
        children={
          <div className=" w-full flex flex-col space-y-1 pt-10">
            {Comp && <Modals {...discluser2} children={Comp} />}
            <Button
              variant="flat"
              radius="full"
              size="sm"
              className="w-full"
              onClick={() => addElemnt(ImageComp)}
            >
              Image
            </Button>
            <Button
              variant="flat"
              radius="full"
              size="sm"
              className="w-full"
              onClick={() => addElemnt(VideoComponent)}
            >
              Video
            </Button>
            <Button
              variant="flat"
              radius="full"
              size="sm"
              className="w-full"
              onClick={() => addElemnt(FileComponent)}
            >
              File
            </Button>
            <Button variant="flat" radius="full" size="sm" className="w-full">
              Question
            </Button>
          </div>
        }
      />

      <Button
        size="sm"
        color="primary"
        variant="flat"
        radius="full"
        onClick={() => discluser.onOpen()}
        startContent={<Plus className="h-5 w-5" />}
      >
        add pull elemnt
      </Button>
    </div>
  );
};

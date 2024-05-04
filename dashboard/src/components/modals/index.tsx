import { Modal, ModalContent } from "@nextui-org/react";

export default ({
  isOpen,
  onOpenChange,
  children,
  size,
}: {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  children: JSX.Element;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
}) => (
  <Modal
    isOpen={isOpen}
    onOpenChange={onOpenChange}
    backdrop="blur"
    size={size}
  >
    <ModalContent className="bg-zinc-900/70 backdrop-blur-xl rounded-3xl p-5 ">
      {children}
    </ModalContent>
  </Modal>
);

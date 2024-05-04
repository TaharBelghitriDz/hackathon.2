import { Award, User } from "@geist-ui/icons";
import { Button, useDisclosure } from "@nextui-org/react";
import Modals from "../modals";
import CreatePull from "../modals/create.pull";
import { Api } from "../../lib/swagger/Api";

export default () => {
  const discluser = useDisclosure();

  return (
    <div className=" grid grid-cols-3 w-full gap-1 ">
      <Modals size="2xl" {...discluser} children={<CreatePull />} />
      <Button
        className="px-10 col-span-2 "
        radius="full"
        size="sm"
        variant="flat"
        color="danger"
        endContent={<Award className="h-5 w-4" />}
        onClick={discluser.onOpen}
      >
        create pull
      </Button>
      <Button
        className="px-10"
        radius="full"
        size="sm"
        variant="flat"
        color="success"
        endContent={<User className="h-5 w-4" />}
        onClick={() => {
          const api = new Api({
            baseUrl:
              "https://8009-2a03-d000-8602-9ca7-e4e6-702f-c5a3-15c.ngrok-free.app",
          });
          api.api
            .pollsList()
            .then((e) => {
              return e;
            })
            .then((e) => console.log(e.data))
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        create user
      </Button>
    </div>
  );
};
const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjQ3NjU4MjkzLWMxOWUtNGE1Yy04MTg1LWVhYjU4YTVmNTdlNiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InF3ZXJ0eTEyM0BtYWlsLnJ1IiwibmJmIjoxNzE0ODAxOTY2LCJleHAiOjE3MTQ4NTIzNjYsImlzcyI6Ik15QXV0aFNlcnZlciIsImF1ZCI6Ik15QXV0aENsaWVudCJ9.T8jyFJ6-QLcPu5WdHJxalz36-p5WZDEbj6FDIspMF2A`;

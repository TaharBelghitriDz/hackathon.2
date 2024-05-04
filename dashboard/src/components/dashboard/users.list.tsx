import { Avatar, Button } from "@nextui-org/react";
import { Api } from "../../lib/swagger/Api";

export default () => {
  const client = new Api({ baseUrl: "http://192.168.9.213:3000" });

  client.api.usersList({}).then((data) => console.log(data));

  const array = Array.from(Array(36).keys());
  return (
    <div className="flex flex-col items-start space-y-5 ">
      <span className="font-bold text-3xl"> Users </span>
      <div className="grid grid-cols-12  gap-1 w-full rounded-2xl  ">
        {array.map((i) => (
          <Avatar
            key={i}
            className=" py-2 px-4  rounded-full shadow-lg bg-zinc-800 text-center"
          >
            tutorial {i}
          </Avatar>
        ))}
      </div>
      <Button
        variant="flat"
        radius="full"
        className="w-full"
        size="sm"
        color="secondary"
      >
        check all
      </Button>
    </div>
  );
};

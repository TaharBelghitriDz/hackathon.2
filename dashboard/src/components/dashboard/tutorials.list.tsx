import { ArrowUpRight, Filter, Search, Settings } from "@geist-ui/icons";
import { Button, Image, Input, Pagination, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Api } from "../../lib/swagger/Api";

const TutorialCard = () => (
  <div className="flex flex-col space-y-5 bg-zinc-900 p-5 rounded-3xl ">
    <div className="flex justify-between items-center ">
      <span className="text-3xl">title is here</span>
      <div className="flex space-x-1">
        <Button
          isIconOnly
          radius="full"
          color="primary"
          variant="flat"
          className="p-2"
          endContent={<ArrowUpRight className="h-5 w-5  rounded-full " />}
        />
        <Button
          isIconOnly
          radius="full"
          color="secondary"
          variant="flat"
          className="p-2"
          endContent={<Settings className="h-5 w-5  rounded-full " />}
        />
      </div>
    </div>
    <div className="w-full h-52 bg-zinc-700 rounded-3xl" />
    <span className="text-sm text-zinc-500 ">
      TaskTrain: Tasks, tutorials, teamwork. Assign tasks, build guides, and
      track progress. Staff gets clear instructions and can ask questions. Boost
      productivity - try TaskTrain today!
    </span>
  </div>
);

type Poll = {
  imgUri: string;
  name: string;
  description: string;
};

export default () => {
  const [polls, setPOlls] = useState<Poll[]>([]);

  useEffect(() => {
    const client = new Api({ baseUrl: "http://192.168.9.213" });

    client.api
      .pollsList({})
      .then((data) => {
        const dataArray = Object.values(data)[0];
        setPOlls(dataArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const array = Array.from(Array(6).keys());
  return (
    <div className="flex flex-col justify-center items-start  space-y-5">
      <span className="font-bold text-3xl"> tutorials </span>
      <span className="text-sm text-zinc-500 ">
        FTRAIN: Tasks, tutorials, teamwork. Assign tasks, build guides, and
        track progress. Staff gets clear instructions and can ask questions.
        Boost productivity - try TaskTrain today!
      </span>
      <div className=" w-full flex space-x-1">
        <Button
          isIconOnly
          radius="full"
          color="warning"
          variant="flat"
          className="p-2"
          endContent={<Filter className="h-5 w-5  rounded-full " />}
        />
        <Input
          classNames={{ inputWrapper: "bg-zinc-900" }}
          radius="full"
          placeholder="find tutorial"
          endContent={<Search className="h-5 w-5" />}
        />
      </div>

      <div className="flex flex-col space-y-2">
        {polls.length == 0 ? (
          <Spinner size="lg" className="p-10" />
        ) : (
          polls.map((e, i) => (
            <div
              key={i}
              className="flex flex-col space-y-5 bg-zinc-900 p-5 rounded-3xl "
            >
              <div className="flex justify-between items-center ">
                <span className="text-3xl">{e.name}</span>
                <div className="flex space-x-1">
                  <Button
                    isIconOnly
                    radius="full"
                    color="primary"
                    variant="flat"
                    className="p-2"
                    endContent={
                      <ArrowUpRight className="h-5 w-5  rounded-full " />
                    }
                  />
                  <Button
                    isIconOnly
                    radius="full"
                    color="secondary"
                    variant="flat"
                    className="p-2"
                    endContent={<Settings className="h-5 w-5  rounded-full " />}
                  />
                </div>
              </div>
              <Image
                src={e.imgUri}
                width="100%"
                className=" object-cover w-full h-auto bg-zinc-700 rounded-3xl"
              />
              <span className="text-sm text-zinc-500 ">{e.description}</span>
            </div>
          ))
        )}
      </div>
      <div className=" overflow-visible w-full flex justify-center items-center">
        <Pagination
          className="p-0"
          radius="full"
          showControls
          total={20}
          initialPage={1}
        />
      </div>
    </div>
  );
};

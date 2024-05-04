import { ArrowUpRight, Eye, EyeOff } from "@geist-ui/icons";
import { Button, Divider, Input, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import { useInput } from "../../lib/hooks";

export default () => (
  <Tabs
    aria-label="Tabs Example"
    className="mt-5 !w-full flex justify-center items-center"
    radius="full"
  >
    <Tab key="login" title="Login" className="flex justify-center items-center">
      <Login />
    </Tab>
    <Tab key="signup" title="Signup">
      <Signup />
    </Tab>
  </Tabs>
);

const Login = () => {
  const email = useInput("");
  const password = useInput("");
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <span className="text-zinc-500 text-center text-sm">
        TaskTrain: Tasks, tutorials, teamwork. Assign tasks, build guides, and
        track progress.
      </span>
      <Divider className="bg-zinc-500/0 w-1/2 " />
      <Input radius="full" type="text" placeholder="email" {...email} />
      <Input
        radius="full"
        type={visible ? "text" : "password"}
        placeholder="password"
        className="h-10 cursor-pointer "
        {...password}
        endContent={
          !visible ? (
            <Eye className="h-5 w-5" onClick={() => setVisible((e) => !e)} />
          ) : (
            <EyeOff className="h-5 w-5" onClick={() => setVisible((e) => !e)} />
          )
        }
      />
      <Button
        radius="full"
        className="w-full"
        color="primary"
        endContent={<ArrowUpRight className="h-5 w-5" />}
      >
        Login
      </Button>
    </div>
  );
};

const Signup = () => {
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <span className="text-zinc-500 text-center text-sm">
        TaskTrain: Tasks, tutorials, teamwork. Assign tasks, build guides, and
        track progress.
      </span>
      <Divider className="bg-zinc-500/0 w-1/2 " />
      <Input radius="full" type="text" placeholder="email" {...email} />
      <Input
        radius="full"
        type={visible ? "text" : "password"}
        placeholder="password"
        className="h-10"
        {...password}
        endContent={
          !visible ? (
            <Eye className="h-5 w-5" onClick={() => setVisible((e) => !e)} />
          ) : (
            <EyeOff className="h-5 w-5" onClick={() => setVisible((e) => !e)} />
          )
        }
      />
      <Input
        radius="full"
        type={visible ? "text" : "password"}
        placeholder="confirm password"
        className="h-10"
        {...confirmPassword}
        endContent={
          !visible ? (
            <Eye className="h-5 w-5" onClick={() => setVisible((e) => !e)} />
          ) : (
            <EyeOff className="h-5 w-5" onClick={() => setVisible((e) => !e)} />
          )
        }
      />
      <Button
        radius="full"
        className="w-full"
        color="primary"
        endContent={<ArrowUpRight className="h-5 w-5" />}
      >
        Sign up
      </Button>
    </div>
  );
};

import ButtonGroup from "../components/dashboard/button.group";
import TutorialsList from "../components/dashboard/tutorials.list";
import UsersList from "../components/dashboard/users.list";

export default () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start ">
      <div className="w-full max-w-xl space-y-20 flex flex-col items-start justify-start py-36">
        <ButtonGroup />
        <div className="flex flex-col space-y-20">
          <UsersList />
          <TutorialsList />
        </div>
      </div>
    </div>
  );
};

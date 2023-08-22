import UserCard from "./components/UserCard";

function App() {
  return (
    <>
    <div className="flex items-center justify-center">
    <div className="grid grid-cols-2 gap-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>


    </>
  );
}

export default App;

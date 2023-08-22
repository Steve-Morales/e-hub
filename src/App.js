import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
          <UserCard
            name="Alice"
            profile_picture="https://placekitten.com/90/90"
            profile_img="https://placekitten.com/325/300"
          />
          <UserCard
            name="Bob"
            profile_picture="https://placekitten.com/100/100"
            profile_img="https://placekitten.com/320/310"
          />
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

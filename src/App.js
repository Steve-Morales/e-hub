

function App() {
  return (
    <>
    <div className="">

    
    {/* User Card */}
    <div className="flex flex-col items-center justify-center w-fit m-4 border-2 rounded-xl border-indigo-600">
      {/* User Image */}
      <div className="fixed -top-9 w-fit border-2 rounded-full border-indigo-600">
        <img className="rounded-full" src="https://placehold.co/90x90"/>
      </div>
      
      <div>
        <img src="https://placehold.co/325x300" className="rounded-xl"/>
      </div>
      <div>
        <h3 className="font-extrabold">Jhon Doe</h3>
      </div>

    </div>
    </div>
    </>
  );
}

export default App;

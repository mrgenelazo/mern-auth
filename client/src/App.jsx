import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

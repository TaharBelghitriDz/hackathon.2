import { useState } from "react";
import Pages from "./pages";
import Navbar from "./components/navbar";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="jos dark text-foreground bg-background h-screen flex flex-col items-center justify-start p-5">
      <Navbar />
      <Toaster />
      <Pages page="dashboard" />
    </main>
  );
}

export default App;

import Main from "../components2/Main";
import Navbar from "../components2/Navbar";
import Sidebar from "../components2/Sidebar";

function Directory() {
  return (
    <div className="bg-[#f7f7f8]  ">
      {/* Navbar */}
      <Navbar />
      <div className="flex ">
        {/* Sidebar */}
        <Sidebar />
        {/* Main */}
        <Main />
      </div>
    </div>
  );
}

export default Directory;
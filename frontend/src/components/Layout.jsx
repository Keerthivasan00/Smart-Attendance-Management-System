// // import React from "react";
// // import Navbar from "./Navbar";
// // import Sidebar from "./Sidebar";

// // const Layout = ({ children }) => {
// //   return (
// //     <div className="flex h-screen">
// //       <Sidebar />

// //       <div className="flex-1 flex flex-col">
// //         <Navbar />
// //         <main className="p-6">{children}</main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Layout;


// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// function Layout({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className="flex h-screen">

//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} />

//       {/* MAIN CONTENT AREA */}
//       <div
//   className={`flex-1 transition-all duration-300 ${
//     isSidebarOpen ? "ml-64" : "ml-0"
//   }`}
// >
//         <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//         {/* Actual Page Content */}
//         <div className="page-content">
//           {children}
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Layout;



import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col transition-all duration-300">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="page-content flex-1 overflow-auto p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

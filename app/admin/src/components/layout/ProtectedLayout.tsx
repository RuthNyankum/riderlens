import { Navigate, Outlet } from "react-router-dom";
// import { useAppSelector } from "../../store/hooks";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const ProtectedLayout = () => {
  // const { isAuthenticated } = useAppSelector((state) => state.auth);

  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProtectedLayout;

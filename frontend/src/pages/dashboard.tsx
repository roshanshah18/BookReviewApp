import { useNavigate } from "react-router-dom";
import { useMeQuery } from "../api/auth/query";
import { AppShell } from "../components/app-shell";
import { CreateBook } from "../components/book/create-book";
import { errorToast } from "../components/toaster";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { ListBooks } from "../components/book/list-book";

export function DashboardPage() {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useMeQuery();

  useEffect(() => {
    if (!data?.data || data.data.role !== "admin") {
      errorToast("Only Admin Can Access The DashBoard.");
      navigate("/", { replace: true });
    }
  }, [data, navigate]);

  if (isLoading) {
    return (
      <AppShell>
        <div className="space-y-6">
          <section>
            <h2 className="text-3xl font-semibold text-amber-600 mb-4">
              Loading...
            </h2>
            <p className="text-lg text-gray-700">Please wait...</p>
          </section>
        </div>
      </AppShell>
    );
  }

  if (isError || !data?.data) {
    return (
      <AppShell>  
        <div className="space-y-6">
          <section>
            <h2 className="text-3xl font-semibold text-red-600 mb-4">
              Error: {error?.message || "Something went wrong"}
            </h2>
            <p className="text-lg text-gray-700">
              Something went wrong. Please ensure that you are logged in.
            </p>
          </section>
        </div>
      </AppShell>
    );
  }

  const { username, role } = data.data;

  return (
    <>
      <AppShell>
        <div className="space-y-6">
          <section>
            <h2 className="text-3xl font-semibold text-black mb-4">
              Welcome {username}, To Your Dashboard. You are a {role}
            </h2>
            
            <CreateBook />
            <ListBooks/>
          </section>
        </div>
      </AppShell>
      <Toaster />
    </>
  );
}
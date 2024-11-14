import { useLogoutMutation } from "../../api/auth/query";
import { errorToast, successToast } from "../toaster";

export function Logout() {
  const logoutMutation = useLogoutMutation();

  const handleLogout = () => {
    try {
      logoutMutation.mutateAsync(
        {},
        {
          onSuccess: () => {
            window.location.href = "/login";
            successToast("Logout successful");
          },
          onError: (error) => {
            console.error(error);
            errorToast(error.message);
          },
        }
      );
    } catch (error) {
      console.error(error);
      errorToast("something went wrong");
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={logoutMutation.isPending}
      className=" rounded-md  px-3 py-2 text-sm font-semibold text-black shadow-sm"
    >
      Logout
    </button>
  );
}
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "../../app/hooks";
import { loginAsync } from "../../features/authentication/authThunks";
import { useNavigate } from "react-router-dom";

interface AuthProps {}

export const Auth: React.FC<AuthProps> = ({}) => {
  const navigator = useNavigate();
  const [user, setUser] = React.useState<any>([]) || null || undefined;
  const dispatch = useAppDispatch();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      try {
        setUser(codeResponse);
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  React.useEffect(() => {
    if (!Array.isArray(user)) {
      dispatch(loginAsync(user.access_token));
      navigator("/profile");
    }
  }, [user]);

  return (
    <div className="flex align-middle justify-center place-items-center h-screen">
      <div className="">
        <div className="flex align-middle justify-center place-items-center mb-4">
          <button
            className="w-48 border-4 rounded-full p-3 shadow-blue-500/40 shadow-lg"
            onClick={() => login()}
          >
            Google Auth React
          </button>
        </div>
        <div className="flex align-middle justify-center place-items-center">
          <button className="w-48 border-4 rounded-full p-3 shadow-blue-500/40 shadow-lg">
            GitHub Auth React
          </button>
        </div>
      </div>
    </div>
  );
};

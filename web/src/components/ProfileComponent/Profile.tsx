import { googleLogout } from "@react-oauth/google";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { authData } from "../../features/authentication/authSlice";
import { IAuth } from "../../features/authentication/IAuth";

export const Profile = () => {
  const data: IAuth = useAppSelector(authData);
  const navigator = useNavigate();
  const logOut = () => {
    googleLogout();
    localStorage.removeItem("data");
    navigator("/");
  };
  return (
    <div className="w-auto flex align-middle justify-center place-items-center h-screen">
      <div className="w-1/3 bg-ct-blue-600 shadow-lg border-4 border-r-4">
        <section className="">
          <div className="mx-auto bg-ct-dark-100 rounded-md h-[15rem] flex justify-center items-center">
            <div>
              <p className="text-5xl text-center font-semibold">Profile Page</p>
              {data.id === 0 ? (
                <p>Loading...</p>
              ) : (
                <div className="flex items-center gap-8">
                  <div>
                    <img
                      src={data.picture}
                      className="max-h-36"
                      alt={`profile photo`}
                    />
                  </div>
                  <div className="mt-8">
                    <p className="mb-3">ID: {data.id}</p>
                    <p className="mb-3">Name: {data.name}</p>
                    <p className="mb-3">Email: {data.email}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <div
          className="border-2 text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-sm rounded-2xl h-11 pt-2 m-2 cursor-pointer"
          onClick={() => logOut()}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

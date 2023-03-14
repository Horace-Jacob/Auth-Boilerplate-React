import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest } from "../../api/api";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (access_token: string) => {
    const res = await loginRequest(access_token);
    localStorage.setItem("data", JSON.stringify(res.data));
    return res.data;
  }
);

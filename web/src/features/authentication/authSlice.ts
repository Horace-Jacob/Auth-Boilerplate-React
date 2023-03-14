import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { IAuth } from "./IAuth";
import { loginAsync } from "./authThunks";

interface initialStateInterface {
  data: IAuth;
  status: "idle" | "loading" | "failed";
}

const initialState: initialStateInterface = {
  data: {
    id: 0,
    name: "",
    verified_email: false,
    email: "",
    given_name: "",
    family_name: "",
    picture: "",
    locale: "",
  } as IAuth,
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // signin: (state, action: PayloadAction<IAuth>) => {
    //   state.data = action.payload;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action: PayloadAction<IAuth>) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = authSlice.actions;

export const authData = (state: RootState) => state.authSlice.data;

export default authSlice.reducer;

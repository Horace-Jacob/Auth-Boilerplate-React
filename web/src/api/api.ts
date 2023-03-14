import axios from "axios";

export const loginRequest = async (access_token: string) => {
  const res = await axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: "application/json",
      },
    }
  );
  return res;
};

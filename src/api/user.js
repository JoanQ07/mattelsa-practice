import { _fetchApi } from "@/helper/fecth/_api";

const registerUser = ({ names, surnames, googleId, mail }) => {
  try {
    const res = _fetchApi({
      url: "user/register",
      method: "POST",
      data: {
        surnames,
        googleId,
        names,
        mail,
      },
    });

    return res;
  } catch (error) {
    throw error;
  }
};

const getUserGoogleId = async ({ googleId }) => {
  try {
    const res = await _fetchApi({
      url: "user/get-google-id",
      params: {
        googleId,
      },
    });
    if (res.success) return res.data;
    else throw res.message;
  } catch (error) {
    throw error;
  }
};

export const _fechUser = { registerUser, getUserGoogleId };

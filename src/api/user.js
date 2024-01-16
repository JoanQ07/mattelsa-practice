import { _fetchApi } from "@/helper/fecth/_api";

const registerUser = ({ names, surnames, googleId, mail }) => {
  try {
    const res = _fetchApi({
      url: "user/register",
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

export const _fechUser = { registerUser };

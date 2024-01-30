import { _fetchApi } from "@/helper/fecth/_api";

const filterByClass = async ({ classProduct }) => {
  try {
    const res = await _fetchApi({
      url: "product/filter-class",
      method: "GET",
      params: { classProduct },
    });
    if (res.success) return res.data;
    else throw res.message;
  } catch (error) {
    throw error;
  }
};

export const _fechProduct = { filterByClass };

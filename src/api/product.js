import { _fetchApi } from "@/helper/fecth/_api";

const filterByClass = async ({ classProduct = "none", categoryId = "none", orderBy = "none" }) => {
  try {
    const res = await _fetchApi({
      url: "product/filter-class",
      method: "GET",
      params: { classProduct, categoryId, orderBy },
    });
    if (res.success) return res.data;
    else throw res.message;
  } catch (error) {
    throw error;
  }
};

export const _fechProduct = { filterByClass };

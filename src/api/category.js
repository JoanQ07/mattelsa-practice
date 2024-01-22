import { _fetchApi } from "@/helper/fecth/_api";

const getAllCategories = async () => {
  try {
    const res = await _fetchApi({
      url: "category/all-categories",
      method: "GET",
    });
    if (res.success) return res.data;
    else throw res.message;
  } catch (error) {
    throw error;
  }
};

export const _fechCategory = { getAllCategories };

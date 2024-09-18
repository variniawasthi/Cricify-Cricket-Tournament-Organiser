import axiosInstance from "./axios";

export const fetchData = async () => {
  try {
    const response = await axiosInstance.get("/posts");
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

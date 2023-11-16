import axios from "axios";
export const useFetch = async (url) => {
  return axios.get(`api/${url}`).then((response) => response.data);
};
export const post = async (url, data) => {
  axios
    .post(`api/${url}`, data)
    .then((response) => {
      console.log(response.status);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleUpdate = (url, data) => {
  axios
    .put(`/api/post/${url}`, data)
    .then((response) => {
      console.log("Item updated:", response.data);
    })
    .catch((error) => {
      console.error("Error updating item:", error);
    });
};

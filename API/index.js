import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    "Accept-Version": "v1",
    Authorization: "Client-ID 3CCNuj_ndd7pGvHWfNW4qXkDK7jwG1CQ_WZePAfpffs",
  },
});

export async function apiGetImages(page) {
  try {
    const response = await api({
      url: "/photos",
      method: "get",
      params: {
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function apiGetImage(id) {
  try {
    const response = await api({
      url: "/photos/" + id,
      method: "get",
    });
    // console.log(response.data, "response.data");
    return response.data;
  } catch (error) {
    // console.log(error, "error");
    return error;
  }
}

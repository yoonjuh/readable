import axios from "axios";

const headers = {
  Accept: "application/json",
  authorization: "Edwin"
};

export async function addPost({ title, body, author, category }) {
  const timestamp = Date.now();
  const res = await axios.post(
    `/newpost`,
    { title, body, author, category, timestamp },
    { headers }
  );

  return res.data;
}

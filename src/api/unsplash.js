import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID dc4846cdeaf6444203f58a12988dc15a3dc669eb43e6ac2ff9892a166e3b9c37"
  }
});

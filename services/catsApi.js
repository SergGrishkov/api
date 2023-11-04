import axios from "axios";

export async function getCatsInfo() {
  return await axios.get("https://catfact.ninja/breeds");
}

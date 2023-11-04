import { getCatsInfo } from "../services/catsApi.js";

const cats = await getCatsInfo();
console.log(cats.data.data);

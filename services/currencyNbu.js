import axios from "axios";

export async function getCurrency() {
  return await axios.get(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json"
  );
}

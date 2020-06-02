import { LocalStorage } from "quasar";
export default {
  token: LocalStorage.getItem("wejapa-token") || "",
  user: LocalStorage.getItem("wejapa-token") || null
};

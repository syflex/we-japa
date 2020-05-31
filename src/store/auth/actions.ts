import axios from "axios";

export async function user({ commit }) {
  return await new Promise((resolve, reject) => {
    axios.get(process.env.Api + "/api/user")
      .then(response => {
        if (response.data.status == "success") {
          commit("user", { data: response.data.data });
          resolve(response);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

export async function logout({ commit }) {
  return await new Promise((resolve, reject) => {
    axios
      .get(process.env.Api + "/api/logout")
      .then(response => {
        if (response.data.status == "success") {
          commit("logout");
          resolve(response);
        }
      })
      .catch(err => {
        commit("logout");
        resolve(err);
      });
  });
}

export async function unread_notification({ commit }) {
  return await new Promise((resolve, reject) => {
    axios
      .get(process.env.Api + "/api/notification")
      .then(response => {
        if (response.data.status == "success") {
          commit("unread_notification", { data: response.data.data });
          resolve(response);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

import { signin, signup } from "./api";

class Auth {
  constructor() {
    this.token = localStorage.getItem("token");
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  async login(data, register = false) {
    const {
      full_name,
      username,
      email,
      password,
      pincode,
      state,
      city,
      address1,
      address2,
      landmark,
      role,
      remember,
    } = data;
    let res;
    if (register)
      res = await signup(
        full_name,
        username,
        email,
        password,
        pincode,
        state,
        city,
        address1,
        address2,
        landmark,
        role
      );
    else res = await signin(username, password);
    if (res && res.data && res.data.access_token && res.data.user) {
      this.token = res.data.access_token;
      this.user = res.data.user;

      if (remember || signup) {
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      return true;
    }

    return false;
  }

  logout() {
    localStorage.setItem("token", null);
    localStorage.setItem("user", null);
    window.location.href = "/";
  }

  isAuthenticated() {
    return !!this.token && !!this.user;
  }
}

export default new Auth();

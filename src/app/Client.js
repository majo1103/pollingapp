class Client {
  constructor() {
    this.useSessionStorage = typeof sessionStorage !== "undefined";

    if (this.useSessionStorage) {
      this.user = sessionStorage.getItem("USER");

      if (this.user) {
        this.isUserValid().then(bool => {
          if (!bool) {
            this.user = null;
          }
        });
      }
    }
  }

  isLoggedIn() {
    return !!this.user;
  }

  setUser(user) {
    this.user = user;

    if (this.useSessionStorage) {
      sessionStorage.setItem("USER", user);
    }
  }

  removeUser() {
    this.user = null;

    if (this.useSessionStorage) {
      sessionStorage.removeItem("USER");
    }
  }

  isUserValid() {
    if (this.user === "admin") {
      return true;
    }
  }

  getAlbum(albumId) {
    return this.getAlbums([albumId], albums => albums[0]);
  }

  getAlbums(albumIds) {
    // See note about tokens above
    const url = "/api/albums?ids=" + albumIds.join(",") + "&token=" + this.user;
    return fetch(url, {
      method: "get",
      headers: {
        accept: "application/json"
      }
    })
      .then(this.checkStatus)
      .then(this.parseJson);
  }

  login() {
    this.setUser(this.user);
  }

  logout() {
    this.removeUser();
  }
}

export const client = new Client();

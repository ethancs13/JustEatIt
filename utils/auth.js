class AuthService {
  getUser() {
    return jwtDecode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Assuming AsyncStorage is used for React Native
    // Replace localStorage with AsyncStorage if using React Native
    return AsyncStorage.getItem("id_token");
  }

  login(idToken) {
    // Assuming navigation is handled by React Navigation
    // Replace window.location.assign with navigation.navigate if using React Navigation
    localStorage.setItem("id_token", idToken);
    navigation.navigation("/user");
  }

  logout() {
    localStorage.removeItem("id_token");
    navigation.navigation("/");
  }
}

export default new AuthService();
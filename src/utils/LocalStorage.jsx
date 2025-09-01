// export const userData = {
//   userInfo: {
//     email: null,
//     password: null,
//     userName: null,
//     fullName: null,
//     loginStatus: null,
//     registerStatus: null,
//     accessToken: null,
//   },
// };

const LocalStorageService = {
  updateUser: (email, updatedUser) => {
    try {
      const users = LocalStorageService.getData();

      // Find user index
      const userIndex = users.findIndex(
        (user) => user.userInfo.email === email
      );

      if (userIndex !== -1) {
        // Update user data
        users[userIndex] = updatedUser;
        localStorage.setItem("userData", JSON.stringify(users));
        return true;
      }

      return false;
    } catch (error) {
      console.error("Error updating user:", error);
      return false;
    }
  },
  setData: (data) => {
    try {
      const users = LocalStorageService.getData();
      users.push(data);
      localStorage.setItem("userData", JSON.stringify(users));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  getData: () => {
    try {
      return JSON.parse(localStorage.getItem("userData")) || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};

export default LocalStorageService;

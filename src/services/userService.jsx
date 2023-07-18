const users = [
  { id: 1, username: 'user1', password: '1' },
  { id: 2, username: 'user2', password: 'password2' },
  // Add more user data as needed
];

export const loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous request
    setTimeout(() => {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        resolve(user);
      } else {
        reject(new Error('Invalid username or password'));
      }
    }, 1000); // Simulate a 1-second delay
  });
};

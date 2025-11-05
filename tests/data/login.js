export const USERS = {
  valid: {
    username: 'test',
    password: 'password123',
    expectedMessage: 'User successfully logged in!',
  },
  blocked: {
    username: 'testblock',
    password: 'password123',
  },
  invalid: {
    username: 'invalidUser',
    password: 'password123',
  },
  wrongPassword: {
    username: 'test',
    password: 'password1234',
  },
};

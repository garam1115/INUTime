const EMAIL = 'my@email.com';
const PASSWORD = '1234';

export const signIn = (email, paswword) => {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      if (email === EMAIL && paswword === PASSWORD) {
        resovle(email);
      } else {
        reject('The email or password is wrong');
      }
    }, 1000);
  });
};

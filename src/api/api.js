export const api = {
  async sendEmail(email) {
    return fetch('https://63d144a33f08e4a8ff943525.mockapi.io/UserInformation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(email),
    });
  },
};

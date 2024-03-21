export const api = {
  baseUrl: `${process.env.API_BASE_URL}`,
  test: {
    index: `${process.env.API_BASE_URL}`,
    bonjour: `${process.env.API_BASE_URL}/bonjour`,
  },
  user: {
    index: `${process.env.API_BASE_URL}/user`,
  },
};

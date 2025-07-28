export default {
  routes: [
    {
      method: 'GET',
      path: '/clients/me',
      handler: 'client.findMe',
      config: { auth: { scope: [] } },
      info: {
        type: 'content-api',
        name: 'clients-me',
        description: 'List clients belonging to the authenticated user',
      },
    },
  ],
};

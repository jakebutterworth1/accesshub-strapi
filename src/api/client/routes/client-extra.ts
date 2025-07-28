'use strict';

export default {
  routes: [
    {
      method: 'GET',
      path: '/clients/me',
      handler: 'client.findMe',
      // omit auth -> requires auth by default
      info: { type: 'content-api', name: 'clients-me' },
    },
    {
      method: 'GET',
      path: '/clients/:id(\\d+)',
      handler: 'client.findOne',
      config: { auth: false }, // make public like your list; change if needed
      info: { type: 'content-api', name: 'client-findOne-numeric' },
    },
  ],
};

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::permission-level.permission-level', {
  only: ['find', 'findOne', 'create'],
  config: {
    find:    { auth: false },
    findOne: { auth: false },
    create:  { auth: { scope: [] } },
  },
});

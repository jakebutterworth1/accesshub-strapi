import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::platform.platform', {
  only: ['find', 'findOne'],
  config: {
    find:    { auth: false },
    findOne: { auth: false },
  },
});

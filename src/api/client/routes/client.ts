import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::client.client', {
  only: ['find', 'findOne', 'create', 'update', 'delete'],
});

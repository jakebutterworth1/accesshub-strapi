import type { Schema, Struct } from '@strapi/strapi';

export interface ClientClientPlatformLink extends Struct.ComponentSchema {
  collectionName: 'components_client_platform_links';
  info: {
    description: 'Joins a client to a platform at a permission level';
    displayName: 'Client Platform Link';
  };
  attributes: {
    permission_level: Schema.Attribute.Relation<
      'manyToOne',
      'api::permission-level.permission-level'
    >;
    platform: Schema.Attribute.Relation<'manyToOne', 'api::platform.platform'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'client.client-platform-link': ClientClientPlatformLink;
    }
  }
}

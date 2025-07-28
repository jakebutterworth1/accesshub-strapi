import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::client.client', ({ strapi }) => ({
  async findMe(ctx) {
    const user = ctx.state.user;
    if (!user) return ctx.unauthorized('You must be authenticated.');

    const incoming = ctx.query ?? {};

    const query = {
      ...(incoming as Record<string, unknown>),
      filters: {
        ...(incoming as any).filters,
        requested_by_user: { id: { $eq: user.id } },
      },
      populate: {
        platform_access: {
          populate: {
            platform: true,
            permission_level: true,
          },
        },
        requested_by_user: true,
      },
    } as any; // relax typings

    const entities = await strapi.entityService.findMany('api::client.client', query);
    const sanitized = await this.sanitizeOutput(entities, ctx);
    return this.transformResponse(sanitized);
  },
}));

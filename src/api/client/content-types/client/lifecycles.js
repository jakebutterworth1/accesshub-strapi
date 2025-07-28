'use strict';

module.exports = {
  async beforeCreate(event) {
    const { state, params } = event; // Strapi v5 signature
    if (state?.user?.id) {
      params.data.requested_by_user = state.user.id;
    }
  },
};

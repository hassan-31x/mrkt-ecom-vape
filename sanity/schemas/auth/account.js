export const account = {
    name: 'account',
    title: 'Auth - Account',
    type: 'document',
    fields: [
      {
        name: 'providerType',
        type: 'string'
      },
      {
        name: 'providerId',
        type: 'string'
      },
      {
        name: 'providerAccountId',
        type: 'string'
      },
      {
        name: 'refreshToken',
        type: 'string'
      },
      {
        name: 'accessToken',
        type: 'string'
      },
      {
        name: 'accessTokenExpires',
        type: 'number'
      },
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: { type: 'user' }
      }
    ]
  };
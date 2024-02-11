export const referral = {
  name: 'referral',
  title: 'Auth - Referral',
  type: 'document',
  fields: [
    {
      name: 'referralEmail',
      title: 'Referral Email',
      description: 'The email of the user who referred the other user.',
      type: 'string',
    },
    {
      name: 'referredEmail',
      title: 'Referred Email',
      description: 'The email of the user who was referred.',
      type: 'string',
    },
    {
      name: 'dateOfReferral',
      title: 'Date of Referral',
      type: 'datetime',
    },
  ],
};

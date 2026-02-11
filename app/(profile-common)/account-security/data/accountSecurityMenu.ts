// Why this is good:

// Easy to add more later (2FA, sessions, etc.)

// destructive flag lets UI style it differently

export const accountSecurityMenu = [
  {
    title: 'Change Password',
    route: '/(profile-common)/account-security/change-password',
    icon: 'lock',
  },
  {
    title: 'Delete Account',
    route: 'DELETE_ACCOUNT',
    icon: 'trash',
    destructive: true,
  },
];

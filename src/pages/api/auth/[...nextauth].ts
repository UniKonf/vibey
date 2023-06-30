import NextAuth from 'next-auth';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    {
      id: 'Github',
      name: 'Github',
      type: 'oauth',
      authorization: 'https://github.com/login/oauth/authorize',
      token: 'https://github.com/login/oauth/access_token',
      userinfo: 'https://api.github.com/user',
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        // console.log('profile ', profile);
        return {
          id: profile.id,
          name: profile?.name,
          // provider: 'Github',
        };
      },
    },
    {
      id: 'Google',
      name: 'Google',
      type: 'oauth',
      // authorization: 'https://localhost:3000/oauth/authorize?scope=google',
      // token: 'https://localhost:3000/login/oauth/access_token',
      // userinfo: 'https://api.github.com/user',
      wellKnown: 'https://accounts.google.com/.well-known/openid-configuration',
      authorization: { params: { scope: 'openid email profile' } },
      idToken: true,
      checks: ['pkce', 'state'],
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,

      profile(profile) {
        // console.log('profile-Google ', profile);
        // let d = { id_token: '' };
        return {
          id: profile?.sub,
          name: profile?.name,
          email: profile?.sub,
          // id_token: '',
          access_token: '',
          // p: '',
          // p: '',
        };
      },
    },

    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  session: {
    strategy: 'jwt',
    maxAge: 3600,
  },
  jwt: {
    maxAge: 3600,
  },
  // session: {
  //   maxAge: 30 * 24 * 60 * 60, // 30 days

  //   updateAge: 24 * 60 * 60, // 24 hours
  // },

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   // console.log('start');
    //   // console.log('account: ', account?.provider);
    //   // if (account?.provider === 'Google' && profile) {
    //   //   console.log('profile: ', profile);
    //   // }
    //   // console.log('email: ', email);
    //   // console.log('credentials: ', credentials);
    //   // if (account && profile && account.provider === 'Google') {
    //   //   return (
    //   //     profile?.email_verified && profile?.email.endsWith('@example.com')
    //   //   )
    //   // }
    //   // console.log('user', user, account, profile)
    //   return true;
    // },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    // async jwt({ token, user, account, profile }) {
    //   // console.log('account');
    //   // console.log(account);
    //   // console.log('profile')
    //   // console.log(profile)
    //   if (account?.idToken) {
    //     token.idToken = account.idToken;
    //   }
    //   if (profile) {
    //     // token.preferred_username = profile.preferred_username
    //     // token.name = profile.preferred_username;
    //   }
    //   if (account) {
    //     // console.log('account: ', account);
    //     // token.accessToken = acount?.access_token
    //     // token.refreshToken = account?.refresh_token
    //     // token.accessTokenExpires = accessTokenExpires * 1000;
    //   }
    //   // let tokenDecoded = parseJwt(token?.idToken as string);
    //   // if (tokenDecoded.exp * 1000 < Date.now()) {
    //   //   return refreshAccessToken(token);
    //   // }
    //   // if (Date.now() < (token.accessTokenExpires as number)) {
    //   //   console.log('token: ', token);
    //   //   return token;
    //   // } else {
    //   //   return refreshAccessToken(token);
    //   // }
    //   // if (account?.provider === 'Google') {
    //   //   // token.accessToken = account.id_token
    //   //   token.id = account.id_token;
    //   //   token.access = account.id_token;
    //   //   // token.
    //   // }
    //   console.log('token');
    //   console.log(token);
    //   return token;
    // },
    // async session({ session, token, user }) {
    //   // if (session?.user) {
    //   //   console.log('session.user.id: ', session.user.id)
    //   //   session.user.id = token.accessToken
    //   // }
    //   console.log('session');
    //   console.log(session);
    //   // console.log('user')
    //   // console.log(user)
    //   console.log('token');
    //   console.log(token);
    //   // session.acessToken
    //   // session.accessToken = token.id;
    //   console.log('seesion.accesstoken: ', session);
    //   return session;
    //   // session.user.preferred_username = token.preferred_username as string
    //   //     session.error = token.error as string
    //   //     return session
    // },
  },
});

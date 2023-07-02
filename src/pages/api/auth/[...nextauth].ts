import NextAuth from 'next-auth';

export default NextAuth({
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
        return {
          id: profile.id,
          name: profile?.name,
          image: profile?.avatar_url,
          bio: profile?.bio,
        };
      },
    },
    {
      id: 'Google',
      name: 'Google',
      type: 'oauth',
      wellKnown: 'https://accounts.google.com/.well-known/openid-configuration',
      authorization: { params: { scope: 'openid email profile' } },
      idToken: true,
      checks: ['pkce', 'state'],
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,

      profile(profile) {
        return {
          id: profile?.sub,
          name: profile?.name,
          email: profile?.email,
          image: profile?.picture,
        };
      },
    },
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,

  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },

  callbacks: {
    async signIn() {
      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, account }) {
      if (account) {
        const accessTokenExpires = account?.expires_at
          ? account?.expires_at
          : 0;
        token.accessToken = account?.access_token;
        token.accessTokenExpires = accessTokenExpires * 1000;
      }

      return token;
    },
    async session({ session, token }) {
      const data = {
        user: {
          id: token?.sub as string,
          image: session.user?.image,
        },
        expires: session.expires,
      };

      return data;
    },
  },
});

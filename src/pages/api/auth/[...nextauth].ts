import NextAuth, { Account, Profile } from 'next-auth';
interface CustomProfile {
  id: string;
  name?: string;
  email?: string;
  picture?: string;
  bio?: string;
  avatar_url?: string;
  twitter_username?: string;
  html_url?: string;
}
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
    async signIn(params: {
      account: Account | null;
      profile?: Profile | undefined;
    }) {
      const { account, profile } = params;
      const customProfile = profile as CustomProfile | undefined;
      let data;
      try {
        if (account?.provider === 'Google') {
          data = {
            provider: 'Google',
            email: customProfile?.email,
            name: customProfile?.name,
            image: customProfile?.picture as string,
          };
        }
        if (account?.provider === 'Github') {
          data = {
            provider: 'Github',
            email: customProfile?.email,
            name: customProfile?.name,
            image: customProfile?.avatar_url,
            bio: customProfile?.bio,
            socials: [{ name: 'Github', link: customProfile?.html_url }],
          };
          if (customProfile?.twitter_username) {
            data.socials.push({
              name: 'Twitter',
              link: `https://twitter.com/${customProfile?.twitter_username}`,
            });
          }
        }
        data = JSON.stringify({
          data,
        });
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/user/provider`,
          {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: data,
          }
        ).then((response) => response.json());
        if (res.success) {
          return true;
        } else {
          throw new Error('Something went wrong, Try again');
        }
      } catch (error) {
        throw new Error('Failed to store user data in the database.');
      }
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
          name: session.user?.name,
        },
        expires: session.expires,
      };

      return data;
    },
  },
});

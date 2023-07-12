import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        '841990061263-t77idf6tmp2k8dmhirjb8mbeleqpgd98.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
});

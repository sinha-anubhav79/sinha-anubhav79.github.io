import { getUserFromRequest } from './auth';

export async function withAuth(context) {
  const user = getUserFromRequest(context.req);

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: { user } };
}

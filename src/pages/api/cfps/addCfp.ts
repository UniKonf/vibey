import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: true,
  },
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      (process.env.NEXT_PUBLIC_API_ENDPOINT as string) + '/api/cfps/create',
      {
        method: 'post',
        body: JSON.stringify(req.body),
        headers: {
          'Content-type': 'application/json',
        },
      }
    ).then((r) => {
      if (r.status === 500) {
        throw 'Some error occurrend';
      }
      return r.json();
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
}

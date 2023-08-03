import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/cfps`,
      {
        method: 'get',
        headers: {
          'Content-type': 'application/json',
        },
      }
    ).then((resp) => {
      if (resp.status === 500) {
        throw 'Some error occurrend';
      }
      return resp.json();
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
}

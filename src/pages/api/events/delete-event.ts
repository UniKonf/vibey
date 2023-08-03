import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id = JSON.parse(req.body);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/events/delete`,
      {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ id }),
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

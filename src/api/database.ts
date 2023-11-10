// import { MnemonicDatabase } from '../utils/database';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     const _auth = req.query.auth;
//     const auth = Array.isArray(_auth) ? _auth[0] : _auth;
//     const mnemonicDB = new MnemonicDatabase();

//     if (auth) {
//       const mnemonic = await mnemonicDB.getMnemonic(auth);
//       res.status(200).json({ mnemonic });
//     } else {
//       res.status(400).json({ error: 'Invalid request' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }

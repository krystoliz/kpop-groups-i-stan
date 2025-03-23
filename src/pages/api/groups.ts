import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch all groups
    const { data, error } = await supabase.from('kpop_groups').select('*');

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    // Add a new group
    const { name, image_url } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Group name is required' });
    }

    const { data, error } = await supabase
      .from('kpop_groups')
      .insert([{ name, image_url }])
      .select();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json(data);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
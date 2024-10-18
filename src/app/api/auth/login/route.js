import bcrypt from 'bcryptjs';
import models from '@/db/models';
export async function GET(req, res) {
    return Response.json({ message: 'Ok' },{status:200});
  
}
export async function POST(req, res) {
    console.log(models);
    const { username, password } = req.body;
    try {
      const cekUser = await models.user.findOne({ where: { username } });
      if (!cekUser) {
        return Response.json({ message: 'Invalid credentials' },{status:404});
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return Response.json({ message: 'Invalid credentials' },{status:404});
      }
      return Response.json({ message: 'Login successful', user },{status:200});
    } catch (error) {
      console.log(error)
      return Response.json({ message: 'Internal server error' },{status:500});
    }
  
}

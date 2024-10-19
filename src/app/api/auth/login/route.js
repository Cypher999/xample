import bcrypt from 'bcryptjs';
import models from '@/db/models';
export async function GET(req, res) {
    return Response.json({ message: 'Ok' },{status:200});
  
}
export async function POST(req, res) {
    // console.log(await req.formData());
    const reqBody=await req.formData();
    console.log(reqBody.get('username'))
    try {
      const cekUser = await models.User.findOne({ where: { username:reqBody.get('username') } });
      if (!cekUser) {
        return Response.json({ message: 'Invalid credentials' },{status:404});
      }

      const isMatch = await bcrypt.compare(reqBody.get('password'), user.password);
      if (!isMatch) {
        return Response.json({ message: 'Invalid credentials' },{status:404});
      }
      return Response.json({ message: 'Login successful', user },{status:200});
    } catch (error) {
      console.log(error)
      return Response.json({ message: 'Internal server error' },{status:500});
    }
  
}

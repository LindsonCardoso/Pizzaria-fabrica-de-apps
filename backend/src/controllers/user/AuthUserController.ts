import { Request, Response } from 'express'
import { AuthUserService } from '../../services/user/AuthUserService'

class AuthUserController{

  async handle(req: Request, res: Response) {
    console.log(req.body)

    //pegandoo que usuario pediu
    const {email, password} = req.body

    const authUserUserService = new AuthUserService();
    const authUser = await authUserUserService.execute({email, password});

    return res.json(authUser)
  }

}

export { AuthUserController}

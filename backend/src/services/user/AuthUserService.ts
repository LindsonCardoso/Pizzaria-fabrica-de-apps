import prismaClient from '../../prisma';
import { compare } from 'bcryptjs'

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService{
  async execute({email, password}: AuthRequest) {
      //verificar se esse email ja esta cadastrado
      const user = await prismaClient.user.findFirst({
        where: {
          email: email
        }
      })

      if (!user) {
        throw new Error("User/senha esta incorreta");
      }

      //verificar se a senha esta correta
      const passwordMatch = await compare(password, user.password)

      if (!passwordMatch) {
        throw new Error("User/senha esta incorreta");
      }

      //gerar um token JWT e devolver os dados do usuario id, name e email


  }
}

export { AuthUserService }

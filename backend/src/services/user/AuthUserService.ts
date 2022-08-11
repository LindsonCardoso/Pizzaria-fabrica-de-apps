import prismaClient from '../../prisma';
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

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

      //gerar token pro usuario
    const token = sign(
        { //payload
            name: user.name,
            email: user.email
        },

        //hash
        process.env.JWT_SECRET,
        { //dados
          subject: user.id,
          expiresIn: '30d'
        }
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    }


  }
}

export { AuthUserService }

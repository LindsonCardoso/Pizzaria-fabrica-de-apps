import { Request, Response } from 'express'
import { ListOrdersService } from '../../services/order/ListOrdersService'

class  ListOrdersController{
  async handle(req: Request, res: Response) {
    //{usando modo query do insonia}

    const listOrdersService = new ListOrdersService();

    const itemRemoved = await listOrdersService.execute()

    return res.json(itemRemoved)
  }
}

export { ListOrdersController}

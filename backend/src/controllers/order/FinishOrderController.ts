import { Request, Response } from 'express'
import { FinishOrderService } from '../../services/order/FinishOrderservice'

class  FinishOrderController{
  async handle(req: Request, res: Response) {
    //{usando modo query do insonia}

    const { order_id } = req.body

    const finishOrdersService = new FinishOrderService();

    const order = await finishOrdersService.execute({
      order_id
    })

    return res.json(order)
  }
}

export { FinishOrderController}

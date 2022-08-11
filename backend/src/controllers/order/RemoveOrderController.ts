import { Request, Response } from 'express'
import { RemoveOrderService } from '../../services/order/RemoveOrderService'

class RemoveOrderController{
  async handle(req: Request, res: Response) {
    //{usando modo query do insonia}

    const order_id = req.query.order_id as string

    const removeorder = new RemoveOrderService();

    const order = await removeorder.execute({
      order_id
    })

    return res.json(order)
  }
}

export { RemoveOrderController}

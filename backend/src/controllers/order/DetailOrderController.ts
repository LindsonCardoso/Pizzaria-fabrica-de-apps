import { Request, Response } from 'express'
import { SendOrderService } from '../../services/order/DetailOrderService'

class  DetailOrderController{
  async handle(req: Request, res: Response) {
    //{usando modo query do insonia}

    const order_id = req.query.order_id as string

    const detailOrdersService = new SendOrderService();

    const orders = await detailOrdersService.execute({
      order_id
    })

    return res.json(orders)
  }
}

export { DetailOrderController}

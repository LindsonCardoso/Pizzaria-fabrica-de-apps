import { Request, Response } from 'express'
import { RemoveItemService } from '../../services/order/RemoveItemServices'

class RemoveItemController{
  async handle(req: Request, res: Response) {
    //{usando modo query do insonia}

    const item_id = req.query.item_id as string

    const removeorder = new RemoveItemService();

    const itemRemoved = await removeorder.execute({
      item_id
    })

    return res.json(itemRemoved)
  }
}

export { RemoveItemController}

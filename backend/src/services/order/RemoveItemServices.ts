import prismaClient from "../../prisma";

interface itemRequest{

  item_id: string;

}

class RemoveItemService {
  async execute({ item_id }: itemRequest) {

    const item = await prismaClient.item.delete({
      where: {
        id: item_id
      }
    })

    return item;
  }
}

export { RemoveItemService }

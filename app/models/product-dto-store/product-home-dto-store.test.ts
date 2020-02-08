import { ProductHomeDtoStoreModel, ProductDtoStore } from "./product-home-dto-store"

test("can be created", () => {
  const instance: ProductDtoStore = ProductHomeDtoStoreModel.create({})

  expect(instance).toBeTruthy()
})
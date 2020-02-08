import { ProductHomeSmallStoreModel, ProductHomeSmallStore } from "./product-home-small-store"

test("can be created", () => {
  const instance: ProductHomeSmallStore = ProductHomeSmallStoreModel.create({})

  expect(instance).toBeTruthy()
})
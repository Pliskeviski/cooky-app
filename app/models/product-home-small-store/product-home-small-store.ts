import { Instance, SnapshotOut, types } from "mobx-state-tree"

const ProductHomeSmallDto = types.model({
  id: types.identifier,
  title: types.string,
  image: types.string,
  price: types.number,
})

/**
 * Model description here for TypeScript hints.
 */
export const ProductHomeSmallStoreModel = types
  .model("ProductHomeSmallStore")
  .props({
    products: types.optional(types.array(ProductHomeSmallDto), [])
  })
  .views(self => ({
    getProducts(): any[] {
      return self.products;
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    addProduct(product: any) {
      self.products.push(product)
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

  /**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type ProductHomeSmallStoreType = Instance<typeof ProductHomeSmallStoreModel>
export interface ProductHomeSmallStore extends ProductHomeSmallStoreType {}
type ProductHomeSmallStoreSnapshotType = SnapshotOut<typeof ProductHomeSmallStoreModel>
export interface ProductHomeSmallStoreSnapshot extends ProductHomeSmallStoreSnapshotType {}

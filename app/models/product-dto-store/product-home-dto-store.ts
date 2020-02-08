import { Instance, SnapshotOut, types } from "mobx-state-tree"

const ProductDto = types.model({
  id: types.identifier,
  title: types.string,
  tag: types.string,
  description: types.string,
  image: types.string,
  packageQuantity: types.number,
  price: types.number,
  rating: types.number
})

/**
 * Model description here for TypeScript hints.
 */
export const ProductHomeDtoStoreModel = types
  .model("ProductDtoStore")
  .props({
    products: types.optional(types.array(ProductDto), [])
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

type ProductDtoStoreType = Instance<typeof ProductHomeDtoStoreModel>
export interface ProductDtoStore extends ProductDtoStoreType { }
type ProductDtoStoreSnapshotType = SnapshotOut<typeof ProductHomeDtoStoreModel>
export interface ProductDtoStoreSnapshot extends ProductDtoStoreSnapshotType { }

import { ProductHomeSmallStoreModel } from "../../models/product-home-small-store"
import { ProductHomeDtoStoreModel } from "../../models/product-dto-store"
import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { NavigationStoreModel } from "../../navigation/navigation-store"
import { DailyFilterStoreModel } from "../daily-filter-store"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  productHomeSmallStore: types.optional(ProductHomeSmallStoreModel, {}),
  productHomeStore: types.optional(ProductHomeDtoStoreModel, {}),
  dailyFilterStore: types.optional(DailyFilterStoreModel, {}),
  navigationStore: types.optional(NavigationStoreModel, {}),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}

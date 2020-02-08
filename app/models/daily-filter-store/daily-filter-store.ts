import { Instance, SnapshotOut, types } from "mobx-state-tree"


const Filter = types.model({
  id: types.identifier,
  title: types.string,
  text: types.string,
  image: types.string
})

/**
 * Model description here for TypeScript hints.
 */
export const DailyFilterStoreModel = types
  .model("DailyFilterStore")
  .props({
    filters: types.optional(types.array(Filter), [])
  })
  .views(self => ({
    getFilters(): any[] {
      return self.filters
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    addFilter(filter: any) {
      self.filters.push(filter)
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

  /**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type DailyFilterStoreType = Instance<typeof DailyFilterStoreModel>
export interface DailyFilterStore extends DailyFilterStoreType {}
type DailyFilterStoreSnapshotType = SnapshotOut<typeof DailyFilterStoreModel>
export interface DailyFilterStoreSnapshot extends DailyFilterStoreSnapshotType {}


import { DailyFilterStoreModel, DailyFilterStore } from "./daily-filter-store"

test("can be created", () => {
  const instance: DailyFilterStore = DailyFilterStoreModel.create({})

  expect(instance).toBeTruthy()
})
import { calculateBMI } from "./index.js"

test("体重70kg、身長174cmを渡された時に23.1を返すこと", () => {
  expect(calculateBMI(70, 174)).toBe(23.1)
})

it("体重70kg、身長174cmを渡された時に23.1を返すこと", () => {
  expect(calculateBMI(70, 174)).toBe(23.1)
})

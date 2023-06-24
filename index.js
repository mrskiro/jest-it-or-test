export const calculateBMI = (weight, height) => {
  // 身長をメートルに変換
  const heightInMeters = height / 100
  const bmi = weight / heightInMeters ** 2
  return Math.floor(bmi * 10) / 10
}

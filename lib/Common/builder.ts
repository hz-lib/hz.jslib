/**
 * 获取当前日期，格式：yyyy-MM-dd
 */
export const getNowDate = (): string => {
    const date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

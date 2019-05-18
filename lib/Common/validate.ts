/**
 * 检验手机号是否合法
 * @param phone 手机号
 */
export const isPhone = (phone: string) => {
    const pattern = /^1[3456789]\d{9}$/
    return pattern.test(phone)
}

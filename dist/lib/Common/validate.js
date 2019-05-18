"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 检验手机号是否合法
 * @param phone 手机号
 */
exports.isPhone = function (phone) {
    var pattern = /^1[3456789]\d{9}$/;
    return pattern.test(phone);
};

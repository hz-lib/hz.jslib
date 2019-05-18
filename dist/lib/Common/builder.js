"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 获取当前日期，格式：yyyy-MM-dd
 */
exports.getNowDate = function () {
    var date = new Date();
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
};

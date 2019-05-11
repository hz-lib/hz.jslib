"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPhone = function (phone) {
    var pattern = /^1[3456789]\d{9}$/;
    return pattern.test(phone);
};

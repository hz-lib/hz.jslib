"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var builder_1 = require("./builder");
var pinyin_1 = require("./pinyin");
var validate_1 = require("./validate");
exports.default = {
    ConvertPinyin: pinyin_1.ConvertPinyin,
    isPhone: validate_1.isPhone,
    getNowDate: builder_1.getNowDate
};

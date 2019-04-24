"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./lib/BaiduSpeech/index");
var index_2 = __importDefault(require("./lib/Common/index"));
exports.default = {
    speechText: index_1.speechText,
    Common: index_2.default
};

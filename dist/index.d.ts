declare const _default: {
    speechText: (token: String, text: String, cuid?: string, vol?: number, spd?: number) => void;
    Common: {
        ConvertPinyin: typeof import("./lib/Common/pinyin").ConvertPinyin;
        isPhone: (phone: string) => boolean;
        getNowDate: () => string;
    };
};
export default _default;

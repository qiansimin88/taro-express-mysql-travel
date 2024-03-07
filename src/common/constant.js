import dayjs from "dayjs";

export const ERR_NET_MESSAGE = "网络开小差";

// 日历日期 最大日期 当前多 60 天
export const MIN_DATE = dayjs().format("YYYY-MM-DD");
export const MAX_DATE = dayjs().add(60, "day").format("YYYY-MM-DD");

export const API_PRE = "http://127.0.0.1:3000";

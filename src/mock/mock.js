import Mock from "mockjs";

Mock.mock("/data", {
  "object|2": {
    310000: "上海市",
    320000: "江苏省",
    330000: "浙江省",
    340000: "安徽省",
  },
});

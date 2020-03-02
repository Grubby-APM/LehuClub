export default {
  state: {
    year: new Date().getFullYear(),
    moon: new Date().getMonth(),
    day: new Date().getDate(),
    // 用来记录预定的时间
    changeday: new Date().getDate(),
    week: new Date().getDay(),
    index: null, //记录时间月份索引
    houri: null, //记录时钟的索引
    numi: null, // 记录时钟的索引
    selectDay: {}, //选择好时间的对象
    roomid: 1
  },
  mutations: {
    changeday(state) {
      console.log(state.index);
    }
  }
};

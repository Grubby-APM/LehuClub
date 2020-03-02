export default {
  state: {
    List: ["全部", "4人", "5人", "6人", "7人", "8人", "9人"],
    noone: false //记录是否请求后台成功
  },
  mutations: {
    numsel(state) {
      // 筛选人数
      if (this.state.fileindex == 0) {
        this.state.selectjb = this.state.jbdata;
      } else {
        let newArr = state.List[this.state.fileindex];
        newArr = newArr.split("人");
        this.state.selectjb = this.state.jbdata.filter(item => {
          return item.num == newArr[0];
        });
        if (this.state.fileindex == 6) {
          this.state.selectjb == [];
        }
      }
    }
  }
};

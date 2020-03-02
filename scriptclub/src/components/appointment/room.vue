<template>
  <div class="selectroom">
    <ul>
      <li v-for="(item, i) in roomList" :key="i">
        <img :src="item.url" alt="" />
        <p>{{ item.title }}</p>
        <span class="id">{{ item.id }}</span>
        <van-checkbox
          @click="go(i)"
          class="gou"
          v-model="item.istrue"
          checked-color="#E0B85B"
          bind:change="onChange"
        ></van-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomList: [
        {
          id: 1,
          title: "欧式房",
          istrue: false,
          url: require("../../assets/img/room01.png")
        },
        {
          id: 2,
          title: "古风房",
          istrue: false,
          url: require("../../assets/img/room02.png")
        },
        {
          id: 3,
          title: "恐怖房",
          istrue: false,
          url: require("../../assets/img/room03.png")
        },
        {
          id: 4,
          title: "日式房",
          istrue: false,
          url: require("../../assets/img/room04.png")
        },
        {
          id: 5,
          title: "ins风",
          istrue: false,
          url: require("../../assets/img/room05.png")
        },
        {
          id: 6,
          title: "恐怖房",
          istrue: false,
          url: require("../../assets/img/room06.png")
        }
      ]
    };
  },
  methods: {
    go(i) {
      this.roomList.forEach(item => {
        item.istrue = false;
      });
      this.roomList[i].istrue = true;
      this.$store.state.appoint.roomIndex = this.roomList[i].id;
      console.log(this.$store.state.appoint.roomIndex);
    }
  }
};
</script>

<style lang="scss" scoped>
.selectroom {
  margin-top: 30px;
  ul {
    overflow-x: scroll;
    display: flex;
    li {
      width: 150px;
      margin-right: 10px;
      img {
        width: 150px;
      }
      .gou {
        font-size: 20px;
        float: right;
        color: #c2c2c2;
      }
      .con {
        color: #e0b85b;
      }
    }
  }
}
</style>

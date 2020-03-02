<template>
    <div>
        <div class="title">请根据剧本选择时间人数</div>
        <div @click="showPopup" class="btn">
            {{ year }}-{{ moon }}-{{ day }} {{ $store.state.appoint.selectDay.week }}
            {{ $store.state.appoint.selectDay.hour }}
            {{ $store.state.appoint.selectDay.num }}人
        </div>

        <mt-popup v-model="popupVisible" position="bottom">
            <span class="daytitle">日期:{{ year }}-{{ moon }}-{{ day }}</span>
            <!-- 日期选择 -->
            <div class="day">
                <ul>
                    <li
                        :class="{ con: $store.state.appoint.index == i }"
                        @click="dayfun(i)"
                        v-for="(item, i) in data"
                        :key="i"
                    >
                        <p>{{ item.moon }}月-{{ item.day }}日</p>
                        <p>{{ item.week }}</p>
                    </li>
                </ul>
            </div>
            <span class="daytitle">时间:{{ $store.state.appoint.selectDay.hour }}</span>
            <!-- 时间选择 -->
            <div class="day">
                <ul>
                    <li
                        :class="{ con: $store.state.appoint.houri == i }"
                        @click="hourfun(i)"
                        v-for="(item, i) in hour"
                        :key="i"
                    >
                        <p>{{ item }}</p>
                    </li>
                </ul>
            </div>
            <span class="daytitle">人数:{{ $store.state.appoint.selectDay.num }}</span>
            <div class="day">
                <ul>
                    <li
                        :class="{ con: $store.state.appoint.numi == i }"
                        @click="numifun(i)"
                        v-for="(item, i) in numselect"
                        :key="i"
                    >
                        <p>{{ item }}</p>
                    </li>
                </ul>
            </div>
        </mt-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            popupVisible: false,
            time: null,
            hh: "13",
            mm: "00",
            num: 1,
            data: [  // 初始化之前设置
                {
                    moon: this.moon,
                    day: this.day,
                    week: this.week
                },
                {
                    moon: this.moon,
                    day: this.day + 1,
                    week: this.week2
                },
                {
                    moon: this.moon,
                    day: this.day + 2,
                    week: this.week3
                }
            ],
            hour: [
                "13:00",
                "13:30",
                "14:00",
                "14:30",
                "15.00",
                "15.30",
                "16.00"
            ],
            numselect: [4, 5, 6, 7, 8, 9]
        };
    },
    methods: {
        showPopup() {
            this.popupVisible = true;
        },
        onClose() {
            this.show = false;
        },
        dayfun(i) {
            this.$store.state.appoint.index = i;
            // 选择好的日期
            this.$store.state.appoint.selectDay.moon = this.moon;
            this.$store.state.appoint.selectDay.day = this.data[i].day;
            this.$store.state.appoint.selectDay.week = this.data[i].week;
        },
        hourfun(i) {
            this.$store.state.appoint.houri = i;
            // 选择好的时间
            this.$store.state.appoint.selectDay.hour = this.hour[i];
        },
        numifun(i) {
            this.$store.state.appoint.numi = i;
            // 选择好的人数
            this.$store.state.appoint.selectDay.num = this.numselect[i];
            // this.$store.commit("changeday");
        }
    },
    watch: {
        "$store.state.appoint.index"() {
            // console.log(this.$store.state.appoint.index);
            let i = this.$store.state.appoint.index;
            this.day = this.data[i].day;
        }
    },
    beforeCreate() {
        // console.log(this);
        this.year = this.$store.state.appoint.year;
        this.moon = this.$store.state.appoint.moon + 1;
        this.day = this.$store.state.appoint.day;
        switch (this.$store.state.appoint.week) {
            case 0:
                this.week = "星期天";
                this.week2 = "星期一";
                this.week3 = "星期二";
                break;
            case 1:
                this.week = "星期一";
                this.week2 = "星期二";
                this.week3 = "星期三";
                break;
            case 2:
                this.week = "星期二";
                this.week2 = "星期三";
                this.week3 = "星期四";
                break;
            case 3:
                this.week = "星期三";
                this.week2 = "星期四";
                this.week3 = "星期五";
                break;
            case 4:
                this.week = "星期四";
                this.week2 = "星期五";
                this.week3 = "星期六";
                break;
            case 5:
                this.week = "星期五";
                this.week2 = "星期六";
                this.week3 = "星期天";
                break;
            case 6:
                this.week = "星期六";
                this.week2 = "星期一";
                this.week3 = "星期天";
        }
    }
};
</script>

<style lang="scss" scoped>
.title {
    font-weight: bolder;
    font-size: 18px;
    margin: 20px 0 10px 0;
}
.btn {
    text-align: center;
    color: #ffffff;
    background-color: #4a4a4a;
    padding: 10px 0px;
    border-radius: 15px;
}

.mint-popup-bottom {
    width: 100%;
    padding: 10px 10px 0 10px;
    box-sizing: border-box;
}
.daytitle {
    font-weight: bolder;
}
.day {
    ul {
        display: flex;
        overflow-x: scroll;
        li {
            margin-top: 20px;
            text-align: center;
            flex: 1;
            border: 1px solid #fff;
            padding: 10px;
        }
        .con {
            border: 1px solid #ca9957;
        }
    }
}
</style>

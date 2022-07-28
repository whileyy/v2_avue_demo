<template>
  <div>
    <div id="table_content" ref="tableContent">
      <avue-crud :data="data" v-show="isShowTableHead" ref="tableHead" id="tableHead" :option="option"></avue-crud>
      <avue-crud :data="data" :option="option" id="dataTable" ref="dataTable"></avue-crud>
      <el-button type="success" class="m_ten" @click="addTxt">修改说明</el-button>
      <el-input v-model="txtVal" type="textarea" v-if="isShowAddTxt"></el-input>
      <el-button type="primary" class="m_ten fr" v-if="isShowAddTxt" @click="submiTxt">提交</el-button>
      <div style="white-space: pre-line" v-html="txtVal" v-if="!isShowAddTxt"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tableHeadFiexd",
  data() {
    return {
      isShowAddTxt: false,
      isShowTableHead: false,
      txtVal: "",
      option: {
        column: [
          {
            label: '姓名',
            prop: 'name',
            fixed: true
          }, {
            label: '性别',
            prop: 'sex'
          }, {
            label: '日期',
            prop: 'datetime'
          }, {
            label: '地址',
            prop: 'address'
          }
        ]
      },
      data: [
        {
          name: '1',
          sex: '男'
        }, {
          name: '2',
          sex: '女'
        }, {
          name: '3',
          sex: '男'
        }, {
          name: '4',
          sex: '女'
        }, {
          name: '5',
          sex: '男'
        }, {
          name: '6',
          sex: '女'
        }, {
          name: '7',
          sex: '男'
        }, {
          name: '8',
          sex: '女'
        }, {
          name: '9',
          sex: '女'
        }, {
          name: '10',
          sex: '女'
        }, {
          name: '11',
          sex: '女'
        }, {
          name: '12',
          sex: '女'
        }, {
          name: '13',
          sex: '女'
        }, {
          name: '14',
          sex: '女'
        }, {
          name: '15',
          sex: '女'
        }, {
          name: '16',
          sex: '女'
        }, {
          name: '17',
          sex: '女'
        }, {
          name: '18',
          sex: '女'
        }, {
          name: '19',
          sex: '女'
        }, {
          name: '20',
          sex: '女'
        }, {
          name: '21',
          sex: '女'
        }, {
          name: '22',
          sex: '女'
        }, {
          name: '23',
          sex: '女'
        }, {
          name: '24',
          sex: '女'
        }, {
          name: '25',
          sex: '女'
        }, {
          name: '26',
          sex: '女'
        }, {
          name: '27',
          sex: '女'
        }, {
          name: '28',
          sex: '女'
        }, {
          name: '29',
          sex: '女'
        }, {
          name: '30',
          sex: '女'
        }, {
          name: '31',
          sex: '女'
        }, {
          name: '32',
          sex: '女'
        }, {
          name: '33',
          sex: '女'
        }, {
          name: '34',
          sex: '女'
        }, {
          name: '35',
          sex: '女'
        }, {
          name: '36',
          sex: '女'
        }, {
          name: '37',
          sex: '女'
        }, {
          name: '38',
          sex: '女'
        }, {
          name: '39',
          sex: '女'
        }, {
          name: '40',
          sex: '女'
        }, {
          name: '41',
          sex: '女'
        },
      ],
    }
  },
  mounted() {
    /* headTable 的 marginBottom值 */
    // let headTableMenuMb = getComputedStyle(document.querySelector("#tableHead .avue-crud__menu"),null).marginBottom.replace("px", "")
    // let headTableMenuCHeight = document.querySelector("#tableHead .avue-crud__menu").offsetHeight + Number(headTableMenuMb)
    // let headTableHeadCHeight = document.querySelector("#tableHead .el-table__header-wrapper").clientHeight
    /* dataTable 的 marginBottom值 */
    let dataTableMenuMb = getComputedStyle(document.querySelector("#dataTable .avue-crud__menu"),null).marginBottom.replace("px", "")
    let dataTableMenuCHeight = document.querySelector("#dataTable .avue-crud__menu").offsetHeight + Number(dataTableMenuMb)
    let dataTableHeadCHeight = document.querySelector("#dataTable .el-table__header-wrapper").clientHeight
    this.$nextTick(()=>{
      this.$refs.tableContent.addEventListener("scroll",(e)=>{
        if(e.target.scrollTop + 1 >= dataTableHeadCHeight + dataTableMenuCHeight){
          this.isShowTableHead = true
          this.$refs.tableHead.$el.style.position = 'fixed'
          this.$refs.tableHead.$el.style.top = 0
          this.$refs.tableHead.$el.style.left = 0
          this.$refs.tableHead.$el.style.zIndex = 99999
          // 使用getComputedStyle获取当前元素的属性 第一个参数为 目标元素 第二参数为 伪元素 没有可忽略
          this.$refs.tableHead.$el.style.width = getComputedStyle(this.$refs.dataTable.$el).width
        }
      },true)
    })
  },
  methods:{
    addTxt(){
      this.isShowAddTxt = true;
    },
    submiTxt(){
      console.log(this.txtVal)
      this.isShowAddTxt = false;
    }
  }
}
</script>

<style lang="less" scoped>
#table_content {
  overflow: hidden;
  overflow-y: auto;
  height: 800px;
}

.m_ten {
  margin: 10px;
}
.fr{
  float: right;
}

/deep/ #tableHead .el-table__body-wrapper{
  display: none !important;
  background: transparent;
}
</style>
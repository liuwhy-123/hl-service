<template>
  <div class="test-page">
    <div class="el-page-header">
      <span>金蝶财务软件</span>
    </div>

    <div class="item" v-for="(item, index) in tableCount" :key="index">
      <div class="block">
        <span class="demonstration">*产品信息</span>
        <el-carousel trigger="click" :height="bannerHeight + 'px'">
          <el-carousel-item v-for="(item, index) in item.list" :key="index">
            <img :src="item.img" style="width: 100%; height: 100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="items">
        <span class="demonstration">*产品套餐</span>
        <div class="transition">
          <el-row :gutter="12" class="transition-box">
            <el-col :span="8" v-for="(item, index) in item.cards" :key="index">
              <el-card shadow="hover">
                <div class="text item" style="line-height: 70px">
                  <p style="font-weight: bold">{{ item.title }}</p>
                  <p style="text-indent: 2em">{{ item.year }}</p>
                  <p style="text-indent: 2em">特点:{{ item.features }}</p>
                  <span>￥{{ item.money }}元 / 年&nbsp;</span>
                  <el-select
                    v-model="item.key"
                    placeholder="请选择"
                    v-show="item.type"
                    size="mini"
                    style="width: 65px"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                  <span v-show="item.type">&nbsp;年</span>
                </div>
                <div class="bottom">
                  <el-button type="success" class="button" @click="addClick"
                    >加入购物车</el-button
                  >
                  <el-button
                    type="primary"
                    class="button"
                    @click="buyClick(item)"
                    >立即购买</el-button
                  >
                </div>
              </el-card>
            </el-col>

            <el-dialog
              title="首次购买的需完善相关信息:"
              :visible.sync="dialogFormVisible"
            >
              <el-form :model="form" label-width="100px">
                <el-form-item label="企业名称:" :required="true">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="注册地址:" :required="true">
                  <el-input
                    v-model="form.registeredAddress"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="公司地址:" :required="true">
                  <el-input
                    v-model="form.companyAddress"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="联系方式:" :required="true">
                  <el-input v-model="form.mobile" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="开户银行:" :required="true">
                  <el-input v-model="form.bank" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="开户账号:" :required="true">
                  <el-input
                    v-model="form.accountNumber"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="纳税识别号:" :required="true">
                  <el-input
                    v-model="form.payTaxes"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-form>
              <div class="footer-button">
                <el-button @click="resetClick">重置</el-button>
                <el-button type="primary" @click="saveClick">保存</el-button>
              </div>
            </el-dialog>
            <el-dialog
              title="检查相关基本信息后再购买:"
              :visible.sync="dialogFormVisible2"
            >
              <el-form :model="form" label-width="100px">
                <el-form-item label="企业名称:" :required="true">
                  <el-input
                    v-model="$store.state.verification[0].name"
                    autocomplete="off"
                    :disabled="show"
                  ></el-input>
                </el-form-item>
                <el-form-item label="注册地址:" :required="true">
                  <el-input
                    v-model="$store.state.verification[0].registeredAddress"
                    autocomplete="off"
                    :disabled="show"
                  ></el-input>
                </el-form-item>
                <el-form-item label="公司地址:" :required="true">
                  <el-input
                    v-model="$store.state.verification[0].companyAddress"
                    autocomplete="off"
                    :disabled="show"
                  ></el-input>
                </el-form-item>
                <el-form-item label="联系方式:" :required="true">
                  <el-input
                    v-model="$store.state.verification[0].mobile"
                    autocomplete="off"
                    :disabled="show"
                  ></el-input>
                </el-form-item>
                <el-form-item label="开户银行:" :required="true">
                  <el-input
                    v-model="$store.state.verification[0].bank"
                    autocomplete="off"
                    :disabled="show"
                  ></el-input>
                </el-form-item>
                <el-form-item label="开户账号:" :required="true">
                  <el-input
                    v-model="$store.state.verification[0].accountNumber"
                    autocomplete="off"
                    :disabled="show"
                  ></el-input>
                </el-form-item>
                <el-form-item label="纳税识别号:" :required="true">
                  <el-input
                    v-model="$store.state.verification[0].payTaxes"
                    autocomplete="off"
                    :disabled="show"
                  ></el-input>
                </el-form-item>
              </el-form>
              <div class="footer-button">
                <el-button @click="modifyClick">修改</el-button>
                <el-button type="primary" @click="determineClick"
                  >确定</el-button
                >
              </div>
            </el-dialog>
          </el-row>
        </div>
      </div>
    </div>
    <div class="bottom">
        <p>footer</p>
      </div>
  </div>
</template>
<script>
import content from "@/data/content.js";
export default {
  name: "SetMealPage",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "1",
        },
        {
          value: "选项2",
          label: "2",
        },
        {
          value: "选项3",
          label: "3",
        },
        {
          value: "选项4",
          label: "4",
        },
        {
          value: "选项5",
          label: "5",
        },
        {
          value: "选项6",
          label: "6",
        },
        {
          value: "选项7",
          label: "7",
        },
        {
          value: "选项8",
          label: "8",
        },
        {
          value: "选项9",
          label: "9",
        },
        {
          value: "选项10",
          label: "10",
        },
      ],
      dialogFormVisible2: false,
      dialogFormVisible: false,
      show: true,
      form: {
        name: "",
        registeredAddress: "",
        companyAddress: "",
        mobile: "",
        bank: "",
        accountNumber: "",
        payTaxes: "",
      },
      bannerHeight: 600,
      screenWidth: 0,
    };
  },
  computed: {
    tableCount() {
      return this.$store.getters.data;
    },
  },
  methods: {
    buyClick(item) {
      console.log(this.tableCount);
      if (this.$store.state.verification[0].name == "") {
        this.dialogFormVisible = true;
      } else {
        this.dialogFormVisible2 = true;
      }

      console.log(item);
      console.log(this.$store.state.verification);
    },
    resetClick() {
      this.$message({
        type: "success",
        message: "重置成功",
      });
      console.log(this.form.name);
      this.form.name = "";
      this.form.registeredAddress = "";
      this.form.companyAddress = "";
      this.form.mobile = "";
      this.form.bank = "";
      this.form.accountNumber = "";
      this.form.payTaxes = "";
    },
    addClick() {
      this.$message({
        type: "success",
        message: "添加成功",
      });
    },
    saveClick() {
      if (
        this.form.name !== "" &&
        this.form.registeredAddress !== "" &&
        this.form.companyAddress !== "" &&
        this.form.mobile !== "" &&
        this.form.bank !== "" &&
        this.form.accountNumber !== "" &&
        this.form.payTaxes !== ""
      ) {
        this.$message({
          type: "success",
          message: "保存成功",
        });
        var i = this.$store.state.verification[0];
        (i.name = this.form.name),
          (i.registeredAddress = this.form.registeredAddress),
          (i.companyAddress = this.form.companyAddress),
          (i.mobile = this.form.mobile),
          (i.bank = this.form.bank),
          (i.accountNumber = this.form.accountNumber),
          (i.payTaxes = this.form.payTaxes);
        console.log(this.$store.state.verification);
        this.dialogFormVisible = false;
        this.dialogFormVisible2 = true;
      } else {
        this.$message.error("保存失败,请完善或修改信息");
      }
    },
    modifyClick() {
      this.dialogFormVisible2 = false;
      this.dialogFormVisible = true;
    },
    determineClick() {
      this.dialogFormVisible2 = false;
    },
  },
  mounted: function () {
    this.$store.commit("pull", content);
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.test-page {
  position: relative;
  background-color: #ffffff;
}

.el-page-header {
  top: -20px;
  z-index: 99;
  position: sticky;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #ffffff;
  font-size: 26px;
}
.bottom {
  text-align: center;
}
.footer {
  font-weight: bold;
  padding-top: 40px;
  text-indent: 2em;
  color: #a9a9a9;
}
.footer-button {
  text-align: center;
}
.transition-box {
  color: #fff;
  box-sizing: border-box;
  width: 100%;

  // padding-left: 15%;
  // padding-right: 9%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
  line-height: 150px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.demonstration {
  display: block;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  color: #000000;
  font-weight: bold;
}
.items {
  width: 100%;
}
.transition {
  width: 70%;
  margin: 0 auto;
}
</style>
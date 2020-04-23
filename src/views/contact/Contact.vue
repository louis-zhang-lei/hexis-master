<template>
  <!-- 页面 -->
  <div id="content" class="site-content">
    <!-- 主容器 -->
    <div class="main_container">
      <div class="entry-content">
        <!-- 标题 -->
        <div id="headline" class="headline">
          <div class="column-inner">
            <div class="wpb_wrapper">
              <h2 style="text-align: center;">联系我们</h2>
              <h3 style="text-align: center;">Contact Us</h3>
            </div>
          </div>
        </div><!-- 标题 -->


        <!-- 信息 -->
        <div class="message_container">
          <div>
            <!-- 信息表 -->
            <div class="column-inner1">
              <ul id="fields_2" style="list-style:none;">
                <!-- 发送消息 -->
                <li id="field_1" class="form_fields" style="border-bottom: 1px solid #CCC;🐴">
                  <h2 class="message_title">发送消息</h2>
                  <div class="message_detail">请填写这张表格，我们会尽快给你答复</div>
                </li>
                <!-- 发送消息 -->

                <!-- 姓名 -->
                <li id="field_2_name" class="form_fields">
                  <label class="form_label">
                    姓名
                    <span class="asterisk">*</span>
                  </label>
                  <div id="field_2_1">
                    <inputField :inputObj="inputObj_1"></inputField>
                    <inputField :inputObj="inputObj_2"></inputField>
                  </div>
                </li>
                <!-- 姓名 -->

                <!-- 公司 -->
                <li id="field_3_company" class="form_fields">
                  <label class="form_label">
                    公司
                    <span class="asterisk">*</span>
                  </label>
                  <div id="field_2_2">
                    <inputField :inputObj="inputObj_3"></inputField>
                    <br />
                    <selectCity></selectCity>
                    <inputField :inputObj="inputObj_4"></inputField>
                    <inputField :inputObj="inputObj_6"></inputField>
                  </div>
                </li>
                <!-- 公司 -->

                <!-- 邮箱地址 -->
                <li id="field_4_email" class="form_fields">
                  <label class="form_label">
                    邮箱地址
                    <span class="asterisk">*</span>
                  </label>
                  <div>
                    <inputField :inputObj="inputObj_8"></inputField>
                  </div>
                </li>
                <!-- 邮箱地址 -->

                <!-- 电话号码 -->
                <li id="field_5_phone" class="form_fields">
                  <label class="form_label">
                    电话号码
                    <span class="asterisk">*</span>
                  </label>
                  <div>
                    <inputField :inputObj="inputObj_9"></inputField>
                  </div>
                </li>
                <!-- 电话号码 -->

                <!--你的意见 -->
                <li id="field_5_phone" class="form_fields">
                  <label class="form_label">
                    你的意见
                    <span class="asterisk">*</span>
                  </label>
                  <div>
                    <textarea
                      name="input_12"
                      id="input_2_12"
                      aria-required="true"
                      aria-invalid="false"
                      rows="10"
                      cols="50"
                    ></textarea>
                  </div>
                </li>
                <!-- 你的意见 -->

                <li id="field_2_17" class="line"></li>
              </ul>

              <!-- 按钮 -->
              <div class="input_button">
                <input
                  type="submit"
                  id="submit_button"
                  class="form_button button"
                  value="提交"
                  v-on:click="submit"
                  onclick
                  @keyup.enter="submit"
                />
              </div>
              <!-- 按钮 -->
            </div>
            <!-- 信息表 -->

            <!-- 联系方式 -->
            <div class="column-inner2">
              <companyInfo :company="company"></companyInfo>
            </div>
            <!-- 联系方式 -->
          </div>
        </div> <!-- 信息 -->


        <!-- 版权声明 -->
        <div class="statement">
          <p>为了管理我们的客户数据库，收集的数据被存储起来。数据接收人：SAS HEXIS DESIGN ~ HEXIS S.A.根据法国数据保护法，您有权通过写信给SAS HEXIS DESIGN，Z.I.Horizons Sud CS 970003118 FRONTIGNAN CEDEX，France来访问和更正您的个人信息。出于正当理由，您也可以反对处理您的个人数据。</p>
        </div>

      </div>
    </div>
    <!-- 主容器 -->
  </div>
  <!-- 页面 -->
</template>



<script>

import inputField from "@/components/content/wjycomponents/inputField";
import selectCity from "@/components/content/wjycomponents/selectCity";
import companyInfo from "@/components/content/wjycomponents/companyInfo";

export default {
  name: "Contact",
  data() {
    return {
      inputObj_1: {
        id: "input_LastName",
        isRequired: "true",
        name_cn: "姓氏",
        name_en: "LastName"
      },

      inputObj_2: {
        id: "input_FirstName",
        isRequired: "true",
        name_cn: "名字",
        name_en: "FirstName"
      },

      inputObj_3: {
        id: "input_CompanyName",
        isRequired: "true",
        name_cn: "公司名",
        name_en: "Company Name"
      },

      inputObj_4: {
        id: "input_Address",
        isRequired: "true",
        name_cn: "地址",
        name_en: "Address"
      },
      inputObj_5: {
        id: "input_City",
        isRequired: "true",
        name_cn: "城市",
        name_en: "City"
      },
      inputObj_6: {
        id: "input_ZIP",
        isRequired: "true",
        name_cn: "邮政编码",
        name_en: "ZIP / Postal Code"
      },
      inputObj_8: {
        id: "input_Email",
        isRequired: "true",
        name_cn: "",
        name_en: "Email"
      },
      inputObj_9: {
        id: "input_Phone",
        isRequired: "true",
        name_cn: "",
        name_en: "Phone Number"
      },

      company: {
        logo: require("@/assets/img/wjy/logo/WBODYFENCE_2K18_logo.svg"),
        address: "XXXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXXXXXX",
        phone: "12331441231",
        email: "122131331kl@qq.com"
      }
    };
  },

  methods: {
    submit: function() {
      alert("提交成功");
    }
  },

  components: {
    inputField,
    selectCity,
    companyInfo
  }
};
</script>




<style scoped>
.site-content {
  box-sizing: border-box;
  display: block;
}

.main_container {
  display: block;
  max-width: 1340px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.message_container {
  display: block;
  box-sizing: border-box;
  margin-left: 15px;
  margin-right: 15px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
  overflow: hidden;
}

h2 {
  line-height: 50px;
  color: black;
  font-weight: 600;
  font-size: 48px;
  text-align: left;
  margin-top: 24px;
}

h3 {
  margin-top: 10px;
  color: #de0022;
  font-weight: 400;
  font-size: 25px;
  text-align: left;
}

.column-inner1 {
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  width: 66.666666%;
  float: left;
}

.column-inner2 {
  width: 33.333333%;
  float: right;
  overflow: hidden;
}

.message_title {
  font-weight: 700;
  font-size: 1.25em;
}

.message_detail {
  width: 100%;
  padding: 0 16px 0 0;
  margin-bottom: 9px;
}

.form_fields {
  padding-top: 0;
  margin: 28px 0px 28px 0;
}

.form_label {
  display: inline-block;
  line-height: 1.5;
  clear: both;
  color: black;
  font-weight: 700;
  font-size: 1.25em;
  margin-bottom: 5px;
}

.asterisk {
  color: #790000;
  margin-left: 4px;
  padding-left: 1px;
  color: #b94a48;
  font-weight: 700;
}

#input_CompanyName_span {
  width: 100%;
}

#input_Address_span {
  width: 100%;
}

#input_Email_span {
  width: 100%;
}

textarea {
  height: 160px;
  width: 100%;
  margin: 3px 0px 0px 0px;
  padding: 6px 8px;
  line-height: 1.5;
  border-color: gray;
}
.line {
  margin-top: 24px;
  border-bottom: 1px solid #ccc;
  padding: 0 16px 8px 0;
  margin: 28px 0;
  clear: both;
}

.company_logo {
  margin-top: 24px;
  background: red;
}

.input_button {
  margin: 16px 0 0;
  clear: both;
  width: 100%;
  margin-bottom: 20px;
}
.button {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.428571429;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background-color: #428bca;
  border: 1px solid transparent;
  border-color: #357ebd;
  border-radius: 4px;
}

.statement {
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  font-size: 14px;
  margin-bottom: 35px;
}

/** 平板 **/
@media only screen and (min-width: 540px) and (max-width: 1024px) {
  .main_container {
    max-width: 720px;
  }
}

/** 手机端 **/
@media only screen and (max-width: 540px) {
  .main_container {
    max-width: 540px;
  }

  h2 {
    margin-top: 24px;
    font-size: 48px;
  }

  h3 {
    font-size: 25px;
  }

  .column-inner1 {
    width: 100%;
    clear: both;
  }
  .column-inner2 {
    width: 100%;
    clear: both;
  }

  span {
    width: 100%;
    padding-right: 0px;
  }

  .input_button .button {
    width: 100%;
  }
}
</style>

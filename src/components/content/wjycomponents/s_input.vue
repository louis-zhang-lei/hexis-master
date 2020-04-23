<template>
  <li :id="'field_'+inputObj.id" class="rf_field">
    <label :for="'input_1'+inputObj.id">
      {{inputObj.name_cn}}
      <span class="rf_required" >*</span>
    </label>
    <div class="input_container">
      <input :id="'input_1'+inputObj.id" type="text" :required="inputObj.isRequired"  />
    </div>
  </li>
</template>

<script>
export default {
  name: "s_input",
  data() {
    return {};
  },

  props: {
    inputObj: {
      type: Object,
      default: function() {
        return { message: "none" };
      }
    }
  }
};
</script>

<style scoped>
li{
  padding-right: 16px;
}
span {
  width: 50%;
  display: inline-block;
  vertical-align: top;
  padding-right: 16px;
  margin-right: -4px;
}
.rf_required{
  color:#b94a48;
  margin-left: 4px;
}
.rf_field{
  width: 50%;
  float: left;
}
label {
  color: #000000;
  display: block;
  font-size: 20px;
  letter-spacing: 0.5pt;
  white-space: nowrap;
  margin: 9px 0 5px 0px;
}

input {
  width: 100%;
  font-family: inherit;
  padding: 5px 4px;
  letter-spacing: normal;
  margin-bottom: 1px;
  display: block;
  height: 34px;
  font-size: 14px;
  line-height: 1.5;
  color: #000000;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  outline: none; 
}

input:focus {
 color:black;
 border: 1px solid #428bca;
 background-color: white;
 border-radius: 5 px;
 box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
}
</style>
<template>
    <span class='ginput_left address_country' id='input_2_33_6_container' >
        <label for='input_Country' id='input_Country' >所在地区</label>
        <select name='input_33.6' id='input_2_33_6'  aria-required="true">
            <option value='' selected='selected'>City</option>
            <option v-for="item in list" :key="item" :value='item'>{{item}}</option>
            
        </select>
        
    </span>
</template>
 
<script>

export default {
    name:'selectCountry',
    data(){
        return{
            list:[ 
                '安徽省' ,
                '北京',
                '重庆',
                '福建省', 
                '甘肃省',
                '广东省',
                '广西壮族自治区',
                '贵州省',
                '海南省',
                '河北省',
                '河南省',
                '黑龙江省',
                '湖北省',
                '湖南省',
                '吉林省',
                '江苏省',
                '江西省',
                '辽宁省',
                '内蒙古自治区',
                '宁夏回族自治区',
                '青海省',
                '山东省',
                '山西省', 
                '陕西省',
                '上海',
                '四川省',
                '天津',
                '西藏自治区',
                '新疆维吾尔自治区',
                '云南省',
                '浙江省',
             ]
        }        
    }
}
</script>

<style  scoped>

span{
    width: 50%;
    display: inline-block;
    vertical-align: top;
    padding-right: 16px;
    margin-right: -4px;
}

label{
    display: block;
    font-size: 20px;
    letter-spacing: .5pt;
    white-space: nowrap;
    margin: 9px 0 5px 0px; 
}
select{
   display: block;
    width: 100%;
    height: 34px;
    font-size: 14px;
    line-height: 1.428571429;
    color: #555;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
</style>>
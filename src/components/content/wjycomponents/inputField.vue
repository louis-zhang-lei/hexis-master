<template>
   
    <span :id="inputObj.id+'_span'">
        <label for="name">
            {{inputObj.name_cn}}
        </label>
        <input type='text' :name='inputObj.id' :id='inputObj.id' value='' :aria-label='inputObj.name_en'   :aria-required="inputObj.isrequired" aria-invalid="false" :placeholder='inputObj.name_en'/>
    </span>

   
</template>

<script>
export default {
    name:'inputField',
    data(){
        return{

        }
    },

    props:{
        
        inputObj:{
            type:Object,
            default:function(){
                return {message:'none'}
            }
        }
    }
}
</script>

<style scoped>

span{
    width:50%;
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

input{
    
    width:100%;
    font-family: inherit;
    padding: 5px 4px;
    letter-spacing: normal;
    margin-bottom: 1px;
    display: block;   
    height: 34px;
    font-size: 14px;
    line-height: 1.5;
    color: #000000;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
}
</style>
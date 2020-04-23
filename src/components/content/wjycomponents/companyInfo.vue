<template>
    <div class="company_info" >
        <div class="logo_container">
            <img  id="company_logo" :src='company.logo' alt="company_logo" >
        </div>
        <br>
        
        <div class="company_messages">
            <p >
                <strong >地址：</strong>
                 <span v-html="company.address"></span>   
                <br>
            </p>
            <p>
                <strong>电话号码：</strong>
                {{company.phone}}
                <br>
            </p>
            <p>
                <strong>邮箱地址：</strong>
                {{company.email}}
                <br>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:"companyInfo",
    data(){
        return{

        }
    },
    
    props:{
        company:{
            type:Object,
            default:function(){
                return {message:"none"}
            }
        }
    }

}
</script>
<style  scoped>
.company_info{
    overflow:hidden;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    padding-top: 15% !important;
    padding-right: 15% !important;
    padding-bottom: 15% !important;
    padding-left: 15% !important;
}

p{
    margin-bottom: 1.5em;
    font-size: 15px;
    overflow:hidden;
}


img{
    max-width: 50%;
    margin-top: 20px;
    height: auto;
}

.company_logo{
    padding-left: 0;
    padding-right: 0;
}




</style>
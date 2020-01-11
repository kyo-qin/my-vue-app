<script type="text/javascript">
    // 定义一些公共的属性和方法
    const httpUrl = 'http://39.105.17.99:8080/'

    const message = 'Hello 项玲'

    function commonFun() {
        //console.log("公共方法")
    }
    // 暴露出这些属性和方法
    export default {
        httpUrl,
        commonFun,
        message
    }
</script>
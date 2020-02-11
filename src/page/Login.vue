<template>
    <div id="login">
        <h1>Login</h1>
        <el-input v-model="loginName"></el-input>
        <el-button @click="login1()">登录</el-button>
        {{userName}}
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'Login',
        data() {
            return {
                loginName: null
            }
        },
        computed: {
            ...mapGetters('user', ['userName'])
        },
        methods: {
            ...mapActions('user', ['login']),
            login1: function () {
                this.login(this.loginName);
                this.$router.push('/');
            }
        }
    }

</script>
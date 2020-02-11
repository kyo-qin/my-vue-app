<template>
    <div id="header_nav">
        <el-row>
            <el-menu default-active="1"  mode="horizontal" active-text-color="#ffd04b" text-color="#42b983"
                     style="border-bottom: none;">
                <el-menu-item v-for="(item) in menu" :key="item.path">
                    <router-link :to="item.path">{{item.name}}</router-link>
                </el-menu-item>
            </el-menu>
        </el-row>
        <el-row>
            <el-breadcrumb separator="/" style="padding-top: 18px">
                <el-breadcrumb-item :to="{ path: '/' }">返回首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{currentMenu}}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        name: "header-nav",
        props: {
            //currentMenu: String
        },
        data(){
            return {
                currentMenu: ''
            }
        },
        computed: {
            ...mapGetters([
                'countNow', 'todoList', 'doneTodos', 'doneTodoCount', 'getTodoById'
            ]),
            ...mapGetters('user', ['userName','menu'])
        },
        created: function(){
            this.currentMenu = this.$router.currentRoute.name
            this.$router.addRoutes(this.menu)
            console.log(this.$router);
        },
        watch: {
            '$route' (to) {
                this.currentMenu = to.name
            }
        }
    }

</script>
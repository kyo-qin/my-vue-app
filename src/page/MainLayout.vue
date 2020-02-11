<template>
    <div id="app">
        <el-container >
            <el-header height="110px" >
                <!-- 导航栏 -->
                <Header></Header>
            </el-header>
            <el-container>
                <el-aside width="200px" style="min-height: 700px;">
                    <!-- 侧边栏 -->
                    <Left></Left>
                </el-aside>
                <el-main>
                    <!-- Body -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>

    import Header from "@/page/Header"
    import Left from "@/page/Left"

    export default {
        name: "mainLayout",
        components: {
            Header: Header,
            Left: Left
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    header {
        width: 100%;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
        border-top: solid 4px #3091F2;
        z-index: 1000;
        transition: all 0.5s ease;
    }
</style>

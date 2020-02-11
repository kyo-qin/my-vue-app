<template>
    <div id="home">
        <!--        <img alt="Vue logo" src="../assets/logo.png">-->
        Clicked: {{ this.$store.state.count }} times, count is {{ countNow }}.
        <el-button type="primary" @click="incrementByN(1)">+1</el-button>
        |
        <el-button type="primary" @click="incrementByN(3)">+3</el-button>
        |
        <el-button type="primary" @click="decrementByN(7)">-7</el-button>

        <el-container style="margin-bottom: 10px">
            <el-row :gutter="20" align="middle" type="flex">
                <el-col :span="15">
                    <el-input v-model="input"
                              placeholder="请输入内容"
                              style="display: flex"></el-input>
                </el-col>
                <el-col :span="5">
                    <el-button type="primary" @click="login(input)">Login</el-button>
                </el-col>
                <el-col :span="15">
                    <el-input v-model="input"
                              placeholder="请输入内容"
                              style="display: flex"></el-input>
                </el-col>
                <el-col :span="5">
                    <el-button type="primary" @click="login(input)">Login</el-button>
                </el-col>
            </el-row>


        </el-container>
        <el-container>
            <el-row :gutter="20" align="middle" type="flex">
                <el-col :span="15">
                    <el-input v-model="input"
                              placeholder="请输入内容"
                              style="display: flex"></el-input>
                </el-col>
                <el-col :span="5">
                    <el-button type="primary" @click="login(input)">Login</el-button>
                </el-col>
                <el-col :span="15">
                    <el-input v-model="input"
                              placeholder="请输入内容"
                              style="display: flex"></el-input>
                </el-col>
                <el-col :span="5">
                    <el-button type="primary" @click="login(input)">Login</el-button>
                </el-col>
            </el-row>
        </el-container>

        <el-table
                :data="todoList"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="text"
                    label="事项"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="done"
                    label="是否完成"
                    :formatter="formatBoolean">
            </el-table-column>
        </el-table>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>待办任务完成数</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div class="text item">
                {{'姓名：'+userName}}
            </div>
            <div class="text item">
                {{'已完成： ' + doneTodoCount + '件'}}
            </div>
            <div class="text item">
                {{'已完成任务： ' + getTodoById(1).text}}
            </div>
        </el-card>
    </div>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'Home',
        data(){
            return {
                input: ''
            }
        },
        computed: {
            ...mapGetters([
                'countNow', 'todoList', 'doneTodos', 'doneTodoCount', 'getTodoById'
            ]),
            ...mapGetters('user', ['userName'])
        },
        methods: {
            ...mapActions([
                'incrementByN', 'decrementByN'
            ]),//将 `this.incrementByN()` 映射为 `this.$store.dispatch('incrementByN')`
            ...mapActions('user', ['login']),
            formatBoolean: function (row, column, cellValue) {
                let ret = ''  //你想在页面展示的值
                if (cellValue) {
                    ret = "是"  //根据自己的需求设定
                } else {
                    ret = "否"
                }
                return ret;
            }
        }
    }

</script>
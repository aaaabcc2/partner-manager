<script setup>
  import { Search, RefreshLeft, Plus } from '@element-plus/icons-vue'
  import {reactive, ref} from 'vue'
  import request from "@/utils/request"
  const name = ref('') 
  const address = ref('') 
  const pageNum =ref(2)
  const pageSize = ref(10)
  const total = ref(0)
  const state = reactive({
    tableData: [
      {name: 'admin', address: '合肥市庐阳区', phone: '13733364348'},
      {name: 'admin', address: '合肥市庐阳区', phone: '13733364348'},
      {name: 'admin', address: '合肥市庐阳区', phone: '13733364348'},
    ]
  })
  const multipleSelection = ref([])
  const handleSelectionChange = (val) => {
    multipleSelection.value = val
  }

  const load = () => {
    request.get('/user/page', {
      params: {
        name: name.value,
        address: address.value,
        pageNum: pageNum.value,
        pageSize: pageSize.value
      }
    }).then(res => {
      state.tableData = res.data.records
      total.value = res.data.total
    })
  }
  load()
</script>

<template>
  <div>
    <div>
      <el-input v-model="name" placeholder="请输入名称" class="w300" />
      <el-input v-model="name" placeholder="请输入名称" class="w300 ml5" />
      <el-button class="ml5" type="primary"><el-icon style="vertical-align: middle"><Search /></el-icon><span style="vertical-align: middle"> 搜索 </span></el-button>
      <el-button class="ml5" type="warning"><el-icon style="vertical-align: middle"><RefreshLeft /></el-icon><span style="vertical-align: middle"> 重置 </span></el-button>
      <el-button class="ml5" type="success"><el-icon style="vertical-align: middle"><Plus /></el-icon><span style="vertical-align: middle"> 新增 </span></el-button>
    </div>

    <div style="margin: 10px 0;">
      <el-table :data="state.tableData" stripe border @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="phone" label="联系方式"></el-table-column>
        <el-table-column label="操作" style="width: 180px;">
          <template #default="scope">
            <el-button type="primary">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    
    <div style="margin: 20px 0;">
      <el-pagination v-model:current-page="pageNum" v-model:page-size="pageSize" background layout="total, sizes, prev, pager, next, jumper" :total="total"/>
    </div>
  </div>
</template>

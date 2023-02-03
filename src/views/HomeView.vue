<script setup>
  import {  Document,  Menu as IconMenu,  Location,  Setting, Search, RefreshLeft, Plus} from '@element-plus/icons-vue'
  import {reactive, ref} from 'vue'
  const name = ref('') 
  const pageNum =ref(2)
  const pageSize = ref(10)
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
</script>

<template>
  <div>
    <div style="height: 60px; line-height: 60px; border-bottom: 1px solid #ccc; background-color: aliceblue;">
      <div style="display: flex;">
        <div style="width: 200px; color: dodgerblue; font-weight: bold; text-align: center; font-size: 24px;">
          后台管理
        </div>

        <div style=" flex: 1; display: flex;">
          <div style="flex: 1;"></div>
          <div style="width: 200px; text-align: right; padding-right: 20px;">
            头像
          </div>
        </div>
      </div>
    </div> 
    <div style="display: flex;">
      <div style="width: 200px; border-right: 1px solid #ccc; min-height: calc(100vh - 60px);">
        <el-menu router default-active="/" class="el-menu-vertical-demo">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="/">item one</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
      </div>
      <div style="flex: 1; padding: 10px;">
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
          <el-pagination v-model:current-page="pageNum" v-model:page-size="pageSize" background layout="total, sizes, prev, pager, next, jumper" :total="50"/>
        </div>
      </div>
    </div>
  </div>
</template>

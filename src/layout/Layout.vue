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
            <RouterView></RouterView>
            </div>
        </div>
        
    </div>
</template>

<script setup>
    import { RouterView } from 'vue-router'
    import {  Document,  Menu as IconMenu,  Location,  Setting } from '@element-plus/icons-vue'
</script>

<style scoped>

</style>
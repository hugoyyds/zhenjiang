<script setup>
import user from '../api/user.js'
import { onMounted, ref } from 'vue'

const tableData = ref([])

onMounted(async () => {
  const response = await user.users()
  const userList = response.data.data
  tableData.value = userList
})
</script>
<template>
  <el-table :data="tableData" stripe style="width: 50%">
    <el-table-column prop="createdAt" label="创建日期" />
    <el-table-column prop="username" label="用户名" />
  </el-table>
</template>

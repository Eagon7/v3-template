<script setup>
import { getTotal, getTopList, getReourceList } from '../../../api/dashboard.js'
onMounted(() => {
  getTotal().then(r => {
    total.value = r
  })
  getTopList().then(r => {
    const result = r.data.map(item => {
      return item.deptName
    })
    navigation.value = result
  })
  getReourceList().then(r => {
    let result = r.rows.map(item => {
      return {
        name: item.subName,
        subscription: item.subCount,
      }
    })
    let title = r.rows.map(item => {
      return item.subSource
    })
    titleResource = title
    resources.value = result
  })
})
let titleResource = ref()
let total = ref([])
let active = ref('地市1')
let resources = ref([
  { name: '省一窗受理平台-受理数据信息', subscription: '60次' },
  { name: '企业基本信息代理', subscription: '59次' },
  { name: '省一窗受理平台-特别程序开始', subscription: '57次' },
  { name: '省一窗受理平台-特别程序开始', subscription: '57次' },
  { name: '省一窗受理平台-特别程序开始', subscription: '57次' },
  { name: '省一窗受理平台-特别程序开始', subscription: '57次' },
  { name: '省一窗受理平台-特别程序开始', subscription: '57次' },
  { name: '省一窗受理平台-特别程序开始', subscription: '57次' },
  { name: '省一窗受理平台-特别程序开始', subscription: '57次' },
  { name: '省一窗受理平台-特别程序开始', subscription: '57次' },
  { name: '省一窗受理平台-特别程序开始', subscription: '57次' },
])
let navigation = ref([])
let input1 = ref('')
let searchShow = ref(false)
let activeName = ref('first')
function titleResourceClick(index) {
  console.log(index)
}
function show() {
  searchShow.value = !searchShow.value
}

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const value = ref('')
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Header -->
    <header class="bg-white shadow">
      <div
        class="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <div class="text-xl font-semibold">河南省一体化政务大数据平台</div>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-600 hover:text-blue-600">工作台</a>
          <a href="#" class="text-gray-600 hover:text-blue-600">退出</a>
        </div>
      </div>
    </header>

    <div
      class="w-full flex items-center justify-center p-3 bg-white border border-t-slate-400"
    >
      <ul class="flex space-x-4">
        <li><a href="#" class="text-gray-600 hover:text-blue-600">首页</a></li>
        <li>
          <a href="#" class="text-gray-600 hover:text-blue-600">政策动态</a>
        </li>
        <li>
          <a href="#" class="text-gray-600 hover:text-blue-600">数据共享交换</a>
        </li>
        <li>
          <a href="#" class="text-gray-600 hover:text-blue-600">数据治理</a>
        </li>
        <li>
          <a href="#" class="text-gray-600 hover:text-blue-600">数据服务</a>
        </li>
        <li>
          <a href="#" class="text-gray-600 hover:text-blue-600">标准规范</a>
        </li>
        <li>
          <a href="#" class="text-gray-600 hover:text-blue-600">人工智能</a>
        </li>
        <li>
          <a href="#" class="text-gray-600 hover:text-blue-600">资料中心</a>
        </li>
      </ul>
    </div>
    <!-- Main Content -->
    <section
      class="text-center h-80"
      style="
        background: url('http://38.147.190.229:48080/profile/upload/2024/08/02/01_20240802050353A001.png')
          no-repeat center center/cover;
      "
    >
      <div class="text-white py-20">
        <el-input
          v-model="input1"
          style="max-width: 600px"
          placeholder="Please input"
          class="h-10 rounded"
        >
          <template #prepend>
            <el-button @click="show"> 高级搜索 </el-button>
          </template>
        </el-input>
        <button class="bg-orange-500 p-[0.4rem] ml-2 rounded">搜索</button>
        <!-- <button class="bg-white p-2 ml-2   text-gray-600">高级搜索</button>
        <input type="text" placeholder="请输入搜索内容" class="w-[45%] p-2 rounded" />
         -->
      </div>
      <div
        class="w-[30rem] h-[15rem] bg-white -mt-[5rem] ml-[27rem] rounded"
        v-show="searchShow"
      >
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="政务信息资源目录" name="first">
            <div class="pt-3">
              <el-input
                v-model="input1"
                style="max-width: 600px"
                placeholder="请输入关键字"
                class="h-10 rounded"
              ></el-input>
              <div class="grid grid-cols-3 gap-4 pt-3">
                <el-select v-model="value" placeholder="Select" size="large">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>

                <el-select v-model="value" placeholder="Select" size="large">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>

                <el-select v-model="value" placeholder="Select" size="large">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <br />
              <div class="flex justify-center items-center">
                <el-button type="primary">确定</el-button>
                <el-button type="danger">取消</el-button>
                <el-button>重置</el-button>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="应用案例" name="second">Config</el-tab-pane>
          <el-tab-pane label="新闻中心" name="third">Role</el-tab-pane>
          <el-tab-pane label="资料中心" name="fourth">Task</el-tab-pane>
        </el-tabs>
      </div>
    </section>
    <main class="container mx-auto px-4 py-8">
      <!-- Search Bar -->

      <!-- Navigation -->
      <div class="flex">
        <section class="my-8 w-4/6 relative">
          <h2
            class="text-xl font-semibold mb-4 p-3 border-b border-b-[#c4c3c3]"
          >
            服务导航
          </h2>
          <span
            class="block absolute w-24 h-1 bg-blue-500 top-[2.7rem] left-[0.3rem]"
          ></span>

          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane label="部门" name="first">
              <div class="grid grid-cols-4 gap-4">
                <button
                  v-for="(nav, index) in navigation"
                  :key="index"
                  class="bg-[#F6F8FF] text-sm p-4 rounded shadow hover:bg-gray-100"
                >
                  {{ nav }}
                </button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="基础" name="second">
              <div class="grid grid-cols-4 gap-4">
                <button
                  v-for="(nav, index) in navigation"
                  :key="index"
                  class="bg-[#F6F8FF] text-sm p-4 rounded shadow hover:bg-gray-100"
                >
                  {{ nav }}
                </button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="主题" name="third">
              <div class="grid grid-cols-4 gap-4">
                <button
                  v-for="(nav, index) in navigation"
                  :key="index"
                  class="bg-[#F6F8FF] text-sm p-4 rounded shadow hover:bg-gray-100"
                >
                  {{ nav }}
                </button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="地市" name="third">
              <div class="grid grid-cols-4 gap-4">
                <button
                  v-for="(nav, index) in navigation"
                  :key="index"
                  class="bg-[#F6F8FF] text-sm p-4 rounded shadow hover:bg-gray-100"
                >
                  {{ nav }}
                </button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="国家" name="fourth">
              <div class="grid grid-cols-4 gap-4">
                <button
                  v-for="(nav, index) in navigation"
                  :key="index"
                  class="bg-[#F6F8FF] text-sm p-4 rounded shadow hover:bg-gray-100"
                >
                  {{ nav }}
                </button>
              </div>
            </el-tab-pane>
          </el-tabs>
        </section>
        <section class="my-8 pl-10 relative flex-1">
          <h2
            class="text-xl font-semibold mb-4 p-3 border-b border-b-[#c4c3c3]"
          >
            服务导航
          </h2>
          <!-- <h2 class="text-xl font-semibold mb-4">服务专区</h2> -->
          <span
            class="block absolute w-24 h-1 bg-blue-500 top-[2.7rem] left-[2.8rem]"
          ></span>
          <div class="grid grid-cols-2 gap-4 flex-1">
            <div
              class="bg-[url('/src/assets/banner.jpg')] bg-cover h-20 text-center flex items-center justify-center"
            >
              资源订阅
            </div>
            <div
              class="bg-[url('/src/assets/banner.jpg')] bg-cover h-20 text-center flex items-center justify-center"
            >
              资源订阅
            </div>
            <div
              class="bg-[url('/src/assets/banner.jpg')] bg-cover h-20 text-center flex items-center justify-center"
            >
              资源订阅
            </div>
            <div
              class="bg-[url('/src/assets/banner.jpg')] bg-cover h-20 text-center flex items-center justify-center"
            >
              资源订阅
            </div>
          </div>
        </section>
      </div>

      <!-- Directory Updates -->

      <div class="relative">
        <h2 class="text-xl font-semibold mb-4 p-3 border-b border-b-[#c4c3c3]">
          服务导航
        </h2>
        <span
          class="block absolute w-24 h-1 bg-blue-500 top-[2.7rem] left-[0.3rem]"
        ></span>
      </div>
      <div class="flex h-[30rem]">
        <div
          class="w-2/5 grid grid-cols-1 grid-rows-1fr repeat(4, minmax(0, 1fr)) gap-4"
        >
          <div
            v-for="(item, index) in titleResource"
            @click="titleResourceClick(index)"
            :key="item"
            class="cursor-pointer font-bold text-xl bg-blue-500 bg-[url('/src/assets/banner.jpg')] bg-cover flex justify-center items-center"
          >
            {{ item }}
          </div>
        </div>
        <el-table :data="resources" class="bg-[url('/src/assets/banner.jpg')]">
          <el-table-column prop="name" label="新闻名称" />
          <el-table-column prop="subscription" label="订阅数" width="100" />
        </el-table>
      </div>
      <div class="relative">
        <h2 class="text-xl font-semibold mb-4 p-3 border-b border-b-[#c4c3c3]">
          数据使用
        </h2>
        <span
          class="block absolute w-24 h-1 bg-blue-500 top-[2.7rem] left-[0.3rem]"
        ></span>
      </div>
      <div>
        <div>
          <div
            class="grid grid-cols-3 gap-4 bg-[#F2F6FF] h-32 pt-10 border border-b-blue-300"
          >
            <div class="text-center">
              目录总个数(个)
              <span class="font-bold text-2xl">{{ total.count_country }}</span>
            </div>
            <div class="text-center">
              资源总数(条)
              <span class="font-bold text-2xl">{{ total.count_province }}</span>
            </div>
            <div class="text-center">
              资源订阅数(次)
              <span class="font-bold text-2xl">{{ total.count_city }}</span>
            </div>
          </div>
          <div class="grid grid-cols-6 gap-4 bg-[#F2F6FF] h-32">
            <div class="pl-32">
              <p class="text-3xl text-[#596381] text-center">4557</p>
              <p class="text-[#596381] text-xs pt-3 text-center">
                接口订阅数量（次）
              </p>
            </div>
            <div class="pl-32">
              <p class="text-3xl text-[#596381] text-center">4557</p>
              <p class="text-[#596381] text-xs pt-3 text-center">
                接口订阅数量（次）
              </p>
            </div>
            <div class="pl-32">
              <p class="text-3xl text-[#596381] text-center">4557</p>
              <p class="text-[#596381] text-xs pt-3 text-center">
                接口订阅数量（次）
              </p>
            </div>
            <div class="pl-32">
              <p class="text-3xl text-[#596381] text-center">4557</p>
              <p class="text-[#596381] text-xs pt-3 text-center">
                接口订阅数量（次）
              </p>
            </div>

            <div class="pl-32">
              <p class="text-3xl text-[#596381] text-center">4557</p>
              <p class="text-[#596381] text-xs pt-3 text-center">
                接口订阅数量（次）
              </p>
            </div>
          </div>
        </div>
        <div class="relative">
          <h2
            class="text-xl font-semibold mb-4 p-3 border-b border-b-[#c4c3c3]"
          >
            门户入口
          </h2>
          <span
            class="block absolute w-24 h-1 bg-blue-500 top-[2.7rem] left-[0.3rem]"
          ></span>
        </div>
        <div>
          <el-tabs v-model="active">
            <el-tab-pane label="地市1" name="地市1">
              <div class="grid grid-cols-4 gap-4">
                <button
                  v-for="(nav, index) in navigation"
                  :key="index"
                  class="bg-[#F6F8FF] text-sm p-4 rounded shadow hover:bg-gray-100"
                >
                  {{ nav }}
                </button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="地市2" name="地市2">地市2</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>

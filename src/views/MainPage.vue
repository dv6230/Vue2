<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider>
            <div class="logo" />
            <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
                <a-menu-item>
                    <router-link to="/main/first">
                        <a-icon type="pie-chart" />
                        <span>Option 1</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item>
                    <router-link to="/main/second">
                        <a-icon type="desktop" />
                        <span>Option 2</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item>
                    <a-icon type="file" />
                    <span>File</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0" />
            <a-layout-content style="margin: 0 16px">
                <a-breadcrumb style="margin: 16px 10px"></a-breadcrumb>
                <div class="content-panel">
                    <router-view></router-view>
                </div>
            </a-layout-content>
            <!-- <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer> -->
        </a-layout>
    </a-layout>
</template>
<script>
export default {
    data() {
        return {
            collapsed: false,
        };
    },
};
</script>
  
<style>
#components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}

.content-panel {
    background: rgb(255, 255, 255);
    min-height: calc(100vh - 64px - 69px);
    padding: 30px;
}
</style>
  
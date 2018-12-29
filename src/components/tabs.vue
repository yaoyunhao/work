<template>
    <div class="tabs">
        <p v-for="(itm,ind) in tabs" :key="ind">
            <i :class="itm.class"></i>
            <span>{{itm.name}}</span>
        </p>
    </div>
</template>
<script>
export default {
  name      : "Tabs",
  props     : ["tabs"],
  components: {}
};
</script>
<style>
</style>



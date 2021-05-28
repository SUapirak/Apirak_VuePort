<template>
  <div class="text-center">
    <div class="mt-10 mb-10 text-5xl">
      <b><h1 v-text="phead"></h1></b>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-10 mb-10 text-2xl">
      <p class="col-span-1 text-right">
        Email: <br/>
        Phone Number:
      </p>
      <p class="col-span-2 text-left">
        {{gmail}}<br/>
        {{phonenum}}
      </p>
    </div>
    <div>
      <router-link :to="{name: 'home'}">
        <p class="text-center ml-auto m-auto text-2xl bg-red-500 w-32">Home</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phead: "My Contact",
      gmail: "su.apirak_st@tni.ac.th",
      phonenum: "095-918-5757",
    };
  },
};
</script>
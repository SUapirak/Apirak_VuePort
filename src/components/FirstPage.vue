<template>
  <div>
    <div class="mt-10 mb-10 text-5xl text-center">
      <b>
        <h1 v-text="phead"></h1>
      </b>
    </div>
    <img src="@/assets/myimage.jpg" class="w-1/6 ml-auto mr-auto object-center">
    <div class="grid grid-cols-3 gap-4 mt-10 mb-10">
      <p class="col-span-1 text-2xl text-right">
        Name : <br/>
        Age :<br/>
        College :
      </p>
      <p class="col-span-2 text-2xl text-left">
        {{fname}} {{lname}} <br/>
        {{age}} <br/>
        {{coll}}
      </p>
    </div>
    <div>
      <router-link :to="{name: 'contact'}">
        <p class="text-center ml-auto m-auto text-2xl bg-red-500 w-32">Contact</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phead: "My Portfolio",
      fname: "Apirak",
      lname: "Suwan",
      age: 21,
      coll: "Thai-Nichi Institute of Technology",
    };
  },
};
</script>
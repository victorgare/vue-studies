<template>
  <div class="col-md-12">
    <Item v-for="(item, index) in items" :key="index" :passedItem="item" :type="type"/>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  data() {
    return {
      type: this.$route.params.type,
      items: []
    };
  },
  watch: {
    $route: "fetchItems"
  },
  methods: {
    fetchItems() {
      this.items = [];
      this.type = this.$route.params.type;

      const initial_ids = [1, 13, 14];

      for (const id of initial_ids) {
        fetch(`https://swapi.co/api/${this.type}/${id}`, {
          method: "GET",
          mode: "cors"
        })
          .then(response => response.json())
          .then(json => this.items.push(json));
      }
    }
  },
  created() {
    this.fetchItems();
  },
  components: {
    Item
  }
};
</script>

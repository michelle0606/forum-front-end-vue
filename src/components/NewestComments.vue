<template>
  <div class="card">
    <div class="card-header">最新評論</div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <a href="#">{{ comment.Restaurant.name }}</a>
        </h4>
        <p>{{ comment.text }}</p>
        <small>by {{comment.User.name}} at {{ comment.createdAt | fromNow }}</small>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    }
  },
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
};
</script>
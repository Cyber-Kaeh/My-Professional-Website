<template>
  <div
    v-if="show"
    class="modal fade show"
    tabindex="-1"
    style="display: block"
    @click.self="close"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="btn-close" @click="close"></button>
        </div>
        <div class="modal-body markdown-content" v-html="description"></div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="close">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    methods: {
      close() {
        this.$emit("close")
      },
    },
  }
</script>

<style>
  .modal {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .markdown-content {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    text-align: left;
  }

  .markdown-content h1,
  .markdown-content h2,
  .markdown-content h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .markdown-content p {
    margin-bottom: 10px;
  }

  .markdown-content ul {
    margin-bottom: 10px;
    padding-left: 20px;
    list-style-type: square;
  }

  .markdown-content a {
    color: #007bff;
    text-decoration: none;
  }

  .markdown-content a:hover {
    text-decoration: underline;
  }
</style>

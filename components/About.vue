<template>
  <div class="tw-rounded-md tw-border-2 tw-border-gray-200 tw-shadow-md tw-bg-gray-50">
    <div class="tw-text-center tw-flex tw-justify-around">
      <div class="tw-text-center tw-font-medium tw-text-3xl tw-my-2 tw-text-align-bottom">About us</div>
    </div>
    <div class="tw-text-center tw-mx-3 tw-px-2">
      <slot name="p1"></slot>
      <hr class="tw-my-3" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paras: {
      type: String,
      default: '',
    },
  },
}
</script>

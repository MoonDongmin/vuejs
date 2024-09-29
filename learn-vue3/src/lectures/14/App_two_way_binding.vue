<template>
  <div>
    <h2>input value</h2>
    <input type="text" v-model="inputValue" />
    <!--           :value="inputValue" @input="(event) => (inputValue = event.target.value)" />-->
    <div>{{ inputValue }}</div>

    <h2>textarea value</h2>
    <textarea v-model="textareaValue"></textarea>
    <!--      :value="textareaValue"-->
    <!--      @input="(event) => (textareaValue = event.target.value)"-->

    <div>{{ textareaValue }}</div>

    <h2>checkbox value</h2>
    <label for="checkbox">{{ checkboxValue }}</label>
    <input type="checkbox" id="checkbox" :checked="checkboxValue" v-model="checkboxValue" />
    <!--      :checked="checkboxValue"-->
    <!--      @change="(event) => (checkboxValue = event.target.checked)"-->
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputValue = ref('')

    const textareaValue = ref('')

    const checkboxValue = ref(true)
    return {
      inputValue,
      textareaValue,
      checkboxValue
    }
  }
}
</script>

<style lang="scss" scoped></style>

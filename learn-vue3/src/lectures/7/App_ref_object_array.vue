<template>
	<div></div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		// ref -> Object
		const count = ref(0);
		const state = reactive({
			count,
		});
		count.value++;
		count.value++;
		// console.log(count.value);
		// console.log('state.count: ', state.count);

		// ref -> Array
		const message = ref('Hello');
		const arr = reactive([message]);
		console.log('arr[0]: ', arr[0].value); // 배열에 접근할 때는 .이 붙어야함

		return {};
	},
};
</script>

<style lang="scss" scoped></style>

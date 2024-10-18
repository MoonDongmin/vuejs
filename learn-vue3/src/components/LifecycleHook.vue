<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" value="hello world!" />
		<hr />
		<button @click="visible = !visible">Toggle Child</button>
		<LifecycleChild v-if="visible"></LifecycleChild>
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import LifecycleChild from '@/components/LifecycleChild.vue';

export default {
	components: { LifecycleChild },
	setup() {
		// console.log('setup');
		const inputRef = ref(null);
		const message = ref('');
		const visible = ref(false);
		// onBeforeMount(() => {
		// 	console.log('onBeforeMount', inputRef.value);
		// });
		// onMounted(() => { // 맨 마지막에 됨
		// 	console.log('onMounted', inputRef.value.value);
		// });

		// onBeforeUpdate(() => {
		// 	console.log('onBeforeUpdate', message.value);
		// 	console.log(
		// 		'DOM Content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });
		// onUpdated(() => {
		// 	console.log('onUpdated', message.value);
		// 	console.log(
		// 		'DOM Content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });
		return { inputRef, message, visible };
	},
	// data: () => ({
	// 	dataMessage: 'data Message',
	// }),
	// beforeCreate() {
	// 	// 컴포넌트 초기화될 때
	// 	console.log('beforeCreate', this.dataMessage);
	// },
	// created() {
	// 	console.log('created', this.dataMessage);
	// },
};
</script>

<style lang="scss" scoped></style>

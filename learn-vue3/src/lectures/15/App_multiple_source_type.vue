<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const obj = reactive({
			count: 0,
		});

		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldValue) => {
		// 		console.log('sum: ', sum);
		// 		console.log('oldValue', oldValue);
		// 	},
		// );

		// watch([x, y], ([newX, newY]) => {
		// 	console.log(newX, newY);
		// });

		// watch(
		// 	() => obj.count, // getter 함수를 씀. 이렇게 하면 가능함
		// 	(newValue, oldValue) => {
		// 		// obj.count 이는 반응형 데이터가 아니라 그냥 number임
		// 		console.log('newValue: ', newValue);
		// 		// console.log('oldValue: ', oldValue);
		// 	},
		// );

		// 이렇게하면 같은 값이 찍힘
		// watch(
		// 	obj, // getter 함수를 씀. 이렇게 하면 가능함
		// 	(newValue, oldValue) => {
		// 		// obj.count 이는 반응형 데이터가 아니라 그냥 number임
		// 		console.log('newValue: ', newValue);
		// 		console.log('oldValue: ', oldValue);
		// 	},
		// );

		const person = reactive({
			name: '문동민',
			age: 25,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		// watch(person, newValue => {
		// 	console.log('newValue: ', newValue);
		// });
		watch(
			() => person.obj,
			newValue => {
				console.log('newValue: ', newValue);
			},
		);
		return { x, y, obj, person };
	},
};
</script>

<style lang="scss" scoped></style>

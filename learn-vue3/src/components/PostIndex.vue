<template>
	<main>
		<div class="container py-4">
			<PostCreate @create-post="createPost"></PostCreate>
			<hr class="my-4" />
			<div class="row g-3">
				<div v-for="post in posts" :key="post.id" class="col col-4">
					<AppCard
						:title="post.title"
						:contents="post.contents"
						:type="post.type"
						:is-like="post.isLike"
						@toggle-like="post.isLike = !post.isLike"
					></AppCard>
				</div>
			</div>
			<hr class="my-4" />
			<LabelInput
				v-model="userName"
				label="이름"
				class="parent"
				style="color: red"
				id="parent-id"
			></LabelInput>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import LabelTitle from '@/components/LabelTitle.vue';
import { reactive, ref } from 'vue';
import Username from '@/components/Username.vue';

export default {
	components: { PostCreate, AppCard, LabelInput },
	setup() {
		const obj = reactive({
			title: '제목2',
			contents: '내용2',
		});
		const posts = reactive([
			{ id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
			{ id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'news' },

			{ id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },

			{
				id: 4,
				title: '제목4',
				contents: '내용4',
				isLike: false,
				type: 'notice',
			},

			{
				id: 5,
				title: '제목5',
				contents: '내용5',
				isLike: false,
				type: 'notice',
			},
		]);

		const createPost = newPost => {
			console.log('newPost: ', newPost);
			posts.push(newPost);
		};

		const userName = ref('');

		const firstname = ref('');
		const lastname = ref('');

		return { obj, posts, createPost, userName, firstname, lastname };
	},
};
</script>

<style lang="scss" scoped></style>

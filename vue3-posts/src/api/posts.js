// axios
const posts = [
  { id: 1, title: '제목1', content: '내용1', createdAt: '2024-10-21' },
  { id: 2, title: '제목2', content: '내용2', createdAt: '2025-10-22' },
  { id: 3, title: '제목3', content: '내용3', createdAt: '2026-10-23' },
  { id: 4, title: '제목4', content: '내용4', createdAt: '2027-10-24' },
  { id: 5, title: '제목5', content: '내용5', createdAt: '2028-10-25' },
]

export function getPosts() {
  return posts
}

export function getPostById(id) {
  return posts.find(item => item.id === id)
}

import { NextResponse } from 'next/server'
// import { posts } from "@/data/posts";

// 전체 글 조회 - GET 요청 처리
export async function GET() {
  try {
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: '게시글을 불러오는데 실패했습니다.' }, { status: 500 })
  }
}

// 글 생성 - POST 요청 처리
export async function POST(req) {
  try {
    const data = await req.json()

    if (!data.title || !data.content) {
      return NextResponse.json({ error: '제목과 내용은 필수입니다.' }, { status: 400 })
    }

    const newPost = {
      id: posts.length + 1,
      title: data.title,
      content: data.content,
      createdAt: new Date().toLocaleDateString(),
    }

    posts.push(newPost)

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: '게시글을 생성하는데 실패했습니다.' }, { status: 500 })
  }
}

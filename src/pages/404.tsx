import * as React from "react"
import { HeadFC, Link } from "gatsby"

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <h1 className="mb-4 text-4xl font-bold text-gray-900">404: Page not found</h1>
      <p className="px-5 mb-8 text-gray-600">
        이 페이지는 준비 중입니다.
      </p>
      <Link to="/" className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
        메인화면으로 돌아가기
      </Link>
    </div>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>About Page</title>

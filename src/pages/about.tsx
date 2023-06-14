import { HeadFC } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const AboutPage: React.FC = () => {
    return (
        <Layout>
            <h1 className="font-serif text-3xl">About Yongtae</h1>
            <div className="h-2"/>
            <h2 className="text-sm text-slate-600">용태를 소개합니다</h2>
            <div className="h-4"/>
            <ul className="p-4 leading-loose list-disc text-slate-600">
                <li>에이블리코퍼레이션 소프트웨어 엔지니어</li>
                <li>유니크굿컴퍼니 소프트웨어 엔지니어</li>
                <li>산업기능요원 편입</li>
                <li>카이스트 바이오및뇌공학과 학부과정 재학</li>
                <li>카이스트 사진동아리 빛따라 전임 회장</li>
                <li>카이스트 부설 한국과학영재학교 졸업</li>
            </ul>
        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>용태 소개</title>
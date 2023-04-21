import { HeadFC } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className="relative flex items-center w-full sm:justify-center h-96">
        <div className="flex flex-col items-start">
          <h1 className="relative inline-block p-8 font-serif text-4xl font-medium leading-normal tracking-wide text-black ">
            From Brainwaves<br/>
            To Innovation
          </h1>
          <p className="relative inline-block pl-8 text-sm leading-5">
            <b>김용태</b><br/>
            개발하는 뇌공학도<br/>
            <a href="https://ably.team/" className="underline">에이블리코퍼레이션</a> 소프트웨어 엔지니어 <small>2022 ~</small><br/>
            <a href="https://bioeng.kaist.ac.kr/" className="underline">카이스트 바이오및뇌공학과</a> 학부과정 재학 <small>2019 ~</small>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>용태</title>

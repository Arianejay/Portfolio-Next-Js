import React, { useState } from 'react'
import Image from 'next/image'

// assets
import Html from '../assets/images/html.png'
import Css from '../assets/images/css.png'
import ReactJs from '../assets/images/react.png'
import Next from '../assets/images/next.png'
import Tailwind from '../assets/images/tailwind.png'
import MySql from '../assets/images/mysql.png'
import Postgres from '../assets/images/postgres.png'
import MongoDb from '../assets/images/mongodb.png'
import Node from '../assets/images/node.png'
import Express from '../assets/images/express.png'
import Typescript from '../assets/images/typescript.png'
import Javascript from '../assets/images/javascript.png'
import Graphql from '../assets/images/graphql.png'
import Insomnia from '../assets/images/insomnia.png'
import Git from '../assets/images/git.png'
import Github from '../assets/images/github.png'

const SkillsIcon: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-evenly h-full mt-[7rem] sm:mt-[8rem]">
      <div className="flex w-full">
        <div className="w-[50%] flex flex-col justify-center text-right tracking-[0.1rem] border-r-[1.5px] px-4 py-4 sm:px-2 sm:py-2">
          <h3 className="text-[1.2rem] sm:text-[1rem]">Front and Back-End</h3>
          <p className="opacity-50 sm:text-[0.8rem]">
            HTML, CSS, Tailwind, React, Next.Js, Node.Js, Express.Js
          </p>
        </div>
        <div className="w-[50%] flex flex-wrap items-center gap-2 sm:gap-[0.25rem] pl-4">
          <Image src={Html} alt="html" />
          <Image src={Css} alt="css" />
          <Image src={Tailwind} alt="tailwind" />
          <Image src={ReactJs} alt="react" />
          <Image src={Next} alt="next" />
          <Image src={Node} alt="node" />
          <Image src={Express} alt="express" />
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-[50%] flex flex-col justify-center text-right tracking-[0.1rem] border-r-[1.5px] px-4 py-4 sm:px-2 sm:py-2">
          <h3 className="text-[1.2rem] sm:text-[1rem]">Databases & Tools</h3>
          <p className="opacity-50 sm:text-[0.8rem]">
            MySQL, PostgreSQL, MongoDB, Insomnia, Git, Github
          </p>
        </div>
        <div className="w-[50%] flex flex-wrap items-center gap-2 sm:gap-[0.25rem] pl-4">
          <Image src={MySql} alt="mysql" />
          <Image src={Postgres} alt="postgres" />
          <Image src={MongoDb} alt="mongodb" />
          <Image src={Insomnia} alt="insomnia" />
          <Image src={Git} alt="git" />
          <Image src={Github} alt="github" />
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-[50%] flex flex-col justify-center text-right tracking-[0.1rem] border-r-[1.5px] px-4 py-4 sm:px-2 sm:py-2">
          <h3 className="text-[1.2rem] sm:text-[1rem]">
            Languages & Query Languages
          </h3>
          <p className="opacity-50 sm:text-[0.8rem]">
            JavaScript, TypeScript, GraphQL
          </p>
        </div>
        <div className="w-[50%] flex flex-wrap items-center gap-2 sm:gap-[0.25rem] pl-4">
          <Image src={Javascript} alt="javascript" />
          <Image src={Typescript} alt="typescript" />
          <Image src={Graphql} alt="graphql" />
        </div>
      </div>
    </div>
  )
}

export default SkillsIcon

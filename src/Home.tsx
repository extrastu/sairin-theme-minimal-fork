import Head from "next/head"
import Link from "next/link"
import dayjs from 'dayjs'
import { Footer } from "./Footer"

import { HomePageThemeProps } from '@sairinjs/core'

export default function Home(props: HomePageThemeProps) {
  return (
    <>
      <Head>
        <title>{props.themeConfig.title}</title>
      </Head>
      <div className="container mx-auto  sm:px-0 relative ">
        <div className="text-3xl px-4 font-bold mb-4 sticky top-0 py-3 flex items-center text-slate-900 dark:text-slate-200  backdrop-blur-sm ">
          {props.themeConfig.title}
        </div>


        <div className="mt-2 mb-8 max-w-2xl  px-4">
          <div className="flex gap-2 dark:text-gray-400">
            {props.themeConfig.links?.map((link, index) => {
              return (
                <>
                  <a className="underline " target="_blank" href={link.url} key={link.url}>
                    {link.title}
                  </a>
                  {index !== props.themeConfig.links.length - 1 && '•'}
                </>
              )
            })}
          </div>

        </div>

        <div className=" px-4">
          {props.posts.map(post => {
            return (
              <div key={post.id} className="text-xl my-8">
                <Link href={`/${post.attributes.path}`}>
                  <a className="hover:underline dark:text-gray-400">
                    {post.title}
                  </a>
                </Link>

                <div className="text-sm dark:text-gray-500">
                  {dayjs(post.createdAt).format('DD/MM/YYYY')}
                </div>
              </div>
            )
          })}
        </div>


        <div className="my-12">
          <Footer />
        </div>
      </div>

    </>
  )
}
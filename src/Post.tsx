import { PostPageThemeProps } from '@sairinjs/core'
import dayjs from 'dayjs'
import Head from 'next/head'
import Link from 'next/link'
import { Footer } from './Footer'
import { OpenGraph } from './OpenGraph'

export default function Post(props: PostPageThemeProps) {

  if (!props.post) {
    return null
  }

  return (
    <div>

      <Head>
        <title>{props.post.title} - {props.themeConfig.title}</title>
        <OpenGraph post={props.post} />
      </Head>

      <div className="container mx-auto  max-w-2xl px-4 sm:px-0 relative bg-slate-50/90 dark:bg-slate-600/90">

        <div className='sticky top-0 py-3 flex items-center text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-600/90 backdrop-blur-sm'>
          <div className="flex text-2xl font-bold mb-4 ">
            <Link href="/">{props.themeConfig.title}</Link>
          </div>
        </div>

        <div className="mb-8">
          <div className='text-3xl font-medium dark:text-gray-400'>
            {props.post.title}
          </div>

          <div className='flex mt-4 items-center gap-2 dark:text-gray-400'>
            <img className='w-8 h-8 rounded-full' src={props.post.author.avatarUrl}></img>
            <a target='_blank' href={props.post.author.url}>{props.post.author.login}</a>
            <a className='underline text-sm' target='_blank' href={props.post.url}>View on GitHub</a>
          </div>

          <div className='my-8'>
            <div className='flex gap-4 flex-wrap'>
              {props.post.reactionGroups.filter(group => group.reactors.totalCount !== 0).map(reactionGroup => {
                return (
                  <a href={props.post?.url} target="_blank">
                    <div className='flex gap-2 bg-blue-50 border border-blue-100 px-4 py-1 rounded-full items-center'>
                      <span className='text-md'>{{
                        'THUMBS_UP': '👍',
                        'THUMBS_DOWN': '👎',
                        'LAUGH': '😄',
                        'HOORAY': '🎉',
                        'CONFUSED': '😕',
                        'HEART': '❤️',
                        'ROCKET': '🚀',
                        'EYES': '👀'
                      }[reactionGroup.content]}</span>
                      <span className='text-sm font-sans'>{reactionGroup.reactors.totalCount}</span>
                    </div>
                  </a>
                )
              })}

              {/* {props.post.labels.nodes.map(label => {
                return (
                  label.name !== 'published' ? <a href={label.url} target="_blank">
                    <div className='flex gap-2 border border-blue-100 px-4 py-1 rounded-full items-center' style={{ backgroundColor: "#" + label.color }}>
                      <span className='text-md'>{label.name}</span>
                    </div>
                  </a> : null
                )
              })} */}
            </div>
          </div>
        </div>

        <div className="post-body dark:text-gray-400" dangerouslySetInnerHTML={{ __html: props.post.html }}>

        </div>

        <hr className='my-12' />

        <div className="font-sans">
          {/* <h1 className='text-md mb-8'>🗣 Comments</h1> */}

          <div className='mb-12'>
            <a target={'_blank'} href={props.post.url} className='font-medium border border-gray-700 hover:bg-gray-700 hover:text-gray-100 transition-all text-gray-700 text-sm rounded px-4 py-2'>Add comment</a>
          </div>

          {props.post.comments.nodes.map(comment => {
            return (
              <div className='mb-8'>
                <div className='flex items-center gap-2' >
                  <img className='w-8 h-8 rounded-full' src={comment.author.avatarUrl} alt="" />

                  <span className='font-medium'>{comment.author.login}</span>

                </div>

                <div dangerouslySetInnerHTML={{ __html: (comment as any).html }} className='mt-2 mb-2 text-gray-800 post-body font-sans'>
                </div>

                <div className='mt-1 flex text-sm text-gray-500 items-center gap-2'>
                  <a target={'_blank'} href={comment.url} className='hover:underline'>Reply</a>
                  <span>•</span>
                  <span className=''>{dayjs(comment.createdAt).format('YYYY-MM-DD')}</span>

                </div>
              </div>
            )
          })}

        </div>

        <div className="my-12">
          <Footer />
        </div>


      </div>

    </div>
  )
}
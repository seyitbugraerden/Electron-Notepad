import { formatDate } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  const formattedDate = formatDate(lastEditTime)

  return (
    <div
      className={`${className} cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75 ${isActive ? 'bg-zinc-400/75' : 'hover:bg-zinc-500/75'}`}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{formattedDate}</span>
    </div>
  )
}

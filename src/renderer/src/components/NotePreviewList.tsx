import { ComponentProps } from 'react'
import { notesMock } from '../store/mocks'
import { NotePreview } from './NotePreview'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (notesMock.length === 0) {
    return (
      <ul className={`${className} text-center pt-4`} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {notesMock.map((x, idx) => (
        <NotePreview key={idx} {...x} />
      ))}
    </ul>
  )
}

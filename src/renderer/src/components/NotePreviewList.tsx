import { ComponentProps } from 'react'
import { notesMock } from '../store/mocks'
import { NotePreview } from './NotePreview'
export const NotePreviewList = ({ ...props }: ComponentProps<'ul'>) => {
  return (
    <ul {...props}>
      {notesMock.map((x, idx) => (
        <NotePreview key={idx} {...x} />
      ))}
    </ul>
  )
}

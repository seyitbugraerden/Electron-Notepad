import { useNotesList } from '@renderer/hooks/useNotesList'
import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList()

  if (notes.length === 0) {
    return (
      <ul className={`${className} text-center pt-4`} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {notes.map((x, idx) => (
        <NotePreview key={idx} {...x} />
      ))}
    </ul>
  )
}

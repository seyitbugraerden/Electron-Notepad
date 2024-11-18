import { useNotesList } from '@renderer/hooks/useNotesList'
import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'

export type PreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({ onSelect, className, ...props }: PreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

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
        <NotePreview
          key={idx}
          isActive={selectedNoteIndex === idx}
          onClick={handleNoteSelect(idx)}
          {...x}
        />
      ))}
    </ul>
  )
}

import { notesAtom, selectedNoteIndexAtom } from '@renderer/store'
import { useAtom } from 'jotai'

export const useNotesList = ({ onSelect = () => {} }: { onSelect?: () => void }) => {
  const [notes] = useAtom(notesAtom)
  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom)

  const handleNoteSelect = (index: number) => async () => {
    setSelectedNoteIndex(index)
    onSelect()
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}

import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const selected = useAtomValue(selectedNoteAtom)
  return (
    <div className={`flex justify-center ${className}`} {...props}>
      <span className="text-white/70 text-2xl">
        {selected ? selected.title : 'Welcome to my Notepad'}
      </span>
    </div>
  )
}

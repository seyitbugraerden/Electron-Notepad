import { ComponentProps } from 'react'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={`flex justify-center ${className}`} {...props}>
      <span className="text-white/70 text-2xl">Title Element</span>
    </div>
  )
}

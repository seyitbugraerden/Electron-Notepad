import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}

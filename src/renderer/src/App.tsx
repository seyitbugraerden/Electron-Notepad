import { useRef } from 'react'
import { Content, MarkDownEditor, NotePreviewList, RootLayout, Sidebar } from './components'
import { ActionButtonsRow } from './components/ActionButtonsRow'
import { FloatingNoteTitle } from './components/FloatingNotetitle'

const App = () => {
  const contetContainerRet = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contetContainerRet.current?.scrollTo(0, 0)
  }

  return (
    <>
      <RootLayout>
        <Sidebar className="p-2 text-whşte bg-black/80">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>
        <Content ref={contetContainerRet} className="border-l bg-black/80 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkDownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App

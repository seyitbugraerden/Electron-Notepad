import { Content, NotePreviewList, RootLayout, Sidebar } from './components'
import { ActionButtonsRow } from './components/ActionButtonsRow'

const App = () => {
  return (
    <>
      <RootLayout>
        <Sidebar className="p-2 text-whşte bg-black/80">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim numquam tempore atque
          dolorum incidunt necessitatibus vitae quaerat fuga vero ex explicabo architecto est quasi
          fugiat recusandae sint quisquam accusantium alias libero, nihil veniam autem. Nostrum
          quam, quos repellendus unde accusamus tempore fuga? Assumenda aliquam eum cumque
          temporibus ipsam praesentium nam eaque explicabo culpa error, illo nisi, adipisci
          quibusdam iusto vel fuga magnam nihil? Ut quis saepe minima quisquam in iusto facilis
          rerum at facere ipsa placeat accusantium velit, quam exercitationem asperiores consectetur
          sapiente nisi provident excepturi iste. Reprehenderit fugit molestias consectetur sed,
          autem aspernatur, molestiae aliquid error ipsa, possimus officia?
        </Content>
      </RootLayout>
    </>
  )
}

export default App

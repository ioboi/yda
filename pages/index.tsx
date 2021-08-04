import Head from 'next/head'
import TodoList from '@components/ToDoList'

interface TileProps {
  className?: string
  children: React.ReactNode
}

const Tile: React.FC<TileProps> = ({className= "", children}) => <div className={`${className} w-1/2 p-8`}>{children}</div>

export default function Home() {
  return (
    <>
    <Head>
        <title>Hello world!</title>
        <meta name="description" content="Personal site of yda." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen flex items-center justify-center">
      <div className="container flex bg-white h-1/2">
          <Tile className="bg-black  flex flex-col justify-between text-white">
            <h1 className="font-bold">Willkommen 👋</h1>
            <p>
              This is the internet home of <span className=" border-b-2 border-purple-600">Yannik Dällenbach</span>.
              <br/>
              I plan to document my side-projects and learnings.
            </p>
            <p>
              <em>This site is a work in progress.</em>
            </p>
          </Tile>
          <Tile>
            <TodoList />
          </Tile>
      </div>
    </div>
    </>
  )
}

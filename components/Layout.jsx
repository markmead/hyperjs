import Header from './Header'
import Footer from './Footer'
import SideBar from './SideBar'

export default function Layout({ examples, children }) {
  return (
    <div className="flex">
      <SideBar examples={examples} />

      <main className="flex-1 pl-72">
        <Header />

        <div className="p-8">{children}</div>

        <Footer />
      </main>
    </div>
  )
}

import React ,{ useState } from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Backdrop from './components/backdrop/Backdrop'
 
function App({children}) {
  const [showsidebar, setShowsidebar] = useState(false)
  return (
    <div>
      {
            showsidebar && (
            <div>
                <Backdrop onClick={() => setShowsidebar(false) } />
                <Sidebar setShowsidebar={setShowsidebar}/>
            </div>
            )
        }
        <main>
         <Header setShowsidebar={setShowsidebar} />
         {children}
        </main>
       
    </div>
  )
}

export default App
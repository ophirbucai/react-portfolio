import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, About, Construction, Connect, Project } from './pages'
import navigation from './lib/constants/navigation'
import Layout from './AppLayout'
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={navigation.paths.root} element={<Layout />}>
                    <Route index element={<Suspense><Home /></Suspense>} />
                    <Route path={navigation.paths.about} element={<Suspense><About /></Suspense>} />
                    <Route path={navigation.paths.connect} element={<Suspense><Connect /></Suspense>} />
                    {/* <Route path={navigation.paths.projects} element={<Suspense><Construction /></Suspense>} /> */}
                    {/* <Route path={navigation.paths.blog} element={<Suspense><Construction/></Suspense>}/> */}
                    {/*<Route path={navigation.paths.blogPost} element={<Suspense><Construction/></Suspense>}/>*/}
                    {/*<Route path={navigation.paths.project} element={<Suspense><Construction/></Suspense>}/>*/}
                    <Route path={navigation.paths.project} element={<Suspense><Project /></Suspense>} />
                    <Route path='*' element={<Suspense><Construction /></Suspense>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter

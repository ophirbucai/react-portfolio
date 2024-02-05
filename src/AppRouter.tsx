import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppLayout from './AppLayout.tsx'
import { Home, About, Construction, Connect, Blog, Projects } from './pages'
import navigation from './lib/constants/navigation'

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={navigation.paths.ROOT} element={<AppLayout />}>
                    <Route index element={<Suspense><Home /></Suspense>} />
                    <Route path={navigation.paths.ABOUT} element={<Suspense><About /></Suspense>} />
                    <Route path={navigation.paths.CONNECT} element={<Suspense><Connect /></Suspense>} />
                    <Route path={navigation.paths.PROJECTS} element={<Suspense><Projects /></Suspense>} />
                    <Route path={navigation.paths.BLOG} element={<Suspense><Blog /></Suspense>} />
                </Route>
                <Route path={navigation.paths.CONSTRUCTION} element={<Suspense><Construction /></Suspense>} />
            </Routes>
        </Router>
    )
}

export default AppRouter

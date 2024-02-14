import React, { Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { Home, About, Construction, Connect, Project } from './pages'
import navigation from './lib/constants/navigation'
import Layout from './AppLayout'
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={navigation.paths.root} element={<Layout />}>
                    <Route index element={<ProtectedRoute><Suspense><Home /></Suspense></ProtectedRoute>} />
                    <Route path={navigation.paths.about} element={<ProtectedRoute><Suspense><About /></Suspense></ProtectedRoute>} />
                    <Route path={navigation.paths.connect} element={<ProtectedRoute><Suspense><Connect /></Suspense></ProtectedRoute>} />
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

function ProtectedRoute({ children }: React.PropsWithChildren) {
    const navigate = useNavigate()
    useEffect(() => {
        if (import.meta.env.PROD) navigate('/construction', { replace: true })
    }, [])

    return children
}

export default AppRouter

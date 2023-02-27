import { FC, memo } from 'react'
import { NativeRouter, Route, Routes } from 'react-router-native'

import { HomePage } from '../layer3-pages'

const AppRouterBody: FC = () => {
    return (
        <NativeRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </NativeRouter>
    )
}

export const AppRouter = memo(AppRouterBody)

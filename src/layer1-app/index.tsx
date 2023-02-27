import { registerRootComponent } from 'expo'
import { View } from 'react-native'

import { AppRouter } from './AppRouter'

const AppBody = () => {
    return (
        <View>
            <AppRouter />
        </View>
    )
}

registerRootComponent(AppBody)

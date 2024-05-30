import { View, Text } from 'react-native'
import React from 'react'

import { Provider } from 'react-redux'
import MainContainer from './src/MainContainer'
import store from './src/Redux/store/Store'

const App = () => {
  return (
  <Provider store={store}>
    <MainContainer></MainContainer>
  </Provider>
  )
}

export default App
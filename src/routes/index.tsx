import styled from 'styled-components'

import MainPage from './MainPage'

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
function App() {
  return (
    <MainContainer>
      <MainPage />
    </MainContainer>
  )
}

export default App

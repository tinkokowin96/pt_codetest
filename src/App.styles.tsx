import styled from '@emotion/styled'

export const Container = styled.div`
      width: 100vw;
      height: 100vh;
`

export const ThemeTest = styled.div`
      color: ${({ theme }: any) => theme.status.danger};
`

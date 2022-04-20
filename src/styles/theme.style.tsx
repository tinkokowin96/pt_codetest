import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
      interface Theme {
            status: {
                  ed?: string
                  orange?: string
                  yellow?: string
                  green?: string
            }
      }
      // allow configuration using `createTheme`
      interface ThemeOptions {
            status?: {
                  red?: string
                  orange?: string
                  yellow?: string
                  green?: string
            }
      }
}

export const theme = createTheme({
      status: {
            red: '#FFA1A1',
            orange: '#FFD59E',
            yellow: '#F9FFA4',
            green: '#B4FF9F',
      },
})

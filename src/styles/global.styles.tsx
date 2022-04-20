import { css, Global } from '@emotion/react'
import { Spacing } from './constants.style'

export default function Globalstyles() {
      return (
            <Global
                  styles={css`
                        .center {
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              flex-direction: column;
                        }

                        .title {
                              margin-bottom: ${Spacing.medium};
                        }
                  `}
            />
      )
}

import React from 'react'
import {
  ComponentShowcase,
  DocByLine,
  DocPage,
  DocSection,
  DocTitle,
} from 'src/design/Components/Documentation'
import { SmartFrame } from 'src/design/Components/SmartFrame'
import { css } from 'styled-components'
import { Button } from 'buttons/Button'
import { PopOver } from 'popOver/PopOver'
import { MediumModal } from 'modals/MediumModal'

export const ModalsDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Modals</DocTitle>
      <DocByLine>
        Modals allow complex CRUD actions to be focused and distraction free.
      </DocByLine>
      <SmartFrame>
        {document => (
          <ComponentShowcase
            css={css`
              grid-column: -1 / 1;
            `}
          >
            <PopOver
              document={document}
              popOver={props => (
                <MediumModal {...props} title="Modal">
                  Hi
                </MediumModal>
              )}
              toggle={props => <Button {...props}>Toggle Modal</Button>}
            />
          </ComponentShowcase>
        )}
      </SmartFrame>
    </DocSection>
  </DocPage>
)

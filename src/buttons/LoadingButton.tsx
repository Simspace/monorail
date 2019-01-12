import React, { Component, MouseEvent } from 'react'
import { Button, ButtonProps } from './Button'
import { Omit } from 'typelevel-ts'
import { ButtonDisplay, ButtonSize } from 'src/buttons/buttonTypes'

type Props = Omit<ButtonProps, 'onClick'> & {
  loadingText?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => Promise<void>
}
type State = { loading: boolean }

/**
 * Takes an `onClick` that returns a Promise and toggles loading/disabled state
 */
export class LoadingButton extends Component<Props, State> {
  static defaultProps = {
    display: ButtonDisplay.Primary,
    size: ButtonSize.Default,
    type: 'button',
  }

  state: State = { loading: false }

  _isMounted = false

  componentDidMount() {
    this._isMounted = true
  }
  componentWillUnmount() {
    this._isMounted = false
  }

  onClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const origOnClick = this.props.onClick

    if (!origOnClick) {
      return
    }

    this.setState({ loading: true })
    try {
      await origOnClick(e)
    } finally {
      if (this._isMounted) {
        this.setState({ loading: false })
      }
    }
  }

  render() {
    const { loadingText, ...rest } = this.props

    return (
      <Button
        {...rest}
        disabled={this.props.disabled || this.state.loading}
        onClick={this.onClick}
      >
        {this.state.loading ? loadingText || 'Loading...' : this.props.children}
      </Button>
    )
  }
}

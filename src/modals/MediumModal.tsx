import React, { Component } from "react";

import { PopOverChildProps } from "popOver/PopOver";
import {
  BBModalBackground,
  BBModalContainer,
  BBModalHeader,
  BBModalOverlay
} from "modals/Modals";

type Props = PopOverChildProps & {
  title: string;
  iconLeft?: string;
};

export class MediumModal extends Component<Props> {
  render() {
    const { isOpen, onClick, children, title, iconLeft } = this.props;

    return (
      <BBModalContainer isOpen={isOpen}>
        <BBModalOverlay isOpen={isOpen} onClick={onClick} />
        <BBModalBackground>
          <BBModalHeader title={title} iconLeft={iconLeft} onClose={onClick} />
          {children}
        </BBModalBackground>
      </BBModalContainer>
    );
  }
}

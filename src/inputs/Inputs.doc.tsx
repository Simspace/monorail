import React, { ChangeEvent, Fragment, Component, ReactNode } from "react";
import { TextField, TextArea } from "inputs/TextField";
import { Search } from "inputs/Search";
import { Choice } from "inputs/Choice";
import {
  ComponentShowcase,
  ComponentExample,
  DocByLine,
  DocContent,
  DocThreeColumn,
  DocSubHeading,
  DocHeading,
  DocPage,
  DocSection,
  DocTitle
} from "src/design/Components/Documentation";
import { SmartFrame } from "src/design/Components/SmartFrame";
import { css } from "styled-components";

type Props = {
  children: (
    params: {
      value: string;
      onChange: (value: string) => void;
    }
  ) => ReactNode;
};

type State = {
  value: string;
};

class TextInputController extends Component<Props, State> {
  state: State = {
    value: ""
  };

  toggleActive = (value: string) => {
    this.setState(() => ({
      value
    }));
  };

  render() {
    const { children } = this.props;
    const { value } = this.state;

    return children({ value, onChange: this.toggleActive });
  }
}

export const InputsDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Inputs</DocTitle>
      <DocByLine>
        Inputs allow the user to communicate to the application. Because of this
        fundamental interaction, the wrong type of input for the question can be
        very confusing. Selecting the right input for both the data, and the
        question is a mark of good design. Remember we are stewards of the user.
      </DocByLine>
      <SmartFrame>
        <ComponentShowcase
          css={css`
            grid-column: -1 / 1;
          `}
        >
          <TextField label="Text Field" placeholder="Placeholder" />
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>

    <DocSection>
      <DocTitle>Usage</DocTitle>

      <DocContent bottom={80}>
        Inputs are used to allow users to submit information.
        <ul>
          <li>Forms</li>
          <li>Tables</li>
          <li>Modals</li>
        </ul>
      </DocContent>

      <DocHeading>Principles</DocHeading>
      <DocThreeColumn>
        <div>
          <DocSubHeading>Identifiable</DocSubHeading>
          <DocContent>
            These components clearly communicate that the user can input
            information.
          </DocContent>
        </div>
        <div>
          <DocSubHeading>Reactive</DocSubHeading>
          <DocContent>
            Inputs are reactive to user interaction. Their styling adjust when
            the user hovers and interacts with them.
          </DocContent>
        </div>
        <div>
          <DocSubHeading>Clear</DocSubHeading>
          <DocContent>
            Inputs should make it easy to understand the requested information
            and address any errors.
          </DocContent>
        </div>
      </DocThreeColumn>
    </DocSection>

    <DocSection>
      <DocTitle>Types</DocTitle>

      <DocHeading top={64} bottom={-16}>
        Text Field
      </DocHeading>

      <ComponentExample
        name="Text Field"
        component={<TextField label="Text Field" placeholder="Placeholder" />}
        content={
          <Fragment>
            Text Field should be used for inputing small amounts of text. For
            larger amounts use Text Area.
          </Fragment>
        }
        code={`<TextField label="Text Field" placeholder="Placeholder" />`}
      />

      <ComponentExample
        name="Text Field | Left Icon"
        component={
          <TextField
            placeholder="Placeholder"
            label="Text Field | Left Icon"
            iconLeft="person"
          />
        }
        content={
          <Fragment>
            Texts Field can include an Icon to help signify the type of
            information that should be entered.
          </Fragment>
        }
        code={`<TextField
  placeholder="Placeholder"
  label="Text Field | Left Icon"
/>`}
      />

      <ComponentExample
        name="Text Field | Right Icon"
        component={
          <TextField
            placeholder="Placeholder"
            label="Text Field | Right Icon"
            iconRight="person"
          />
        }
        content={
          <Fragment>
            Texts Field can include an Icon to help signify the type of
            information that should be entered.
          </Fragment>
        }
        code={`<TextField
  placeholder="Placeholder"
  label="Text Field | Right Icon"
/>`}
      />

      <ComponentExample
        name="Text Field | Left &amp; Right Icon"
        component={
          <TextField
            placeholder="Placeholder"
            label="Text Field | Left &amp; Right Icon"
            iconLeft="person"
            iconRight="person"
          />
        }
        content={
          <Fragment>
            Text Field can include an Icon to help signify the type of
            information that should be entered.
          </Fragment>
        }
        code={`<TextField
  placeholder="Placeholder"
  label="Text Field | Left & Right Icon"
/>`}
      />

      <DocHeading top={64} bottom={-16}>
        Text Area
      </DocHeading>

      <ComponentExample
        name="Text Area"
        component={<TextArea placeholder="Placeholder" label="Text Area" />}
        content={
          <Fragment>
            The Text Area component is used for entering larger amounts of text.
          </Fragment>
        }
        code={`<TextArea placeholder="Placeholder" label="Text Area" />`}
      />

      <DocHeading top={64} bottom={-16}>
        Search
      </DocHeading>

      <ComponentExample
        name="Search"
        component={
          <TextInputController>
            {props => <Search {...props} />}
          </TextInputController>
        }
        content={
          <Fragment>
            The Search component signals to the user that the associated
            collection can be searched. Upon inputing text a "clear search" Icon
            Button appears in the right side of the box.
          </Fragment>
        }
        code={`<Search />`}
      />

      <DocHeading top={64} bottom={16}>
        Choice
      </DocHeading>
      <DocByLine>
        Checkbox and Radio Button should have a Interaction Area that surounds
        both the Icon and the Label. The height should be 24px. and width is
        determined by it’s context. Within a Form, it is as wide as other
        Inputs, label will wrap when it hit’s Form width. In Isolation, it will
        be as wide as it’s label with padding-right: 8px;
      </DocByLine>

      <ComponentExample
        name="Radio"
        component={<Choice type="radio">Radio</Choice>}
        content={
          <Fragment>
            Use Radio Button to select a single option from a list. Radio
            buttons should be used instead of checkboxes if only one item can be
            selected from a list.
          </Fragment>
        }
        code={`<Choice type="radio">Radio</Choice>`}
      />

      <ComponentExample
        name="Checkbox"
        component={<Choice type="checkbox">Checkbox</Choice>}
        content={
          <Fragment>
            Use Checkbox to select one or multiple items from a list, or turn an
            option on or off.
          </Fragment>
        }
        code={`<Choice type="checkbox">Checkbox</Choice>`}
      />

      <ComponentExample
        name="Radio | Disabled"
        component={
          <Choice type="radio" disabled>
            Radio | Disabled
          </Choice>
        }
        content={
          <Fragment>
            A disabled Radio Button should clearly indicate it cannot accept
            input.
          </Fragment>
        }
        code={`<Choice type="radio" disabled>
        Radio | Disabled
      </Choice>`}
      />

      <ComponentExample
        name="Checkbox | Disabled"
        component={
          <Choice type="checkbox" disabled>
            Checkbox | Disabled
          </Choice>
        }
        content={
          <Fragment>
            A disabled Checkbox should clearly indicate it cannot accept input.
          </Fragment>
        }
        code={`<Choice type="checkbox" disabled>
        Checkbox | Disabled>
      </Choice>`}
      />
    </DocSection>
  </DocPage>
);

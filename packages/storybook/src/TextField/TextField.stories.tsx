import React from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { alpha, styled } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputBase from '@mui/material/InputBase'
import InputLabel from '@mui/material/InputLabel'
import type { OutlinedInputProps } from '@mui/material/OutlinedInput'
import OutlinedInput from '@mui/material/OutlinedInput'

import type { TextFieldProps } from '@monorail/components'
import { MenuItem, TextField, useFormControl } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Inputs/TextField', component: TextField }

const Template = story<TextFieldProps>(args => <TextField {...args} />, {
  args: {
    label: 'Text Field',
    placeholder: 'Placeholder',
    inputProps: { 'aria-label': 'Text Field' },
  },
  muiName: 'MuiTextField',
})

export const Default = story(Template)

export const BasicTextField = story(
  args => (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { mr: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        {...args}
      />
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            'The `TextField` wrapper component is a complete form control including a label, input, and help text. We only use the outlined variant in Monorail.',
        },
      },
    },
  },
)

export const FormProps = story(
  () => (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mr: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField id="outlined-number" label="Number" type="number" />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            "Standard form attributes are supported e.g. `required`, `disabled`, `type`, etc. as well as a `helperText` which is used to give context about a field's input, such as how the input will be used.",
        },
      },
    },
  },
)

export const Validation = story(
  () => (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mr: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            'The `error` prop toggles the error state. The `helperText` prop can then be used to provide feedback to the user about the error.',
        },
      },
    },
  },
)

export const Multiline = story(
  () => {
    const [value, setValue] = React.useState('Controlled')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { mr: 2, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
          />
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
        </div>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'The `multiline` prop transforms the text field into a [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) element. Unless the `rows` prop is set, the height of the text field dynamically matches its content (using [TextareaAutosize](https://next.material-ui.com/components/textarea-autosize/)). You can use the `minRows` and `maxRows` props to bound it.',
        },
      },
    },
  },
)

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

export const SelectTextFields = story<TextFieldProps>(args => {
  const [currency, setCurrency] = React.useState('EUR')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value)
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
          {...args}
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          {...args}
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </Box>
  )
})

export const InputAdornments = story(
  () => {
    interface State {
      amount: string
      password: string
      weight: string
      weightRange: string
      showPassword: boolean
    }
    const [values, setValues] = React.useState<State>({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    })

    const handleChange =
      (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value })
      }

    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      })
    }

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>,
    ) => {
      event.preventDefault()
    }

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          <TextField
            label="With normal TextField"
            id="outlined-start-adornment"
            sx={{ mr: 2, width: '25ch' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            }}
          />
          <FormControl sx={{ mr: 2, width: '25ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <FormHelperText id="outlined-weight-helper-text">
              Weight
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ mr: 2, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl fullWidth sx={{ mr: 2 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.amount}
              onChange={handleChange('amount')}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
        </div>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'The main way is with an `InputAdornment`. This can be used to add a prefix, a suffix, or an action to an input. For instance, you can use an icon button to hide or reveal the password.',
        },
      },
    },
  },
)

export const Sizes = story(
  () => (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mr: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
        <TextField
          label="Size"
          id="outlined-size-medium"
          defaultValue="Medium"
        />
        <TextField
          label="Size"
          id="outlined-size-large"
          defaultValue="Large"
          size="large"
        />
      </div>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: 'Fancy smaller inputs? Use the size prop.',
        },
      },
    },
  },
)

export const Margin = story(
  () => {
    function RedBar() {
      return (
        <Box
          sx={{
            height: 20,
            backgroundColor: theme =>
              theme.palette.mode === 'light'
                ? 'rgba(255, 0, 0, 0.1)'
                : 'rgb(255 132 132 / 25%)',
          }}
        />
      )
    }
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& .MuiTextField-root': { width: '25ch' },
        }}
      >
        <RedBar />
        <TextField label={'margin="none"'} id="margin-none" />
        <RedBar />
        <TextField label={'margin="dense"'} id="margin-dense" margin="dense" />
        <RedBar />
        <TextField
          label={'margin="normal"'}
          id="margin-normal"
          margin="normal"
        />
        <RedBar />
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            "The `margin` prop can be used to alter the vertical spacing of the text field. Using `none` (default) doesn't apply margins to the `FormControl` whereas `dense` and `normal` do.",
        },
      },
    },
  },
)

export const FullWidth = story<TextFieldProps>(args => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" {...args} />
    </Box>
  )
})

export const ControlledVsUncontrolled = story<TextFieldProps>(args => {
  const [name, setName] = React.useState('Cat in the Hat')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Name"
        value={name}
        onChange={handleChange}
        {...args}
      />
      <TextField
        id="outlined-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
        {...args}
      />
    </Box>
  )
})

export const ComposedTextField = story(
  () => {
    const [name, setName] = React.useState('Composed TextField')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value)
    }

    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { mr: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <OutlinedInput
            id="component-simple"
            value={name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-helper">Name</InputLabel>
          <OutlinedInput
            id="component-helper"
            value={name}
            onChange={handleChange}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Some important helper text
          </FormHelperText>
        </FormControl>
        <FormControl disabled>
          <InputLabel htmlFor="component-disabled">Name</InputLabel>
          <OutlinedInput
            id="component-disabled"
            value={name}
            onChange={handleChange}
            aria-describedby="component-disabled-text"
          />
          <FormHelperText id="component-disabled-text">Disabled</FormHelperText>
        </FormControl>
        <FormControl error>
          <InputLabel htmlFor="component-error">Name</InputLabel>
          <OutlinedInput
            id="component-error"
            value={name}
            onChange={handleChange}
            aria-describedby="component-error-text"
          />
          <FormHelperText id="component-error-text">Error</FormHelperText>
        </FormControl>

        <FormControl sx={{ display: 'flex', flexDirection: 'row' }}>
          <InputLabel
            htmlFor="label-on-left"
            sx={{ m: 0, mt: 3, mr: 3, left: 0 }}
          >
            Select
          </InputLabel>
          <Box>
            <OutlinedInput
              id="label-on-left"
              value={name}
              onChange={handleChange}
              aria-describedby="label-on-left-text"
            />
            <FormHelperText id="label-on-left-text">
              Some important helper text
            </FormHelperText>
          </Box>
        </FormControl>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `\`TextField\` is composed of smaller components ( [FormControl](https://next.material-ui.com/api/form-control/), [Input](https://next.material-ui.com/api/input/), [FilledInput](https://next.material-ui.com/api/filled-input/), [InputLabel](https://next.material-ui.com/api/input-label/), [OutlinedInput](https://next.material-ui.com/api/outlined-input/), and [FormHelperText](https://next.material-ui.com/api/form-helper-text/) ) that you can leverage directly to significantly customize your form inputs.
You might also have noticed that some native HTML input properties are missing from the \`TextField\` component. This is on purpose. The component takes care of the most used properties. Then, it's up to the user to use the underlying component shown in the following demo. Still, you can use \`inputProps\` (and \`InputProps\`, \`InputLabelProps\` properties) if you want to avoid some boilerplate.`,
        },
      },
    },
  },
)

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
})

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}))

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
})

export const Customization = story(
  () => (
    <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
    >
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Bootstrap
        </InputLabel>
        <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
      </FormControl>
      <RedditTextField
        label="Reddit"
        defaultValue="react-reddit"
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 11 }}
      />
      <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
      <ValidationTextField
        label="CSS validation style"
        required
        variant="outlined"
        defaultValue="Success"
        id="validation-outlined-input"
      />
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            'Here are some examples of customizing the component. You can learn more about this in the [overrides documentation page](https://next.material-ui.com/customization/how-to-customize/).',
        },
      },
    },
  },
)

function MyFormHelperText() {
  const { focused } = useFormControl() || {}

  const helperText = React.useMemo(() => {
    if (focused !== undefined) {
      return 'This field is being focused'
    }

    return 'Helper text'
  }, [focused])

  return <FormHelperText>{helperText}</FormHelperText>
}

export const UseFormControl = story<TextFieldProps>(
  () => {
    return (
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{ width: '25ch' }}>
          <OutlinedInput placeholder="Please enter text" />
          <MyFormHelperText />
        </FormControl>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `For advanced customization use cases, a useFormControl() hook is exposed. This hook returns the context value of the parent FormControl component.

**Returns**

value (object):

- value.adornedStart (bool): Indicate whether the child Input or Select component has a start adornment.
- value.setAdornedStart (func): Setter function for adornedStart state value.
- value.color (string): The theme color is being used, inherited from FormControl color prop .
- value.disabled (bool): Indicate whether the component is being displayed in a disabled state, inherited from FormControl disabled prop.
- value.error (bool): Indicate whether the component is being displayed in an error state, inherited from FormControl error prop
- value.filled (bool): Indicate whether input is filled
- value.focused (bool): Indicate whether the component and its children are being displayed in a focused state
- value.fullWidth (bool): Indicate whether the component is taking up the full width of its container, inherited from FormControl fullWidth prop
- value.hiddenLabel (bool): Indicate whether the label is being hidden, inherited from FormControl hiddenLabel prop
- value.required (bool): Indicate whether the label is indicating that the input is required input, inherited from the FormControl required prop
- value.size (string): The size of the component, inherited from the FormControl size prop
- value.variant (string): The variant is being used by the FormControl component and its children, inherited from FormControl variant prop
- value.onBlur (func): Should be called when the input is blurred
- value.onFocus (func): Should be called when the input is focused
- value.onEmpty (func): Should be called when the input is emptied
- value.onFilled (func): Should be called when the input is filled
        `,
        },
      },
    },
  },
)

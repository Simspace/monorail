import React from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { alpha, styled } from '@material-ui/core/styles'

import { TextField, TextFieldProps } from '../TextField'
import { Box } from '../../Box/Box'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TextField.stories.gen'
import { MenuItem } from '../../MenuItem/MenuItem'
import { FormControl } from '../../FormControl/FormControl'
import { InputLabel } from '../../InputLabel/InputLabel'
import { Input } from '../../Input/Input'
import { InputAdornment } from '../../InputAdornment/InputAdornment'
import {
  OutlinedInput,
  OutlinedInputProps,
} from '../../OutlinedInput/OutlinedInput'
import { FormHelperText } from '../../FormHelperText/FormHelperText'
import { IconButton } from '../../IconButton/IconButton'
import { FilledInput } from '../../FilledInput/FilledInput'
import { InputBase } from '../../InputBase/InputBase'

export default { ...defaultStoryMeta }

const Template = story<TextFieldProps>(args => <TextField {...args} />, {
  args: { label: 'Text Field', inputProps: { 'aria-label': 'Text Field' } },
})

export const Default = story(Template)

export const BasicTextField = story(
  () => (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            'The `TextField` wrapper component is a complete form control including a label, input, and help text. It comes with three variants: outlined (default), filled, and standard.',
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
        '& .MuiTextField-root': { m: 1, width: '25ch' },
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
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
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
        '& .MuiTextField-root': { m: 1, width: '25ch' },
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
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
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
          '& .MuiTextField-root': { m: 1, width: '25ch' },
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
        <div>
          <TextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            variant="filled"
          />
          <TextField
            id="filled-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="filled"
          />
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            variant="standard"
          />
          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="standard"
          />
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="standard"
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

    const handleChange = (prop: keyof State) => (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
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
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            }}
          />
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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
          <FormControl fullWidth sx={{ m: 1 }}>
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
        <div>
          <TextField
            label="With normal TextField"
            id="filled-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            }}
            variant="filled"
          />
          <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <FilledInput
              id="filled-adornment-weight"
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <FormHelperText id="filled-weight-helper-text">
              Weight
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
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
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              value={values.amount}
              onChange={handleChange('amount')}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div>
          <TextField
            label="With normal TextField"
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            }}
            variant="standard"
          />
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
            <Input
              id="standard-adornment-weight"
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <FormHelperText id="standard-weight-helper-text">
              Weight
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={values.amount}
              onChange={handleChange('amount')}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
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
        '& .MuiTextField-root': { m: 1, width: '25ch' },
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
          id="outlined-size-normal"
          defaultValue="Normal"
        />
      </div>
      <div>
        <TextField
          label="Size"
          id="filled-size-small"
          defaultValue="Small"
          variant="filled"
          size="small"
        />
        <TextField
          label="Size"
          id="filled-size-normal"
          defaultValue="Normal"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          label="Size"
          id="standard-size-small"
          defaultValue="Small"
          size="small"
          variant="standard"
        />
        <TextField
          label="Size"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
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

export const Components = story(
  () => {
    const [name, setName] = React.useState('Composed TextField')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value)
    }

    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input id="component-simple" value={name} onChange={handleChange} />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Name</InputLabel>
          <Input
            id="component-helper"
            value={name}
            onChange={handleChange}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Some important helper text
          </FormHelperText>
        </FormControl>
        <FormControl disabled variant="standard">
          <InputLabel htmlFor="component-disabled">Name</InputLabel>
          <Input id="component-disabled" value={name} onChange={handleChange} />
          <FormHelperText>Disabled</FormHelperText>
        </FormControl>
        <FormControl error variant="standard">
          <InputLabel htmlFor="component-error">Name</InputLabel>
          <Input
            id="component-error"
            value={name}
            onChange={handleChange}
            aria-describedby="component-error-text"
          />
          <FormHelperText id="component-error-text">Error</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={name}
            onChange={handleChange}
            label="Name"
          />
        </FormControl>
        <FormControl variant="filled">
          <InputLabel htmlFor="component-filled">Name</InputLabel>
          <FilledInput
            id="component-filled"
            value={name}
            onChange={handleChange}
          />
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

export const Color = story(
  () => (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Outlined secondary" color="secondary" focused />
      <TextField
        label="Filled success"
        variant="filled"
        color="success"
        focused
      />
      <TextField
        label="Standard warning"
        variant="standard"
        color="warning"
        focused
      />
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story:
            'The `color` prop changes the highlight color of the text field when focused.',
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
    width: 'auto',
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

// Edit this file to add new stories
import React from 'react'
import { InputAdornment, InputAdornmentProps } from '../InputAdornment'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './InputAdornment.stories.gen'
import { Box } from '../../Box/Box'
import { FormControl } from '../../FormControl/FormControl'
import { FormHelperText } from '../../FormHelperText/FormHelperText'
import { TextField } from '../../TextField/TextField'
import { OutlinedInput } from '../../OutlinedInput/OutlinedInput'
import { InputLabel } from '../../InputLabel/InputLabel'
import { IconButton } from '../../IconButton/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { FilledInput } from '../../FilledInput/FilledInput'
import { Input } from '../../Input/Input'

/**
 * Metadata for InputAdornment stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Inputs/Input/InputAdornment' }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<InputAdornmentProps>(
  args => (
    <TextField
      placeholder="Enter amount"
      sx={{ m: 1, width: '50ch' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="end" {...args}>
            $
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end" {...args}>
            (USD)
          </InputAdornment>
        ),
      }}
    />
  ),
  {
    args: {},
  },
)

export const Default = story(Template, {
  args: {},
  parameters: {
    docs: {
      description: {
        component: `InputAdornments are used to add icons or text at the start or end of an input.`,
      },
    },
  },
})

interface State {
  amount: string
  password: string
  weight: string
  weightRange: string
  showPassword: boolean
}

export const Showcase = story<InputAdornmentProps>(
  () => {
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
          story: `There are multiple ways to display an Icon with a TextField. The main way is with an InputAdornment. This can be used to add a prefix, a suffix, or an action to an input. For instance, you can use an icon button to hide or reveal the password.`,
        },
      },
    },
  },
)

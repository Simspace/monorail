// Edit this file to add new stories
import React from 'react'
import { story } from '../../../__tests__/helpers/storybook'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete'
import { TransitionGroup } from 'react-transition-group'
import { TransitionGroupProps } from 'react-transition-group/TransitionGroup'

const defaultStoryMeta = {
  title: 'Utils/TransitionGroup',
  component: TransitionGroup,
}

const FRUITS = [
  '🍏 Apple',
  '🍌 Banana',
  '🍍 Pineapple',
  '🥥 Coconut',
  '🍉 Watermelon',
]

interface RenderItemOptions {
  item: string
  handleRemoveFruit: (item: string) => void
}

function renderItem({ item, handleRemoveFruit }: RenderItemOptions) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveFruit(item)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item} />
    </ListItem>
  )
}

/**
 * Metadata for Typography stories - update/extend as needed
 */
export default { ...defaultStoryMeta }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TransitionGroupProps>(
  args => {
    const [fruitsInBasket, setFruitsInBasket] = React.useState(
      FRUITS.slice(0, 3),
    )

    const handleAddFruit = () => {
      const nextHiddenItem = FRUITS.find(i => !fruitsInBasket.includes(i))
      if (nextHiddenItem) {
        setFruitsInBasket(prev => [nextHiddenItem, ...prev])
      }
    }

    const handleRemoveFruit = (item: string) => {
      setFruitsInBasket(prev => [...prev.filter(i => i !== item)])
    }

    const addFruitButton = (
      <Button
        variant="contained"
        disabled={fruitsInBasket.length >= FRUITS.length}
        onClick={handleAddFruit}
      >
        Add fruit to basket
      </Button>
    )

    return (
      <div>
        {addFruitButton}
        <Box sx={{ mt: 1 }}>
          <List>
            <TransitionGroup>
              {fruitsInBasket.map(item => (
                <Collapse key={item}>
                  {renderItem({ item, handleRemoveFruit })}
                </Collapse>
              ))}
            </TransitionGroup>
          </List>
        </Box>
      </div>
    )
  },
  {
    args: {},
  },
)

/** Default story for Typography (edit/remove by hand if needed) */
export const Default = story(Template)

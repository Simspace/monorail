import React from 'react'
import { ChevronRight as ChevronRightIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import DeleteIcon from '@mui/icons-material/Delete'
import ForumIcon from '@mui/icons-material/Forum'
import InfoIcon from '@mui/icons-material/Info'
import Label from '@mui/icons-material/Label'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import MailIcon from '@mui/icons-material/Mail'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import { alpha, styled } from '@mui/material'

import type {
  SimpleTreeViewProps,
  SvgIconProps,
  TreeItemContentProps,
  TreeItemProps,
} from '@monorail/components'
import {
  Box,
  Button,
  FormControlLabel,
  SimpleTreeView,
  Switch,
  TreeItem,
  treeItemClasses,
  Typography,
  useTreeItemState,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/SimpleTreeView',
  component: SimpleTreeView,
}

const Template = story<SimpleTreeViewProps<false>>(
  (args) => (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
      <SimpleTreeView
        aria-label='file system navigator'
        slots={{
          collapseIcon: ExpandMoreIcon,
          expandIcon: ChevronRightIcon,
        }}
        {...args}
      >
        <TreeItem itemId='1' label='Applications'>
          <TreeItem itemId='2' label='Calendar' />
        </TreeItem>
        <TreeItem itemId='5' label='Documents'>
          <TreeItem itemId='10' label='OSS' />
          <TreeItem itemId='6' label='MUI'>
            <TreeItem itemId='8' label='index.js' />
          </TreeItem>
        </TreeItem>
      </SimpleTreeView>
    </Box>
  ),
  {
    args: {},
    muiName: 'MuiTreeView',
  },
)

/**
 * Tree views can be used to represent a file system navigator displaying folders and files, an item representing a folder can be expanded to reveal the contents of the folder, which may be files, folders, or both.
 */
export const Default = story(Template)

/**
 * Tree views also support multi-selection.
 */
export const MultiSelection = story<SimpleTreeViewProps<true>>((args) => (
  <Box sx={{ minHeight: 220, flexGrow: 1, maxWidth: 300 }}>
    <SimpleTreeView
      aria-label='multi-select'
      slots={{
        collapseIcon: ExpandMoreIcon,
        expandIcon: ChevronRightIcon,
      }}
      multiSelect
      {...args}
    >
      <TreeItem itemId='1' label='Applications'>
        <TreeItem itemId='2' label='Calendar' />
        <TreeItem itemId='3' label='Chrome' />
        <TreeItem itemId='4' label='Webstorm' />
      </TreeItem>
      <TreeItem itemId='5' label='Documents'>
        <TreeItem itemId='6' label='MUI'>
          <TreeItem itemId='7' label='src'>
            <TreeItem itemId='8' label='index.js' />
            <TreeItem itemId='9' label='tree-view.js' />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </SimpleTreeView>
  </Box>
))

/**
 * The tree view also offers a controlled API.
 */
export const Controlled = story(() => {
  const [expanded, setExpanded] = React.useState<Array<string>>([])
  const [selected, setSelected] = React.useState<Array<string>>([])

  const handleToggle = (event: React.SyntheticEvent, itemIds: Array<string>) => {
    setExpanded(itemIds)
  }

  const handleSelect = (event: React.SyntheticEvent, itemIds: Array<string>) => {
    setSelected(itemIds)
  }

  const handleExpandClick = () => {
    setExpanded((oldExpanded) => (oldExpanded.length === 0 ? ['1', '5', '6', '7'] : []))
  }

  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'] : [],
    )
  }

  return (
    <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
      <Box sx={{ mb: 2 }}>
        <Button variant='text' onClick={handleExpandClick}>
          {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button>
        <Button variant='text' onClick={handleSelectClick}>
          {selected.length === 0 ? 'Select all' : 'Unselect all'}
        </Button>
      </Box>
      <SimpleTreeView
        aria-label='controlled'
        slots={{
          collapseIcon: ExpandMoreIcon,
          expandIcon: ChevronRightIcon,
        }}
        expandedItems={expanded}
        selectedItems={selected}
        onExpandedItemsChange={handleToggle}
        onSelectedItemsChange={handleSelect}
        multiSelect
      >
        <TreeItem itemId='1' label='Applications'>
          <TreeItem itemId='2' label='Calendar' />
          <TreeItem itemId='3' label='Chrome' />
          <TreeItem itemId='4' label='Webstorm' />
        </TreeItem>
        <TreeItem itemId='5' label='Documents'>
          <TreeItem itemId='6' label='Material-UI'>
            <TreeItem itemId='7' label='src'>
              <TreeItem itemId='8' label='index.js' />
              <TreeItem itemId='9' label='tree-view.js' />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </SimpleTreeView>
    </Box>
  )
})

interface RenderTree {
  id: string
  name: string
  children?: ReadonlyArray<RenderTree>
}

const data: RenderTree = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
      ],
    },
  ],
}

/**
 * While the `TreeView`/`TreeItem` component API maximizes flexibility, an extra step is needed to handle a rich object.
 *
 * Let's consider a data variable with the following shape, recursion can be used to handle it.
 */
export const RichObject = story<SimpleTreeViewProps<true>>((args) => {
  {
    const renderTree = (nodes: RenderTree) => (
      <TreeItem key={nodes.id} itemId={nodes.id} label={nodes.name}>
        {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
      </TreeItem>
    )

    return (
      <Box sx={{ minHeight: 110, flexGrow: 1, maxWidth: 300 }}>
        <SimpleTreeView
          aria-label='rich object'
          slots={{
            collapseIcon: ExpandMoreIcon,
            expandIcon: ChevronRightIcon,
          }}
          defaultExpandedItems={['root']}
          {...args}
        >
          {renderTree(data)}
        </SimpleTreeView>
      </Box>
    )
  }
})

/**
 * You can use the `ContentComponent` prop and the `useTreeItemState` hook to further customize the behavior of the `TreeItem`.
 *
 * Such as limiting expansion to clicking the icon.
 */
export const ContentComponentPropExample1 = story(() => {
  const CustomContent = React.forwardRef(function CustomContent(props: TreeItemContentProps, ref) {
    const { classes, className, label, itemId, icon: iconProp, expansionIcon, displayIcon } = props

    const {
      disabled,
      expanded,
      selected,
      focused,
      handleExpansion,
      handleSelection,
      preventSelection,
    } = useTreeItemState(itemId)

    const icon = iconProp ?? expansionIcon ?? displayIcon

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      preventSelection(event)
    }

    const handleExpansionClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      handleExpansion(event)
    }

    const handleSelectionClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      handleSelection(event)
    }

    return (
      <div
        className={[
          className,
          expanded ? classes.expanded : '',
          selected ? classes.selected : '',
          focused ? classes.focused : '',
          disabled ? classes.disabled : '',
        ].join(' ')}
        onMouseDown={handleMouseDown}
        ref={ref as React.Ref<HTMLDivElement>}
      >
        <div onClick={handleExpansionClick} className={classes.iconContainer}>
          {icon}
        </div>
        <Typography onClick={handleSelectionClick} component='div' className={classes.label}>
          {label}
        </Typography>
      </div>
    )
  })

  const CustomTreeItem = (props: TreeItemProps) => (
    <TreeItem ContentComponent={CustomContent} {...props} />
  )

  return (
    <>
      <Typography>Limiting expansion to clicking the icon:</Typography>
      <SimpleTreeView
        aria-label='icon expansion'
        slots={{
          collapseIcon: ExpandMoreIcon,
          expandIcon: ChevronRightIcon,
          endIcon: ChevronRightIcon,
        }}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      >
        <CustomTreeItem itemId='1' label='Applications'>
          <CustomTreeItem itemId='2' label='Calendar' />
          <CustomTreeItem itemId='3' label='Chrome' />
          <CustomTreeItem itemId='4' label='Webstorm' />
        </CustomTreeItem>
        <CustomTreeItem itemId='5' label='Documents'>
          <CustomTreeItem itemId='10' label='OSS' />
          <CustomTreeItem itemId='6' label='Material-UI'>
            <CustomTreeItem itemId='7' label='src'>
              <CustomTreeItem itemId='8' label='index.js' />
              <CustomTreeItem itemId='9' label='tree-view.js' />
            </CustomTreeItem>
          </CustomTreeItem>
        </CustomTreeItem>
      </SimpleTreeView>

      <Typography>Increasing the width of the state indicator: </Typography>
    </>
  )
})

/**
 * You can use the `ContentComponent` prop and the `useTreeItem` hook to further customize the behavior of the `TreeItem`.
 *
 * Such as increasing the width of the state indicator.
 */
export const ContentComponentPropExample2 = story(() => {
  const CustomContentRoot = styled('div')(({ theme }) => ({
    WebkitTapHighlightColor: 'transparent',
    '&:hover, &.Mui-disabled, &.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused, &.Mui-selected:hover':
      {
        backgroundColor: 'transparent',
      },
    [`& .MuiTreeItem-contentBar`]: {
      position: 'absolute',
      width: '100%',
      height: 24,
      left: 0,
      '&:hover &': {
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&.Mui-disabled &': {
        opacity: theme.palette.action.disabledOpacity,
        backgroundColor: 'transparent',
      },
      '&.Mui-focused &': {
        backgroundColor: theme.palette.action.focus,
      },
      '&.Mui-selected &': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
      '&.Mui-selected:hover &': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        },
      },
      '&.Mui-selected.Mui-focused &': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity,
        ),
      },
    },
  }))

  const CustomContent = React.forwardRef(function CustomContent(props: TreeItemContentProps, ref) {
    const { className, classes, label, itemId, icon: iconProp, expansionIcon, displayIcon } = props

    const {
      disabled,
      expanded,
      selected,
      focused,
      handleExpansion,
      handleSelection,
      preventSelection,
    } = useTreeItemState(itemId)

    const icon = iconProp ?? expansionIcon ?? displayIcon

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      preventSelection(event)
    }

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      handleExpansion(event)
      handleSelection(event)
    }

    return (
      <CustomContentRoot
        className={[
          className,
          classes.root,
          expanded ? 'Mui-expanded' : '',
          selected ? 'Mui-selected' : '',
          focused ? 'Mui-focused' : '',
          disabled ? 'Mui-disabled' : '',
        ].join(' ')}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        ref={ref as React.Ref<HTMLDivElement>}
      >
        <div className='MuiTreeItem-contentBar' />
        <div className={classes.iconContainer}>{icon}</div>
        <Typography component='div' className={classes.label}>
          {label}
        </Typography>
      </CustomContentRoot>
    )
  })

  const CustomTreeItem = (props: TreeItemProps) => (
    <TreeItem ContentComponent={CustomContent} {...props} />
  )

  return (
    <SimpleTreeView
      aria-label='icon expansion'
      slots={{
        collapseIcon: ExpandMoreIcon,
        expandIcon: ChevronRightIcon,
      }}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, position: 'relative' }}
    >
      <CustomTreeItem itemId='1' label='Applications'>
        <CustomTreeItem itemId='2' label='Calendar' />
        <CustomTreeItem itemId='3' label='Chrome' />
        <CustomTreeItem itemId='4' label='Webstorm' />
      </CustomTreeItem>
      <CustomTreeItem itemId='5' label='Documents'>
        <CustomTreeItem itemId='10' label='OSS' />
        <CustomTreeItem itemId='6' label='Material-UI'>
          <CustomTreeItem itemId='7' label='src'>
            <CustomTreeItem itemId='8' label='index.js' />
            <CustomTreeItem itemId='9' label='tree-view.js' />
          </CustomTreeItem>
        </CustomTreeItem>
      </CustomTreeItem>
    </SimpleTreeView>
  )
})
declare module 'react' {
  interface CSSProperties {
    '--tree-view-color'?: string
    '--tree-view-bg-color'?: string
  }
}

/**
 * You can customize icons, tree items, and animation
 */
export const CustomizedTreeView = story(() => {
  type StyledTreeItemProps = TreeItemProps & {
    bgColor?: string
    color?: string
    labelIcon: React.ElementType<SvgIconProps>
    labelInfo?: string
    labelText: string
  }

  const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
      alignItems: 'center',
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '&.Mui-expanded': {
        fontWeight: theme.typography.fontWeightRegular,
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
        color: 'var(--tree-view-color)',
      },
      [`& .${treeItemClasses.label}`]: {
        fontWeight: 'inherit',
        color: 'inherit',
      },
    },
    [`& .${treeItemClasses.groupTransition}`]: {
      marginLeft: 0,
      [`& .${treeItemClasses.content}`]: {
        paddingLeft: theme.spacing(4),
      },
    },
  }))

  function StyledTreeItem(props: StyledTreeItemProps) {
    const { bgColor, color, labelIcon: LabelIcon, labelInfo, labelText, ...other } = props

    return (
      <StyledTreeItemRoot
        label={
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              p: 0.5,
              pr: 0,
            }}
          >
            <Box component={LabelIcon} color='inherit' sx={{ mr: 1 }} />
            <Typography variant='body2' sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
              {labelText}
            </Typography>
            <Typography variant='caption' color='inherit'>
              {labelInfo}
            </Typography>
          </Box>
        }
        style={{
          '--tree-view-color': color,
          '--tree-view-bg-color': bgColor,
        }}
        {...other}
      />
    )
  }

  return (
    <SimpleTreeView
      aria-label='gmail'
      defaultExpandedItems={['3']}
      slots={{
        collapseIcon: ArrowDropDownIcon,
        expandIcon: ArrowRightIcon,
        endIcon: () => <div style={{ width: 24 }} />,
      }}
      // defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <StyledTreeItem itemId='1' labelText='All Mail' labelIcon={MailIcon} />
      <StyledTreeItem itemId='2' labelText='Trash' labelIcon={DeleteIcon} />
      <StyledTreeItem itemId='3' labelText='Categories' labelIcon={Label}>
        <StyledTreeItem
          itemId='5'
          labelText='Social'
          labelIcon={SupervisorAccountIcon}
          labelInfo='90'
          color='#1a73e8'
          bgColor='#e8f0fe'
        />
        <StyledTreeItem
          itemId='6'
          labelText='Updates'
          labelIcon={InfoIcon}
          labelInfo='2,294'
          color='#e3742f'
          bgColor='#fcefe3'
        />
        <StyledTreeItem
          itemId='7'
          labelText='Forums'
          labelIcon={ForumIcon}
          labelInfo='3,566'
          color='#a250f5'
          bgColor='#f3e8fd'
        />
        <StyledTreeItem
          itemId='8'
          labelText='Promotions'
          labelIcon={LocalOfferIcon}
          labelInfo='733'
          color='#3c8039'
          bgColor='#e6f4ea'
        />
      </StyledTreeItem>
      <StyledTreeItem itemId='4' labelText='History' labelIcon={Label} />
    </SimpleTreeView>
  )
})

/**
 * The behavior of disabled tree items depends on the `disabledItemsFocusable` prop.
 *
 * If it is false:
 *
 * - Arrow keys will not focus disabled items and, the next non-disabled item will be focused.
 * - Typing the first character of a disabled item's label will not focus the item.
 * - Mouse or keyboard interaction will not expand/collapse disabled items.
 * - Mouse or keyboard interaction will not select disabled items.
 * - Shift + arrow keys will skip disabled items and, the next non-disabled item will be selected.
 * - Programmatic focus will not focus disabled items.
 *
 * If it is true:
 *
 * - Arrow keys will focus disabled items.
 * - Typing the first character of a disabled item's label will focus the item.
 * - Mouse or keyboard interaction will not expand/collapse disabled items.
 * - Mouse or keyboard interaction will not select disabled items.
 * - Shift + arrow keys will not skip disabled items but, the disabled item will not be selected.
 * - Programmatic focus will focus disabled items.
 */
export const DisabledTreeItems = story(() => {
  const [focusDisabledItems, setFocusDisabledItems] = React.useState(false)
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFocusDisabledItems(event.target.checked)
  }

  return (
    <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
      <Box sx={{ mb: 1, ml: 1 }}>
        <FormControlLabel
          control={
            <Switch
              checked={focusDisabledItems}
              onChange={handleToggle}
              name='focusDisabledItems'
            />
          }
          label='Focus disabled items'
        />
      </Box>
      <SimpleTreeView
        aria-label='disabled items'
        slots={{
          collapseIcon: ExpandMoreIcon,
          expandIcon: ChevronRightIcon,
        }}
        disabledItemsFocusable={focusDisabledItems}
        multiSelect
      >
        <TreeItem itemId='1' label='One'>
          <TreeItem itemId='2' label='Two' />
          <TreeItem itemId='3' label='Three' />
          <TreeItem itemId='4' label='Four' />
        </TreeItem>
        <TreeItem itemId='5' label='Five' disabled>
          <TreeItem itemId='6' label='Six' />
        </TreeItem>
        <TreeItem itemId='7' label='Seven'>
          <TreeItem itemId='8' label='Eight' />
          <TreeItem itemId='9' label='Nine'>
            <TreeItem itemId='10' label='Ten'>
              <TreeItem itemId='11' label='Eleven' />
              <TreeItem itemId='12' label='Twelve' />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </SimpleTreeView>
    </Box>
  )
})

import React from 'react'
import {
  ChevronRight as ChevronRightIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material'
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
  SvgIconProps,
  TreeItemContentProps,
  TreeItemProps,
  TreeViewProps,
} from '@monorail/components'
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  TreeItem,
  treeItemClasses,
  TreeView,
  Typography,
  useTreeItem,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Display/TreeView', component: TreeView }

const Template = story<TreeViewProps>(
  args => (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      {...args}
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="Material-UI">
          <TreeItem nodeId="8" label="index.js" />
        </TreeItem>
      </TreeItem>
    </TreeView>
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
export const MultiSelection = story(Template, {
  args: { multiSelect: true },
})

/**
 * The tree view also offers a controlled API.
 */
export const Controlled = story(() => {
  const [expanded, setExpanded] = React.useState<Array<string>>([])
  const [selected, setSelected] = React.useState<Array<string>>([])

  const handleToggle = (
    event: React.SyntheticEvent,
    nodeIds: Array<string>,
  ) => {
    setExpanded(nodeIds)
  }

  const handleSelect = (
    event: React.SyntheticEvent,
    nodeIds: Array<string>,
  ) => {
    setSelected(nodeIds)
  }

  const handleExpandClick = () => {
    setExpanded(oldExpanded =>
      oldExpanded.length === 0 ? ['1', '5', '6', '7'] : [],
    )
  }

  const handleSelectClick = () => {
    setSelected(oldSelected =>
      oldSelected.length === 0
        ? ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        : [],
    )
  }

  return (
    <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
      <Box sx={{ mb: 2 }}>
        <Button variant="text" onClick={handleExpandClick}>
          {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button>
        <Button variant="text" onClick={handleSelectClick}>
          {selected.length === 0 ? 'Select all' : 'Unselect all'}
        </Button>
      </Box>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect
      >
        <TreeItem nodeId="1" label="Applications">
          <TreeItem nodeId="2" label="Calendar" />
          <TreeItem nodeId="3" label="Chrome" />
          <TreeItem nodeId="4" label="Webstorm" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="6" label="Material-UI">
            <TreeItem nodeId="7" label="src">
              <TreeItem nodeId="8" label="index.js" />
              <TreeItem nodeId="9" label="tree-view.js" />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
    </Box>
  )
})

/**
 * While the `TreeView`/`TreeItem` component API maximizes flexibility, an extra step is needed to handle a rich object.
 *
 * Let's consider a data variable with the following shape, recursion can be used to handle it.
 */
export const RichObject = story(() => {
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

  const renderTree = (nodes: RenderTree) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map(node => renderTree(node))
        : null}
    </TreeItem>
  )

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {renderTree(data)}
    </TreeView>
  )
})

/**
 * You can use the `ContentComponent` prop and the `useTreeItem` hook to further customize the behavior of the `TreeItem`.
 *
 * Such as limiting expansion to clicking the icon.
 */
export const ContentComponentPropExample1 = story(() => {
  const CustomContent = React.forwardRef(function CustomContent(
    props: TreeItemContentProps,
    ref,
  ) {
    const {
      classes,
      className,
      label,
      nodeId,
      icon: iconProp,
      expansionIcon,
      displayIcon,
    } = props

    const {
      disabled,
      expanded,
      selected,
      focused,
      handleExpansion,
      handleSelection,
      preventSelection,
    } = useTreeItem(nodeId)

    const icon = iconProp ?? expansionIcon ?? displayIcon

    const handleMouseDown = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
      preventSelection(event)
    }

    const handleExpansionClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
      handleExpansion(event)
    }

    const handleSelectionClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
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
        <Typography
          onClick={handleSelectionClick}
          component="div"
          className={classes.label}
        >
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
      <TreeView
        aria-label="icon expansion"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      >
        <CustomTreeItem nodeId="1" label="Applications">
          <CustomTreeItem nodeId="2" label="Calendar" />
          <CustomTreeItem nodeId="3" label="Chrome" />
          <CustomTreeItem nodeId="4" label="Webstorm" />
        </CustomTreeItem>
        <CustomTreeItem nodeId="5" label="Documents">
          <CustomTreeItem nodeId="10" label="OSS" />
          <CustomTreeItem nodeId="6" label="Material-UI">
            <CustomTreeItem nodeId="7" label="src">
              <CustomTreeItem nodeId="8" label="index.js" />
              <CustomTreeItem nodeId="9" label="tree-view.js" />
            </CustomTreeItem>
          </CustomTreeItem>
        </CustomTreeItem>
      </TreeView>

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
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
      '&.Mui-selected:hover &': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
      '&.Mui-selected.Mui-focused &': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity +
            theme.palette.action.focusOpacity,
        ),
      },
    },
  }))

  const CustomContent = React.forwardRef(function CustomContent(
    props: TreeItemContentProps,
    ref,
  ) {
    const {
      className,
      classes,
      label,
      nodeId,
      icon: iconProp,
      expansionIcon,
      displayIcon,
    } = props

    const {
      disabled,
      expanded,
      selected,
      focused,
      handleExpansion,
      handleSelection,
      preventSelection,
    } = useTreeItem(nodeId)

    const icon = iconProp ?? expansionIcon ?? displayIcon

    const handleMouseDown = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
      preventSelection(event)
    }

    const handleClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
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
        <div className="MuiTreeItem-contentBar" />
        <div className={classes.iconContainer}>{icon}</div>
        <Typography component="div" className={classes.label}>
          {label}
        </Typography>
      </CustomContentRoot>
    )
  })

  const CustomTreeItem = (props: TreeItemProps) => (
    <TreeItem ContentComponent={CustomContent} {...props} />
  )

  return (
    <TreeView
      aria-label="icon expansion"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, position: 'relative' }}
    >
      <CustomTreeItem nodeId="1" label="Applications">
        <CustomTreeItem nodeId="2" label="Calendar" />
        <CustomTreeItem nodeId="3" label="Chrome" />
        <CustomTreeItem nodeId="4" label="Webstorm" />
      </CustomTreeItem>
      <CustomTreeItem nodeId="5" label="Documents">
        <CustomTreeItem nodeId="10" label="OSS" />
        <CustomTreeItem nodeId="6" label="Material-UI">
          <CustomTreeItem nodeId="7" label="src">
            <CustomTreeItem nodeId="8" label="index.js" />
            <CustomTreeItem nodeId="9" label="tree-view.js" />
          </CustomTreeItem>
        </CustomTreeItem>
      </CustomTreeItem>
    </TreeView>
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
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 0,
      [`& .${treeItemClasses.content}`]: {
        paddingLeft: theme.spacing(4),
      },
    },
  }))

  function StyledTreeItem(props: StyledTreeItemProps) {
    const {
      bgColor,
      color,
      labelIcon: LabelIcon,
      labelInfo,
      labelText,
      ...other
    } = props

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
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography
              variant="body2"
              sx={{ fontWeight: 'inherit', flexGrow: 1 }}
            >
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
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
    <TreeView
      aria-label="gmail"
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <StyledTreeItem nodeId="1" labelText="All Mail" labelIcon={MailIcon} />
      <StyledTreeItem nodeId="2" labelText="Trash" labelIcon={DeleteIcon} />
      <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
        <StyledTreeItem
          nodeId="5"
          labelText="Social"
          labelIcon={SupervisorAccountIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="6"
          labelText="Updates"
          labelIcon={InfoIcon}
          labelInfo="2,294"
          color="#e3742f"
          bgColor="#fcefe3"
        />
        <StyledTreeItem
          nodeId="7"
          labelText="Forums"
          labelIcon={ForumIcon}
          labelInfo="3,566"
          color="#a250f5"
          bgColor="#f3e8fd"
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Promotions"
          labelIcon={LocalOfferIcon}
          labelInfo="733"
          color="#3c8039"
          bgColor="#e6f4ea"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />
    </TreeView>
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
              name="focusDisabledItems"
            />
          }
          label="Focus disabled items"
        />
      </Box>
      <TreeView
        aria-label="disabled items"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        disabledItemsFocusable={focusDisabledItems}
        multiSelect
      >
        <TreeItem nodeId="1" label="One">
          <TreeItem nodeId="2" label="Two" />
          <TreeItem nodeId="3" label="Three" />
          <TreeItem nodeId="4" label="Four" />
        </TreeItem>
        <TreeItem nodeId="5" label="Five" disabled>
          <TreeItem nodeId="6" label="Six" />
        </TreeItem>
        <TreeItem nodeId="7" label="Seven">
          <TreeItem nodeId="8" label="Eight" />
          <TreeItem nodeId="9" label="Nine">
            <TreeItem nodeId="10" label="Ten">
              <TreeItem nodeId="11" label="Eleven" />
              <TreeItem nodeId="12" label="Twelve" />
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
    </Box>
  )
})

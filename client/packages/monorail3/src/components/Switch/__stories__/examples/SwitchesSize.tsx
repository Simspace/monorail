import * as React from 'react';
import { Switch } from '../../Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function SwitchesSize() {
  return (
    <div>
      <Switch {...label} defaultChecked size="small" />
      <Switch {...label} defaultChecked />
    </div>
  );
}

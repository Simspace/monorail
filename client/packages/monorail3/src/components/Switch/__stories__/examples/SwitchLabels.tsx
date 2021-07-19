import * as React from 'react';
import { FormGroup } from '../../../FormGroup/FormGroup';
import { FormControlLabel } from '../../../FormControlLabel/FormControlLabel';
import { Switch } from '../../Switch';

export default function SwitchLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
  );
}

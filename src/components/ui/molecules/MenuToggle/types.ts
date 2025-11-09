import type { Ref } from 'react';

export type MenuToggleProps = {
  onToggle: () => void;
  isExpanded: boolean;
  isDisabled: boolean;
  isActive: boolean;
  labelRef: Ref<HTMLParagraphElement>;
  controlId?: string;
  label?: string;
};


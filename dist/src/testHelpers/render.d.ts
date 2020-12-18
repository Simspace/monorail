import React from 'react';
import { Story } from '@storybook/react';
import { RenderOptions, RenderResult } from '@testing-library/react';
/**
 * Renders content for tests inside theme providers
 */
export declare function renderWithTheme(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult;
/**
 * Renders a Storybook story for testing
 */
export declare function renderStory(Story: Story, options?: Omit<RenderOptions, 'queries'>): RenderResult;

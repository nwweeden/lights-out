import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Board from './Board';

it ('renders', function(){
  render(<Board/>)
})

it ('renders multiple cells', function(){
  const {container} = render (<Board
  nrows = {4}
  ncols = {4} />)

  expect(container.querySelectorAll('td').length).toBe(16)
})

it ('produces expected lights on', function(){
  const {container} = render(<Board nrows = {4}
    ncols = {4}
    chanceLightStartsOn = {0.2}
    />)

  expect(container.querySelectorAll('.Cell-lit').length).toBeLessThan(8)
})
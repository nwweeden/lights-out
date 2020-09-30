import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Cell from './Cell';

it ('renders', function(){
  render(<Cell/>)
})

it ('renders a lit cell', function(){
  const { container } = render(<Cell
    isLit={true}
    />)

    expect(container.querySelector('.Cell-lit')).toBeInTheDocument();
})

it ('renders an unlit cell', function(){
  const { container } = render(<Cell
    isLit={false}
    />)

    expect(container.querySelector('.Cell-lit')).not.toBeInTheDocument();
    expect(container.querySelector('.Cell')).toBeInTheDocument();
})
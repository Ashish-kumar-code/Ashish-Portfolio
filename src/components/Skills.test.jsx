import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skills from './Skills'
import React from 'react'

describe('Skills Component', () => {
  it('renders skills section with categories and skills', () => {
    render(<Skills />)

    expect(screen.getByText('Skills & Technologies')).toBeDefined()
    expect(screen.getByText('Engineering Roadmap')).toBeDefined()
    expect(screen.getByText('Java')).toBeDefined()
    expect(screen.getByText('Spring Boot')).toBeDefined()
    expect(screen.getByText('React.js')).toBeDefined()
    expect(screen.getByText('Cursor')).toBeDefined()
    expect(screen.getByText('VS Code')).toBeDefined()
    expect(screen.getByText('Eclipse')).toBeDefined()
    expect(screen.getByText('Jupyter Notebook')).toBeDefined()
  })
})

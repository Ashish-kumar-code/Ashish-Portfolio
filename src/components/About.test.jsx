import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'
import React from 'react'

describe('About Component', () => {
  it('renders about section with candidate profile and recruiter snapshot', () => {
    render(<About />)

    expect(screen.getByText('About Me')).toBeDefined()
    expect(screen.getByText('Candidate Profile')).toBeDefined()
    expect(screen.getByText('Recruiter Quick Snapshot')).toBeDefined()
    expect(screen.getByText('Target Roles')).toBeDefined()
    expect(screen.getByText('Core Stack')).toBeDefined()
  })
})

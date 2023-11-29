import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import Header from '../molecules/Header'

declare module 'vitest' {
    interface Assertion<T> {
        toMatchImageSnapshot(): T
    }
}

expect.extend({ toMatchImageSnapshot })

describe('Header', () => {
    it('Renders header with logo', () => {
        render(<Header />)
        const logoImage = screen.getByAltText(/Logo/i)
        expect(logoImage).toBeInTheDocument()

        expect(document.body).toMatchSnapshot()
    })
})

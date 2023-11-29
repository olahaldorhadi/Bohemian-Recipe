import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../molecules/Footer'

describe('Footer', () => {
    it('Renders Bohemian Recipe', () => {
        render(<Footer />)
        const currentYear = new Date().getFullYear()
        const expectedText = `${currentYear} Bohemian Recipe`

        expect(screen.getByText(expectedText))
        expect(document.body).toMatchSnapshot()
    })
})

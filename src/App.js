import React, { useState } from 'react'

export default function App() {
  const [base, setBase] = useState(16)

  function getRemValue(pixel) {
    return (pixel / base).toPrecision(3).toString()
  }

  function handleChange(event) {
    setBase(parseInt(event.target.value, 10))
  }

  function renderFontSizes() {
    if (!base) return

    let rows = []

    for (let pixel = 1; pixel <= 100; pixel++) {
      const rem = getRemValue(pixel)
      const isBase = rem === '1'

      rows.push(
        <tr key={pixel} className={isBase ? 'is-base' : ''}>
          <td>{pixel}px</td>
          <td>{rem}rem</td>
        </tr>
      )
    }

    return rows
  }

  function renderBreakpoints() {
    if (!base) return

    const breakpoints = [
      { pixel: 320, device: 'iPhone SE' },
      { pixel: 375, device: 'iPhone 6, 7, 8, X' },
      { pixel: 414, device: 'iPhone 8 Plus' },
      { pixel: 568, device: 'iPhone SE' },
      { pixel: 667, device: 'iPhone 6, 7, 8' },
      { pixel: 736, device: 'iPhone 8 Plus' },
      { pixel: 812, device: 'iPhone X' },
      { pixel: 768, device: 'iPad Air, iPad Mini, iPad Pro 9"' },
      { pixel: 834, device: 'iPad Pro 10"' },
      { pixel: 1024, device: 'iPad Air, iPad Mini, iPad Pro 9"' },
      { pixel: 1024, device: 'iPad Pro 12" (portrait)' },
      { pixel: 1112, device: 'iPad Pro 10"' },
      { pixel: 1366, device: 'HD laptops (768p)' },
      { pixel: 1366, device: 'iPad Pro 12" (landscape)' },
      { pixel: 1440, device: '13" MacBook Pro (2x scaling)' },
      { pixel: 1680, device: '13" MacBook Pro (1.5x scaling)' },
      { pixel: 1920, device: '1080p displays' },
    ]
    let rows = []

    breakpoints.map(({ pixel, device }, i) => {
      const rem = getRemValue(pixel)
      return rows.push(
        <tr key={i}>
          <td>{pixel}px</td>
          <td>{rem}rem</td>
          <td>{device}</td>
        </tr>
      )
    })

    return rows
  }

  return (
    <div>
      <h1>PX to REM Calculator</h1>

      <label>
        Base font-size in PX
        <input type="number" value={base} onChange={handleChange} />
      </label>

      <main>
        <section>
          <h2>Font sizes</h2>
          <table>
            <thead>
              <tr>
                <th>PX</th>
                <th>REM</th>
              </tr>
            </thead>

            <tbody>{renderFontSizes()}</tbody>
          </table>
        </section>
        <section>
          <h2>Breakpoints</h2>
          <table>
            <thead>
              <tr>
                <th>PX</th>
                <th>REM</th>
                <th>Device</th>
              </tr>
            </thead>

            <tbody>{renderBreakpoints()}</tbody>
          </table>
        </section>
      </main>
    </div>
  )
}

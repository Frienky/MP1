'use client'

import React, { useRef, useEffect } from 'react'

export function ResponsiveTable({
  children,
  ...props
}: React.TableHTMLAttributes<HTMLTableElement>) {
  const tableRef = useRef<HTMLTableElement>(null)

  useEffect(() => {
    const table = tableRef.current
    if (!table) return

    const headers = Array.from(table.querySelectorAll('thead th')).map(
      (th) => th.textContent?.trim() ?? ''
    )
    if (headers.length === 0) return

    table.querySelectorAll('tbody tr').forEach((row) => {
      Array.from(row.querySelectorAll('td')).forEach((td, i) => {
        if (headers[i]) td.setAttribute('data-label', headers[i])
      })
    })
  }, [])

  return (
    <div className="responsive-table-wrapper overflow-x-auto my-4">
      <table ref={tableRef} className="responsive-table w-full" {...props}>
        {children}
      </table>
    </div>
  )
}

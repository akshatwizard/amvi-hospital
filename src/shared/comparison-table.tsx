import { ComparisonTable as ComparisonTableData } from '@/types/condition-page'

export default function ComparisonTable({ data }: { data: ComparisonTableData }) {
    return (
        <div className='overflow-x-auto rounded-card border border-rose-100'>
            <table className='w-full text-sm border-collapse min-w-140'>
                <thead>
                    <tr className='bg-rose-50'>
                        {data.columns.map((col) => (
                            <th key={col} className='text-left font-serif text-plum-ink px-5 py-3 border-b border-rose-100'>
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, i) => (
                        <tr key={i} className='even:bg-rose-50/30'>
                            {row.map((cell, j) => (
                                <td key={j} className='px-5 py-3.5 text-warm-slate border-b border-rose-100 last:border-0 align-top'>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
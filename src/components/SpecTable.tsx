export default function SpecTable({ specs, caption }: { specs: [string, string][]; caption: string }) {
  return (
    <table className="w-full border-collapse text-sm">
      <caption className="pb-2 text-left font-mono text-xs uppercase tracking-widest text-muted">
        {caption}
      </caption>
      <tbody>
        {specs.map(([k, v]) => (
          <tr key={k} className="border-t border-line">
            <th scope="row" className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-wider text-muted">
              {k}
            </th>
            <td className="py-2 font-mono text-ink/90">{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

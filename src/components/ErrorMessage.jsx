export function ErrorMessage({ message }) {
  if (!message) return null

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
      <p className="font-semibold">Erro</p>
      <p className="text-sm">{message}</p>
    </div>
  )
}

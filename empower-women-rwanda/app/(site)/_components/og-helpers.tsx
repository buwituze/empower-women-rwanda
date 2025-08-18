export function PageHeader({
  title = "Title",
  description = "Description",
}: {
  title?: string
  description?: string
}) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-[#20603e]">{title}</h1>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  )
}

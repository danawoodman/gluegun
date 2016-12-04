export default async (context) => {
  const template = 'simple.njk'
  const dir = context.directories['root'] || 'generated'
  const target = `${dir}/simple.txt`

  return context.generate({ template, target, askToOverwrite: false })
}

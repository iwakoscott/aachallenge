export function unslug(slug){
  const parts = slug.split('-');
  return parts.map(part => part[0].toUpperCase() + part.slice(1)).join(" ");
}

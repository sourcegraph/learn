export default function slugToTitleCase(slug: string): string {
    return slug.split('-').map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ')
}

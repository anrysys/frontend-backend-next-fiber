import Link from 'next/link'

export default function Page({ params: { lng } }: { params: { lng: any } }) {
  return (
    <>
      <h1>Hi there!</h1>
      <Link href={`/${lng}/second-page`}>
        second page
      </Link>
    </>
  )
}
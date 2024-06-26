import Link from 'next/link'

export default function SecondPage({ params: { lng } }: {
  params: {
    lng: string
  }
}) {
  return (
    <>
      <h1>Hi there!</h1>
      <Link href={`/${lng}/client-page`}>
        client-page
      </Link>

    </>
  )
}
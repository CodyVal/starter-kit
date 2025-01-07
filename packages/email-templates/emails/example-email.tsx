import {
  Html,
  Head,
  Body,
  Tailwind,
  Font,
  Text,
  Container,
  Heading,
} from '@react-email/components'

// You can add props to the email component
export function ExampleEmail() {
  return (
    <Html>
      <Head>
        <Font fontFamily="Inter" fallbackFontFamily="sans-serif" />
      </Head>
      <Body>
        <Tailwind>
          <Container>
            <Heading className="text-2xl font-bold">Hello, World!</Heading>

            <Text className="text-base">
              Congrats on sending your <strong>first email!</strong>
            </Text>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

export default ExampleEmail

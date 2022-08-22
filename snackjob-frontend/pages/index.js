import { Box, Button, Icon, Text, Stack, Img, Input } from '@chakra-ui/react'
import { useState } from 'react'

export default function Home() {
  const [formValues, setFormValues] = useState({
    name: '',
    title: ''
  })

  const createSnackjob = (e) => {
    e.preventDefault()
    if (formValues.name !== '' && formValues.title !== '') {
      fetch(`https://snackjob-api.schrodinger-hat.it/api/v1/snackjob?name=${encodeURIComponent(formValues.name)}&title=${encodeURIComponent(formValues.title)}`)
        .then((r) => r.json().then((j) => {
            window.location.href = `/snackjob/${j.md5}`
        }))
        .catch((e) => console.log(e))
    } else {
      alert('Nope. Write down your name and title, thanks. Yes, this is an old style alert.');
    }
  }

  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{
          base: "full",
          md: 11 / 12,
          xl: 9 / 12,
        }}
        mx="auto"
        textAlign={{
          base: "left",
          md: "center",
        }}
      >
        <Text
          mb={2}
          fontSize={{
            base: "4xl",
            md: "6xl",
          }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{
            base: "normal",
            md: "tight",
          }}
          color="gray.900"
          _dark={{
            color: "gray.100",
          }}
        >
          Be{" "}
          <Text
            display={{
              base: "block",
              lg: "inline",
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            whoever you want to be
          </Text>{" "}
          anywhere.
        </Text>
        <Text
          fontSize={{
            base: "xl",
            md: "3xl",
          }}
        >
          <Text
            px={{
              base: 0,
              lg: 24,
            }}
            fontSize={{
              base: "xl",
              md: "3xl",
            }}
            mb={6}
            display={{
              base: "block",
              lg: "inline",
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            Unleash yourself
          </Text>
        </Text>
        <Text
          px={{
            base: 0,
            lg: 24,
          }}
          mb={6}
          fontSize={{
            base: "lg",
            md: "xl",
          }}
          color="gray.600"
          _dark={{
            color: "gray.300",
          }}
        >
          Snackjob is a job title generator for any kind of business, positions and domains.
          Don't be afraid to be the one that is leading the trend
        </Text>
        <Stack
          direction={{
            base: "column",
            sm: "row",
          }}
          mb={{
            base: 4,
            md: 8,
          }}
          mt={10}
          spacing={2}
          justifyContent={{
            sm: "left",
            md: "center",
          }}
        >
          <Input onChange={(e) => setFormValues((p) => { return { ...p, name: e.target.value }})} width={'sm'} placeholder='Your name' />
          <Input onChange={(e) => setFormValues((p) => { return { ...p, title: e.target.value }})} width={'sm'} placeholder='Your Current Job Title' />
          <Button
            as="a"
            onClick={() => createSnackjob()}
            href={'#snackjob-form'}
            variant="outline"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{
              base: "full",
              sm: "auto",
            }}
            mb={{
              base: 2,
              sm: 0,
            }}
            size="md"
            cursor="pointer"
          >
            Go big now
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </Icon>
          </Button>
        </Stack>
        <Img mt={10} mx={'auto'} src='/demo.gif' />
      </Box>
    </Box>
  )
}

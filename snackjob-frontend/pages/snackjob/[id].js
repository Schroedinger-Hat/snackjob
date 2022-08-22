import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Box, Text, Button, Stack, Icon } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Snackjob() {
    const router = useRouter()
    const { id } = router.query

    const [job, setJob] = useState({
        name: '...',
        title: '...'
    })

    const svgToPng = function (svgText, width, height) {
        var svgString = new XMLSerializer().serializeToString(document.querySelector('#bsvg'));
        var canvas = document.createElement("canvas");
        canvas.width = width * devicePixelRatio
        canvas.height = height * devicePixelRatio

        var ctx = canvas.getContext("2d");
        var DOMURL = self.URL || self.webkitURL || self;
        var img = new Image();
        var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
        var url = DOMURL.createObjectURL(svg);
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
            var png = canvas.toDataURL("image/png");
            var arr = png.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            const pngBlob = new Blob([u8arr], {type: mime })
            window.open(DOMURL.createObjectURL(pngBlob));
            downloadBlob(pngBlob, 'snackjob-business-card.png');
        };
        img.src = url;
    };

    const downloadBlob = (blob, name = 'file.txt') => {
        // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
        const blobUrl = URL.createObjectURL(blob);
      
        // Create a link element
        const link = document.createElement("a");
      
        // Set link's href to point to the Blob URL
        link.href = blobUrl;
        link.download = name;
      
        // Append link to the body
        document.body.appendChild(link);
      
        // Dispatch click event on the link
        // This is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(
          new MouseEvent('click', { 
            bubbles: true, 
            cancelable: true, 
            view: window 
          })
        );
      
        // Remove link from body
        document.body.removeChild(link);
      }
      

    useEffect(() => {
        fetch(`https://snackjob-api.schrodinger-hat.it/api/v1/snackjob?md5=${id}`)
            .then((r) => r.json().then((j) => {
                setJob({
                    name: j.name,
                    title: j.snack_job
                })
            }))
            .catch((e) => console.log(e))
    }, [id])


    return (
        <>
            <Head>
                <title>{job.name} | {job.title}</title>
                <meta name="description" content="Snackjob is a job title generator for any kind of business, positions and domains. Don't be afraid to be the one that is leading the trend" />
                <meta property="og:title" content={`${job.name} | ${job.title}`} />
                <meta property="og:url" content="https://jobs.schrodinger-hat.it/" />
                <meta property="og:description" content="Snackjob is a job title generator for any kind of business, positions and domains." />
                <meta name="twitter:title" content={`${job.name} | ${job.title}`} />
                <meta name="twitter:description" content="Snackjob is a job title generator for any kind of business, positions and domains." />
            </Head>
            <Box px={8} py={5} mx="auto">
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
                        mb={5}
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
                        Here is your{" "}
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
                            Snackjob
                        </Text>
                    </Text>
                    <Stack mx={'auto'} my={5} width={'sm'} spacing={2} direction={'row'}>
                    <Box
                        display={{
                            md: "flex",
                        }}
                        alignItems="center"
                        as="a"
                        w={1/3}
                        href={`http://twitter.com/share?text=I'm glad to share my new position: ${job.title}! Discover yours on snackjob by @schrodinger_hat and @thejoin95!&url=${window.location.href}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        bg="gray.50"
                        borderWidth="1px"
                        borderColor="gray.200"
                        px="1em"
                        minH="36px"
                        rounded="md"
                        fontSize="sm"
                        color="gray.800"
                        outline="0"
                        transition="all 0.3s"
                        _hover={{
                            bg: "gray.100",
                            borderColor: "gray.300",
                        }}
                        _active={{
                            borderColor: "gray.200",
                        }}
                        _focus={{
                            boxShadow: "outline",
                        }}
                        ml={5}
                        >
                        <Box as="strong" lineHeight="inherit" fontWeight="semibold">
                            Twitter <ExternalLinkIcon verticalAlign={'text-top'} />
                        </Box>
                    </Box>
                    <Box
                        w={1/3}
                        display={{
                            md: "flex",
                        }}
                        alignItems="center"
                        as="a"
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        bg="gray.50"
                        borderWidth="1px"
                        borderColor="gray.200"
                        px="1em"
                        minH="36px"
                        rounded="md"
                        fontSize="sm"
                        color="gray.800"
                        outline="0"
                        transition="all 0.3s"
                        _hover={{
                            bg: "gray.100",
                            borderColor: "gray.300",
                        }}
                        _active={{
                            borderColor: "gray.200",
                        }}
                        _focus={{
                            boxShadow: "outline",
                        }}
                        ml={5}
                        >
                        <Box as="strong" lineHeight="inherit" fontWeight="semibold">
                            Facebook <ExternalLinkIcon verticalAlign={'text-top'} />
                        </Box>
                    </Box>
                    <Button
                        as="a"
                        onClick={(e) => {
                            e.preventDefault()
                            const width = window.document.querySelector('#bsvg').width.baseVal.value
                            const height = window.document.querySelector('#bsvg').height.baseVal.value
                            svgToPng(window.document.querySelector('#bsvg').innerHTML, width, height)
                        }}
                        href={''}
                        variant="outline"
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"
                        w={{
                        base: 1/3
                        }}
                        mb={{
                        base: 10,
                        sm: 5,
                        }}
                        size="md"
                        cursor="pointer"
                    >
                        Download
                    </Button>
                    </Stack>
                    <svg id='bsvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 719.05 410.88"><style>{`.cls-1{fill:#f6f6f6;}.cls-2{fill:#931004;}.cls-3{fill:#c00d0d;}.cls-4{fill:#db0812;}.cls-5{font-size:10px;fill:#9f1f21;letter-spacing:0.1em;}.cls-15,.cls-5,.cls-6{font-family:'Roboto', sans-serif}.cls-6{font-size:12px;fill:#1d1d1b;}.cls-7{letter-spacing:0em;}.cls-8{letter-spacing:0em;}.cls-9{letter-spacing:0em;}.cls-10{letter-spacing:0em;}.cls-11{letter-spacing:-0.01em;}.cls-12{letter-spacing:-0.01em;}.cls-13{letter-spacing:0em;}.cls-14{letter-spacing:-0.01em;}.cls-15{font-size:28px;fill:#5c5c5c;}.cls-16{letter-spacing:-0.04em;}.cls-17{letter-spacing:0em;}`}</style><g id="Livello_2" data-name="Livello 2"><g id="Layer_1" data-name="Layer 1"><rect className="cls-1" width="719.05" height="410.88" rx="28.9" /><polygon className="cls-2" points="195.71 410.88 120.29 410.88 32.62 0 108.03 0 195.71 410.88" /><polygon className="cls-3" points="270.52 410.88 195.11 410.88 107.43 0 182.85 0 270.52 410.88" /><polygon className="cls-4" points="344.79 410.88 269.38 410.88 181.7 0 257.12 0 344.79 410.88" /><rect className="cls-3" x="372.86" y="190.13" width="302.64" height="5.97" /><text className="cls-5 position" transform="translate(380.49 220.75)">{job.title}</text><text className="cls-6" transform="translate(529.19 396.69)">Generated by @schrodinger_hat</text><text className="cls-15" transform="translate(378.18 167.44)">{job.name}</text></g></g></svg>
                </Box>
            </Box>
        </>
    )
}

import NextLink from 'next/link'
import {
    Container,
    Heading,
    Box,
    Button,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
    return(
        <Layout>
            <Container>
                <Box borderRadius="lg" 
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
                p={3} 
                mb={6} 
                align="center">
                    To view the project file for this, check out the Github button, 
                    otherwise find my favourite projects in <a href='/works/'>Works!</a>
                </Box>
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Shamsheer Inder Singh
                        </Heading>
                        <p>Software Developer ( Java  |  Python  |  JavaScript )</p>
                    </Box>
                </Box>
                <br/>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About Me:
                    </Heading>
                    <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button righticon={<ChevronRightIcon/>} color="purple">
                                Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Biography:
                    </Heading>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </BioSection>
                    <br/>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </BioSection>
                    <br/>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </BioSection>
                    <br/>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </BioSection>
                    <br/>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </BioSection>
                </Section>
                <br/>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        My Achievements:
                    </Heading>
                    <Paragraph>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
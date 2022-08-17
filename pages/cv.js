import {
    Container,
    Heading,
    Box,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'

const Page = () => {
    return(
        <Layout>
            <Container>
                <Box borderRadius="lg" 
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
                p={3} 
                mb={6} 
                align="center">
                    To download my CV, check it out on <a href='
                        #'
                    >&quot;LinkedIn&quot;</a> or if you want to see my projects, navigate to <a href='
                        /works/'
                    >Works</a>
                </Box>
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                    <Heading as="h3" fontSize={20} mb={4}>
                        Work Experience
                    </Heading>
                    </Box>
                </Box>
                <Section delay={0.2}> 
                    <Heading as="h3" variant="cv-title">
                        Swap Development
                    </Heading>
                    <Paragraph>
                        Worked on multiple projects
                    </Paragraph>
                    <br/>
                </Section>
                <br/>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h3" fontSize={20} mb={4}>
                            Education
                        </Heading>
                    </Box>
                </Box>
                <Section delay={0.2}> 
                    <Heading as="h3" variant="cv-title">
                        Dalhousie University (Sept 2021 - April 2023)
                    </Heading>
                    <Heading as="h3" fontSize={16} mb={4}>
                        Masters of Computer Science
                    </Heading>
                    <Paragraph>
                        Advanced Software Development Concepts, <br/>
                    </Paragraph>
                    <br/>
                </Section>
                <br/>
            </Container>
        </Layout>
    )
}

export default Page
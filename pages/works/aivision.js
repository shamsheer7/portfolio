import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import YoutubeEmbed from '../../components/youtubeEmbed'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                AI Vision - Dalhousie University <Badge>2020</Badge>
            </Title>
            <WorkImage
                src="/images/works/uoh-eyecatcher.png"
                alt="Dalhousie University"
            />
            <P>
                Part of my studies at the Dalhousie University, this
                assignment was a self-guided module in which I chose to research
                and develop a software artefact for a lane keeping/predictive
                steering algorithm for motor vehicles
                <br/><br/>
                This was alongside a research paper detailing the actual process
                in which I came up with the software, as well as the development
                and challenges that I faced. It can be available on request
            </P>
            <br/>
            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://github.com/">
                         https://github.com/
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <Link>Desktop</Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <Link>Python | OpenCV</Link>
                </ListItem>
            </List>
            <br/>
            <YoutubeEmbed embedId="b14ZnIqA5RI"/>
            <br/>
            <YoutubeEmbed embedId="iehJxeO2o8c"/>
            <br/>
            <YoutubeEmbed embedId="bNm_ECyLIbI"/>
            <br/>
        </Container>
    </Layout>
)

export default Project
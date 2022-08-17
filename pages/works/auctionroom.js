import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                AuctionRoom <Badge>2019</Badge>
            </Title>
            <WorkImage
                src="/images/works/uoh-eyecatcher.png"
                alt="Dalhousie University"
            />
            <P>
                Part of my studies at the Dalhousie University this
                assignment was a directed module in which I had to produce a
                software artefact and paper on a specific task. This one being  
                to create functionality for a Client-Server based auction application
                complete with user accounts and buying/selling/bidding
                <br/><br/>
                Utilising Spring for the UI design, JavaSpaces for hosting and 
                connecting it proved an understanding of the planning and 
                development associated with these systems. The paper is available 
                on request and details the UML, theory and development process
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
                    <Link>Java | JavaSpaces | Spring</Link>
                </ListItem>
            </List>
            <br/>
            <WorkImage src="/images/works/auctionroom.png"/>
        </Container>
    </Layout>
)

export default Project
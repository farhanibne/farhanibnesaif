import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'
import { IoLogoAndroid, IoLogoBitcoin, IoLogoChrome, IoLogoCodepen, IoLogoCss3, IoLogoDocker, IoLogoFirebase, IoLogoHackernews, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoNpm, IoLogoPwa, IoLogoPython, IoLogoReact } from 'react-icons/io5'

const Works = () => (
  <Layout title="Skills">
    
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={5}>
        <center>Skills</center>
        
      </Heading>
  <div>

      

      <center>
      
      <IoLogoHtml5 style={{fontSize:'35px',marginBottom:'15px'}}/>
      <input type="range" min="0" max="100" value="99" readOnly/><h6>99%</h6>  <br/>

      <IoLogoCss3 style={{fontSize:'35px',marginBottom:'15px'}}/>
      <input type="range" min="0" max="100" value="85" readOnly/><h6>85%</h6> <br/>

      <IoLogoJavascript style={{fontSize:'35px',marginBottom:'15px'}}/>
      <input type="range" min="0" max="100" value="85" readOnly/><h6>75%</h6> <br/>

      <IoLogoNodejs style={{fontSize:'35px',marginBottom:'15px'}}/>
      <input type="range" min="0" max="100" value="58" readOnly/><h6>58%</h6> <br/>

      <IoLogoReact style={{fontSize:'35px',marginBottom:'15px'}}/>
      <input type="range" min="0" max="100" value="80" readOnly/><h6>80%</h6> <br/>

      <IoLogoFirebase style={{fontSize:'35px',marginBottom:'15px'}}/>
      <input type="range" min="0" max="100" value="100" readOnly/><h6>100%</h6> <br/>
      
      <IoLogoAndroid style={{fontSize:'35px',marginBottom:'15px'}}/>
      <input type="range" min="0" max="100" value="20" readOnly/><h6>20%</h6> <br/>

      <IoLogoPython style={{fontSize:'35px',marginBottom:'15px'}}/>
      <input type="range" min="0" max="100" value="95" readOnly/><h6>95%</h6> <br/>

      <IoLogoBitcoin style={{fontSize:'35px',marginBottom:'15px'}}/>
      <input type="range" min="0" max="100" value="25" readOnly/><h6>25%</h6> <br/>

      <IoLogoChrome style={{fontSize:'35px',marginBottom:'15px'}}/>
      <input type="range" min="0" max="100" value="50" readOnly/><h6>50%</h6> <br/>

      <IoLogoNpm style={{fontSize:'35px',marginBottom:'15px'}}/>
      <input type="range" min="0" max="100" value="90" readOnly/><h6>90%</h6> <br/>

    </center>

    </div>
      

      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section>

      
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

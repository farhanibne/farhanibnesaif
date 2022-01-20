import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={8}>
        Contact Farhan
      </Heading>
      <form
        style={{ height: '50%', width: '50%' }}
        action="https://formsubmit.co/farhanibne760@gmail.com"
        method="POST"
      >
        <input
          style={{
            height: '35px',
            width: '200%',
            border: '1px dashed #6ec6d5',
            borderRadius: '5px 5px 5px 5px',
            backgroundColor: '#202023',
            color: 'white',
            padding: '10px'
          }}
          type="email"
          name="email"
          placeholder=" Enter Your E-mail"
          required
        />{' '}
        <br />
        <br />
        <input
          style={{
            height: '35px',
            width: '200%',
            border: '1px dashed #6ec6d5',
            borderRadius: '5px 5px 5px 5px',
            backgroundColor: '#202023',
            color: 'white',
            padding: '10px',
            marginBottom: '25px'
          }}
          type="text"
          name="message"
          placeholder=" Ask Me"
          required
        />
        <br /> <br />
        <button style={{border:'1px solid #6ec6d5',padding:'10px',borderRadius:'5px 5px 5px 5px'}} type="submit">Send me !!</button>
      </form>{' '}
      <br />
      <br />
      <br />
      <br />
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'

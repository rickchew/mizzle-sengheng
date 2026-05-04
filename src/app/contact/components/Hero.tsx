'use client'
import backgroundImg from '@/assets/images/bg/07.jpg'
import TextAreaFormInput from '@/components/form/TextAreaFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const Hero = () => {
  const contactFormSchema = yup.object({
    name: yup.string().required('Please enter your name'),
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    company: yup.string().required('Please enter your company name'),
    message: yup.string().required('Please enter your message'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  })

  return (
    <section className="pt-xl-8">
      <Container>
        <Row className="g-4 g-xxl-5">
          <Col xl={9} className="mx-auto">
            <Image src={backgroundImg} className="rounded" alt="contact-background" />
            <Row className="mt-n5 mt-sm-n7 mt-md-n8">
              <Col xs={11} lg={9} className="mx-auto">
                <Card className="shadow p-4 p-sm-5 p-md-6">
                  <CardHeader className="border-bottom px-0 pt-0 pb-5">
                    <nav className="mb-3" aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrumb-dots pt-0">
                        <li className="breadcrumb-item">
                          <Link href="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          Contact Us
                        </li>
                      </ol>
                    </nav>
                    <h1 className="mb-3 h3">Get in Touch with Seng Heng</h1>
                    <p className="mb-0">
                      Send us an enquiry and our team will respond within 1 business day. You can also reach us at{' '}
                      <Link href="mailto:info@sengheng.com">info@sengheng.com</Link>
                    </p>
                  </CardHeader>
                  <Form onSubmit={handleSubmit(() => {})} className="card-body px-0 pb-0 pt-5">
                    <TextFormInput name="name" label="Your name" containerClass="mb-4" control={control} placeholder="Your name" floating />
                    <TextFormInput
                      name="email"
                      label="Email address"
                      containerClass="mb-4"
                      control={control}
                      placeholder="name@example.com"
                      floating
                    />
                    <TextFormInput
                      name="company"
                      label="Company name"
                      containerClass="mb-4"
                      control={control}
                      placeholder="Your company"
                      floating
                    />
                    <TextAreaFormInput
                      name="message"
                      label="Message"
                      containerClass="mb-4"
                      control={control}
                      placeholder="Tell us about your requirements"
                      style={{ height: 120 }}
                      floating
                    />
                    <button className="btn btn-lg btn-primary mb-0" type="submit">
                      Send Enquiry
                    </button>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

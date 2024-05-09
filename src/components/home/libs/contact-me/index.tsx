import React from 'react';
import {
  ContactMeContainer,
  ContactMeDescriptionContainer,
  ContactMeFormContainer,
  StyledSocialIcons,
} from './index.styled';
import Image from 'next/image';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineLine,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { Col, Form, Input, Row } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const ContactMeSection: React.FC = () => {
  return (
    <ContactMeContainer>
      <ContactMeDescriptionContainer>
        <div className="desc-container">
          <Image
            className="image"
            src={'/assets/imgs/contact-animation.gif'}
            alt="my-image"
            width={500}
            height={800}
          />
          <div className="email-box">
            <span>Mail: </span>ifeanyiemmanuel585@gmail.com
          </div>
          <StyledSocialIcons>
            <span className="follow-me-text">Follow Me</span>
            <AiOutlineLine className="follow-me-text" style={{ marginTop: '3px' }} />
            <span>/</span>
            <AiOutlineInstagram className="social-icon" />
            <span>/</span>
            <AiOutlineTwitter className="social-icon" />
            <span>/</span>
            <AiFillFacebook className="social-icon" />
          </StyledSocialIcons>
        </div>
      </ContactMeDescriptionContainer>
      <ContactMeFormContainer>
        <div className="form-container">
          <div className="title">Contact Me</div>
          <Form
            name={'contact-me'}
            className={'mt-4'}
            onFinish={() => console.log('')}
            layout="vertical"
            requiredMark={false}
          >
            <Row>
              <Col lg={24} xs={24}>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Enter your name' }]}
                  label={<div>What's your name?</div>}
                  style={{ marginBottom: '40px' }}
                >
                  <Input suffix={<UserOutlined />} size="large" placeholder="Full Name here" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={24} xs={24}>
                <Form.Item
                  style={{ marginBottom: '80px' }}
                  name="email"
                  label={<div>Enter Your Email Address</div>}
                >
                  <Input suffix={<MailOutlined />} size="large" placeholder="Email Address here" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={24} xs={24}>
                <Form.Item style={{ marginBottom: '40px' }} name="message">
                  <TextArea placeholder="Write Message Here..." size="large" rows={1} />
                </Form.Item>
              </Col>
            </Row>

            {/* <Row>
              <Col lg={24} xs={24}>
                <Button
                  type="primary"
                  disabled={false}
                  htmlType="submit"
                  className="contact-form-button"
                >
                  Send Message
                </Button>
              </Col>
            </Row> */}
          </Form>
        </div>
      </ContactMeFormContainer>
    </ContactMeContainer>
  );
};

export default ContactMeSection;

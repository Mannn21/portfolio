import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Container, Wrapper, HeaderWrapper, Header, Info, Form, InputListWrapper, InputCard, Title, InputWrapper, Input, TextAreaWrapper, TextArea, Submit } from "../../style/Contact/ContactStyles";
import { useTheme } from "../../utils/themeChanger";

const sanitizeInput = (input: string): string => {
    const element = document.createElement("div");
    element.innerText = input;
    return element.innerHTML;
  };

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const {theme} = useTheme()
    
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

        if (!form.current) return;

		const sanitizedData = {
			user_name: sanitizeInput(form.current.user_name.value),
			email: sanitizeInput(form.current.email.value),
			phone: sanitizeInput(form.current.phone.value),
			message: sanitizeInput(form.current.message.value),
			subject: sanitizeInput(form.current.subject.value),
		};

		emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					user_name: sanitizedData.user_name,
					email: sanitizedData.email,
					message: sanitizedData.message,
					phone: sanitizedData.phone,
					subject: sanitizedData.subject,
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					Swal.fire({
						title: "Berhasil",
						text: "Pesan berhasil terkirim",
						icon: "success",
						timer: 3000,
					});
					form.current?.reset(); 
				},
				error => {
					Swal.fire({
						title: "Gagal",
						text: "Pesan gagal terkirim",
						icon: "error",
						timer: 3000,
					});
					console.log(error);
				}
			);
	};
    
    return (
        <Container id="contact">
            <Wrapper>
                <HeaderWrapper>
                    <Header>Contact Me</Header>
                    <Info>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, est, accusamus omnis quas praesentium provident cum voluptates ducimus quis assumenda doloremque minus laudantium tenetur corporis?</Info>
                </HeaderWrapper>
                <Form ref={form} onSubmit={sendEmail}>
                    <InputListWrapper>
                        <InputCard>
                            <Title htmlFor="name">Name</Title>
                            <InputWrapper>
                                <Input type="text" id="name" name="user_name" placeholder="Full Name" />
                            </InputWrapper>
                        </InputCard>
                        <InputCard>
                            <Title htmlFor="email">Email</Title>
                            <InputWrapper>
                                <Input type="email" id="email" name="email" placeholder="yourmail@email.com" />
                            </InputWrapper>
                        </InputCard>
                        <InputCard>
                            <Title htmlFor="phone">Phone</Title>
                            <InputWrapper>
                                <Input type="tel" id="phone" name="phone" placeholder="(+62)1234-5678" />
                            </InputWrapper>
                        </InputCard>
                        <InputCard>
                            <Title htmlFor="subject">Subject</Title>
                            <InputWrapper>
                                <Input type="text" id="subject" name="subject" placeholder="Ex. Colaboration" />
                            </InputWrapper>
                        </InputCard>
                    </InputListWrapper>
                    <TextAreaWrapper>
                        <Title htmlFor="message">Message</Title>
                        <InputWrapper>
                            <TextArea rows={4} cols={60} name="message" id="message" placeholder="Type your message"></TextArea>
                        </InputWrapper>
                    </TextAreaWrapper>
                    <Submit whileTap={{ scale: .9 }} whileHover={{ scale: 1.05, backgroundColor: theme.hover }} transition={{ bounceDamping: 10, bounceStiffness: 600 }} type="submit" value="Send Message" />
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Contact;
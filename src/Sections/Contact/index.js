// This is Contact component, it will contain contact form.
import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedIn from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";


const ContactSection = styled.div`
width: 100vw;
padding: calc(2.5rem + 2.5vw) 0;
background-color: var(--black);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Title = styled.h1`
display: inline-block;
font-size: calc(1rem + 1.5vw);
margin-top: 1rem;
margin-bottom: 3rem;
position: relative;
color: var(--white);

&::before {
  content: "";
  height: 1px;
  width: 50%;
  position: absolute;
  left: 50%;
  bottom: 0;
  border-bottom: 2px solid var(--red);
  transform: translate(-50%);

}
`;
const Icons = styled.div`
display: inline;
margin-bottom:3rem;
a {
  &:not(:last-child){
    margin-right:2rem;
  }

  &:hover {
    img {
      filter: invert(20%) sepia(200%) saturate(300%) hue-rotate(700deg);
    }
  }
}
  img{
    width: 3rem;
    height: 3rem;

  }
`;

const Row = styled.div`
@media only Screen and (max-width: 40em) {
  display: flex;
  flex-direction: column;
  input{
    &[name="name"]{
      margin-right: 0;
    }
  }
  
}
`;
const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
  input{
    padding: 1rem calc(0.5rem + 0.5vw);
    margin-bottom: 1rem;
    background-color: var(--kahve);
    border: none;
    border-radius: 4px;
    color: var(--black);
    &:active,&:focus {
      border: none;
      outline: none;
      background-color: var(--white);
    }
    &::placeholder{
      color: var(--black);
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea{
    padding: 1rem calc(0.5rem + 0.5vw);
    margin-bottom: 1rem;
    background-color: var(--kahve);
    border: none;
    border-radius: 4px;
    color: var(--black);
    &:active,&:focus {
      border: none;
      outline: none;
      background-color: var(--white);
    }
    &::placeholder{
      color: var(--black);
    }
  }
  button{
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;

&:hover{
  transform: scale(1.1);
}
&:active{
  transform: scale(0.9);
}
  }
`;

const Contact = () => {
  return <ContactSection id="contact">
    
    <Title>Bağlantı kurun</Title>
    <Icons>
      <a href="https://www.facebook.com/7projeofisi">
        <img src={Facebook} alt="FaceBook" />
      </a>
      <a href="https://www.linkedin.com/company/7proje-ofisi/">
        <img src={LinkedIn} alt="LinkedIn" />
      </a>
      <a href="https://twitter.com/7projeofisi">
        <img src={Twitter} alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/7proje/">
        <img src={Instagram} alt="Instagram" />
      </a>
    </Icons>
    <Form action="https://demo.7projeofisi.com/mailsend.php" method="post">
      <Row>
      <input type="text" name="name" placeholder="Adınız?" />
      <input type="email" name="emaila" placeholder="Gecerli bir mail girin." />
      <input type="hidden" name="sec" value="akjh3213DSADdsad" />
      </Row>
        <textarea name="ileti" placeholder="Mesajınız." cols="30" rows="2"></textarea>
      <div style={{ margin: "0 auto"}}>
        <input type="submit" name="submit" value="Gönder">
    </input>     
      
      </div>
    </Form>
  </ContactSection>;
};

export default Contact;

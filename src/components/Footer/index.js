// This is footer component
import Gmail from "../../assets/envelope-open-solid.svg";
import LinkedIn from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only Screen and (max-width:48em){
    flex-direction: column;
    align-items: center;
    div{
      &:first-child{
        margin-bottom: 1rem;
      }
    }
  }
`;
const LeftText = styled.div``;

const RightText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    filter: invert(100%);
    margin-left: 1rem;
    transition: all 0.2s ease-in-out;
  }
  a{
    &:hover{
      img{
        transform:scale(1.5);
        filter: invert(50%) sepia(100%) saturate(300%) hue-rotate(50deg) brightness(100%) contrast(97%);
      }
    }
  }
`;

const Footer = () => {
  return <FOOTER>
    <LeftText>
    © 2021 Yapım ve Tasarım <a href="#home">@7proje</a>
    </LeftText>
    <RightText>
    Bana şu yolla ulaşın ;) 0533 327 81 84
      <a href="mailto:info@7projeofisi.com">
        <img src={Gmail} alt="Gmail" />
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

    </RightText>
  </FOOTER>;
};

export default Footer;

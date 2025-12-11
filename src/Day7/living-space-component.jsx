import React from "react";
import styled, { createGlobalStyle } from "styled-components";

/*
  Single-file React component using styled-components.
  Replace image URLs in the `images` object with your actual assets.
  Usage: Drop this file in your React project, ensure `styled-components` is installed:
    npm install styled-components
  Then: import VeloraLandingPage from './VeloraLandingPage';
*/

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  html,body,#root { height: 100%; }
  body {
    margin: 0;
    font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    background: #FBF7F2; /* light cream / off-white page background */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #111111;
  }
`;

// Color tokens (tweak if you have exact hexs from the reference)
const COLORS = {
  orange: '#FF7A1A', // orange accent
  black: '#0A0A0A',
  cream: '#FBF7F2',
  darkFooter: '#0B0B0B',
  greenTag: '#35B46A'
};

// Placeholder images - replace these with your exact assets
const images = {
  hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3f3d3d3d',
  dining: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd',
  sofa: 'https://images.unsplash.com/photo-1549187774-b4ad5f0b2f3d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd',
  bed: 'https://images.unsplash.com/photo-1586023492129-5a1f5b0b9b2b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd',
  sofaProduct: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd',
  swingProduct: 'https://images.unsplash.com/photo-1505691723518-36a257f44d6b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd'
};

export default function VeloraLandingPage() {
  return (
    <PageWrapper>
      <GlobalStyle />

      <TopStrip>
        <TopStripInner>
          <LeftStripText>Desktop – 1</LeftStripText>
          <ViewPrototypeBtn>View Prototype</ViewPrototypeBtn>
        </TopStripInner>
      </TopStrip>

      <Header>
        <NavInner>
          <Logo>
            <LogoIcon />
            <span>Velora Living</span>
          </Logo>

          <NavMenu>
            <NavItem>Home</NavItem>
            <NavItem>Designs</NavItem>
            <NavItem>About us</NavItem>
            <NavItem>Trending</NavItem>
            <NavItem>Contact</NavItem>
          </NavMenu>

          <AuthButtons>
            <SignIn>Sign In</SignIn>
            <Register>Register</Register>
          </AuthButtons>
        </NavInner>
      </Header>

      <MainContent>
        <Hero>
          <HeroLeft>
            <HeroTitle>
              <span>Furniture That</span>
              <Highlight>Elevates Your Space</Highlight>
            </HeroTitle>
            <HeroSubtitle>Crafted for comfort. Designed for modern living.</HeroSubtitle>

            <HeroCTAs>
              <PrimaryCTA>Shop Now</PrimaryCTA>
              <OutlineCTA>Check New Arrivals</OutlineCTA>
            </HeroCTAs>
          </HeroLeft>

          <HeroRight>
            <Blob>
              <HeroImage src={images.hero} alt="Modern living room" />
            </Blob>
          </HeroRight>
        </Hero>

        <Section>
          <SectionHeader>
            <SectionTitle>Explore Our Categories</SectionTitle>
            <SectionSubtitle>Start building a home you always imagined</SectionSubtitle>
          </SectionHeader>

          <Categories>
            <CategoryCard>
              <CategoryImage src={images.dining} alt="Dining Sets" />
              <CategoryLabel>Dining Sets</CategoryLabel>
            </CategoryCard>

            <CategoryCard>
              <CategoryImage src={images.sofa} alt="Sofa & Seating" />
              <CategoryLabel>Sofa & Seating</CategoryLabel>
            </CategoryCard>

            <CategoryCard>
              <CategoryImage src={images.bed} alt="Bed & Mattress" />
              <CategoryLabel>Bed & Mattress</CategoryLabel>
            </CategoryCard>
          </Categories>
        </Section>

        <FeatureStrip>
          <FeatureItem>
            <FeatureIcon />
            <div>
              <strong>Free Shipping</strong>
              <div>Orders over ₹200</div>
            </div>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon />
            <div>
              <strong>Money-back</strong>
              <div>30 days guarantee</div>
            </div>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon />
            <div>
              <strong>Secure Payments</strong>
              <div>100% protected</div>
            </div>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon />
            <div>
              <strong>24/7 Support</strong>
              <div>Phone and email support</div>
            </div>
          </FeatureItem>
        </FeatureStrip>

        <Section>
          <SectionHeader>
            <SectionTitle>Trending Products</SectionTitle>
            <SectionSubtitle>Trends, updated just for you</SectionSubtitle>
          </SectionHeader>

          <Products>
            <ProductCard>
              <ProductImage src={images.sofaProduct} alt="Oxford Leatherette Sofa" />
              <ProductInfo>
                <div>
                  <ProductTitle>Oxford Leatherette Sofa</ProductTitle>
                  <ProductPrice>₹18,999</ProductPrice>
                </div>
                <ProductActions>
                  <NewTag>New</NewTag>
                  <ProductCTA>Shop Now</ProductCTA>
                </ProductActions>
              </ProductInfo>
            </ProductCard>

            <ProductCard>
              <ProductImage src={images.swingProduct} alt="Breeze Wooden Swing Bed" />
              <ProductInfo>
                <div>
                  <ProductTitle>Breeze Wooden Swing Bed</ProductTitle>
                  <ProductPrice>₹25,000</ProductPrice>
                </div>
                <ProductActions>
                  <NewTag>New</NewTag>
                  <ProductCTA>Shop Now</ProductCTA>
                </ProductActions>
              </ProductInfo>
            </ProductCard>
          </Products>
        </Section>
      </MainContent>

      <Footer>
        <FooterInner>
          <FooterLeft>
            <LogoFooter>
              <LogoIconSmall />
              <span>Velora Living</span>
            </LogoFooter>
          </FooterLeft>

          <FooterCenter>
            <FooterLinks>
              <a>Home</a>
              <a>Shop</a>
              <a>Products</a>
              <a>Blog</a>
              <a>Contact Us</a>
            </FooterLinks>

            <Copyright>Copyright © 2024 Velora Living. All rights reserved.</Copyright>
          </FooterCenter>

          <FooterRight>
            <SocialIcons>
              <SocialIcon />
              <SocialIcon />
              <SocialIcon />
            </SocialIcons>
          </FooterRight>
        </FooterInner>
      </Footer>
    </PageWrapper>
  );
}

/* ---------------- Styled Components ---------------- */

const PageWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const TopStrip = styled.div`
  height: 32px;
  background: ${COLORS.orange};
  display: flex;
  align-items: center;
  font-size: 13px;
`;
const TopStripInner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;
const LeftStripText = styled.div` color: white; opacity: 0.95; `;
const ViewPrototypeBtn = styled.button`
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
`;

const Header = styled.header`
  background: transparent;
  padding: 22px 24px;
`;
const NavInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display:flex;
  align-items:center;
  justify-content: space-between;
`;
const Logo = styled.div`
  display:flex;align-items:center;gap:12px;font-weight:700;font-size:20px;color:${COLORS.black};
`;
const LogoIcon = styled.div`
  width:36px;height:36px;background:${COLORS.orange};border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,0.08);
`;
const NavMenu = styled.nav`
  display:flex;gap:28px;align-items:center;font-weight:500;color:rgba(0,0,0,0.85);
`;
const NavItem = styled.div` cursor:pointer; `;
const AuthButtons = styled.div` display:flex;gap:14px;align-items:center; `;
const SignIn = styled.button`
  background:transparent;border:none;color:${COLORS.black};font-weight:600;cursor:pointer;
`;
const Register = styled.button`
  background:${COLORS.black};color:white;border:none;padding:10px 18px;border-radius:22px;font-weight:600;cursor:pointer;
`;

const MainContent = styled.main` padding: 24px; `;

const Hero = styled.section`
  display:flex;gap:40px;align-items:center;padding:40px 0;
`;
const HeroLeft = styled.div` flex:1; max-width: 640px; `;
const HeroTitle = styled.h1`
  font-size:46px;line-height:1.02;margin:0 0 18px 0;font-weight:800;display:flex;flex-direction:column;gap:6px;
  span{color:${COLORS.black}}
`;
const Highlight = styled.span`
  color:${COLORS.orange};
`;
const HeroSubtitle = styled.p` margin:0 0 26px 0;font-size:18px;color:rgba(0,0,0,0.65); `;
const HeroCTAs = styled.div` display:flex;gap:16px; `;
const PrimaryCTA = styled.button`
  background:${COLORS.black};color:white;padding:14px 28px;border-radius:14px;border:none;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(10,10,10,0.12);
`;
const OutlineCTA = styled.button`
  background:transparent;color:${COLORS.black};padding:12px 24px;border-radius:14px;border:1.5px solid rgba(10,10,10,0.12);font-weight:700;cursor:pointer;
`;

const HeroRight = styled.div` flex:1; display:flex;justify-content:flex-end; `;
const Blob = styled.div`
  width: 520px; height: 420px; border-radius: 48px; overflow: hidden; position: relative; box-shadow: 0 30px 60px rgba(0,0,0,0.12);
  background: linear-gradient(180deg, #fff 0%, ${COLORS.cream} 100%);
  display:flex;align-items:center;justify-content:center;
`;
const HeroImage = styled.img`
  width:110%; height:110%; object-fit:cover; transform: translateX(6%); border-radius: 30px;
`;

const Section = styled.section` margin-top: 40px; padding: 28px 0; `;
const SectionHeader = styled.div` text-align:left;margin-bottom:22px; `;
const SectionTitle = styled.h2` margin:0;font-size:28px;font-weight:800; `;
const SectionSubtitle = styled.p` margin:8px 0 0 0;color:rgba(0,0,0,0.6); `;

const Categories = styled.div` display:flex;gap:24px; `;
const CategoryCard = styled.div`
  flex:1;background:white;border-radius:18px;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 12px 30px rgba(10,10,10,0.06);padding:18px;
`;
const CategoryImage = styled.img` width:100%; height:180px; object-fit:cover; border-radius:12px; `;
const CategoryLabel = styled.div` margin-top:12px;font-weight:700; `;

const FeatureStrip = styled.div`
  margin:34px 0;padding:18px;background:${COLORS.cream};border-radius:12px;display:flex;gap:18px;justify-content:space-between;align-items:center;box-shadow:0 8px 20px rgba(10,10,10,0.03);
`;
const FeatureItem = styled.div` display:flex;gap:12px;align-items:center;flex:1;min-width:180px; `;
const FeatureIcon = styled.div` width:48px;height:48px;border-radius:10px;background:white;box-shadow:0 6px 16px rgba(0,0,0,0.06);`;

const Products = styled.div` display:flex;gap:24px; `;
const ProductCard = styled.div`
  flex:1;background:white;border-radius:16px;padding:18px;box-shadow:0 18px 40px rgba(10,10,10,0.06);display:flex;flex-direction:column;gap:12px;overflow:hidden;
`;
const ProductImage = styled.img` width:100%; height:220px; object-fit:cover; border-radius:12px; `;
const ProductInfo = styled.div` display:flex;align-items:center;justify-content:space-between;gap:12px; `;
const ProductTitle = styled.div` font-weight:700; `;
const ProductPrice = styled.div` color:rgba(0,0,0,0.75);font-weight:700;margin-top:6px; `;
const ProductActions = styled.div` display:flex;align-items:center;gap:12px; `;
const NewTag = styled.div` background:${COLORS.greenTag};color:white;padding:6px 10px;border-radius:12px;font-weight:700;font-size:13px; `;
const ProductCTA = styled.button` background:${COLORS.black};color:white;padding:10px 16px;border-radius:12px;border:none;font-weight:700;cursor:pointer; `;

const Footer = styled.footer`
  margin-top:48px;background:${COLORS.darkFooter};color:white;padding:36px 24px;border-top:4px solid rgba(255,255,255,0.02);
`;
const FooterInner = styled.div` max-width:1440px;margin:0 auto;display:flex;align-items:flex-start;justify-content:space-between;gap:16px; `;
const FooterLeft = styled.div` flex:1; `;
const LogoFooter = styled.div` display:flex;gap:12px;align-items:center;font-weight:700;font-size:18px; `;
const LogoIconSmall = styled.div` width:28px;height:28px;background:${COLORS.orange};border-radius:6px; `;
const FooterCenter = styled.div` flex:2; display:flex;flex-direction:column;align-items:center;gap:10px; `;
const FooterLinks = styled.div` display:flex;gap:18px; `;
const Copyright = styled.div` font-size:13px;color:rgba(255,255,255,0.6); `;
const FooterRight = styled.div` flex:1; display:flex;justify-content:flex-end; `;
const SocialIcons = styled.div` display:flex;gap:12px; `;
const SocialIcon = styled.div` width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,0.12); `;

// small icons used as placeholders
const LogoIconSmallStyled = styled(LogoIconSmall)``;

// Alias components for clarity
const LogoIconSmallComponent = LogoIconSmallStyled;

// end of file

import { Logo } from 'components/Header/Elements/logo/Logo';
import React from 'react';
import {
  MoreContainer,
  MoreList,
  MoreListItem,
  MoreListItemLink,
  MoreLogo,
  MoreSection,
  MoreTelegram,
  MoreText,
  MoreTextDiscr,
} from './More.styled';
import { useTranslation } from 'react-i18next';
import {
  Facebook,
  Instagram,
  Telegram,
  Tiktok,
  YouTube,
} from 'components/Footer/Footer.styled';

export const More = () => {
  const { t } = useTranslation();
  return (
    <MoreSection>
      <MoreContainer>
        <Logo />
        <MoreText>Stylish clothing store</MoreText>
        <MoreTextDiscr>Follow our social networks</MoreTextDiscr>

        <MoreList>
          <MoreListItem>
            <MoreListItemLink
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MoreLogo style={{ marginRight: 10 }} />
              quillis.com
            </MoreListItemLink>
          </MoreListItem>
          <MoreListItem>
            <MoreListItemLink
              href="https://www.instagram.com/quillis_clothes?igsh=aHI3NzRwZjR5YnNh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram style={{ marginRight: 10 }} />
              Instagram
            </MoreListItemLink>
          </MoreListItem>
          <MoreListItem>
            <MoreListItemLink
              href="https://www.facebook.com/profile.php?id=61557868694003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook style={{ marginRight: 10 }} />
              Facebook
            </MoreListItemLink>
          </MoreListItem>
          <MoreListItem>
            <MoreListItemLink
              href="https://www.tiktok.com/@quillis.clothes?_t=8lZJXwXTpu1&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tiktok style={{ marginRight: 10 }} />
              TikTok
            </MoreListItemLink>
          </MoreListItem>
          <MoreListItem>
            <MoreListItemLink
              href="https://t.me/quillisclothes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MoreTelegram style={{ marginRight: 10 }} />
              Telegram
            </MoreListItemLink>
          </MoreListItem>
          <MoreListItem>
            <MoreListItemLink
              href="https://youtube.com/@Quillis.Clothes?si=HxEt6M_nFi2dHwNj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTube style={{ marginRight: 10 }} />
              YouTube
            </MoreListItemLink>
          </MoreListItem>
        </MoreList>
      </MoreContainer>
    </MoreSection>
  );
};

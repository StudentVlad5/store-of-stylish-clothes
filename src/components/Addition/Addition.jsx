import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  AdditionSection,
  AdditionContainer,
  AdditionAboutWrapper,
  AdditionDataWrapper,
  AdditionTitle,
  FolderWrapper,
  LinkFolder,
} from './Addition.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';

export const Addition = () => {
  return (
    <AdditionSection>
      <AdditionContainer>
        <Title as="h1" hidden>
          Addition
        </Title>
        <AdditionDataWrapper>
          <FolderWrapper>
            {/* <AdditionTitle as="h2">Magazine:</AdditionTitle> */}
            <LinkFolder
              className="linkFolder sideBar_menu"
              to={`/addition/about_company`}
            >
              About company
            </LinkFolder>
            <LinkFolder
              className="linkFolder sideBar_menu"
              to={`/addition/location`}
            >
              Location
            </LinkFolder>
            <LinkFolder
              className="linkFolder sideBar_menu"
              to={`/addition/careers`}
            >
              Careers
            </LinkFolder>
            <LinkFolder
              className="linkFolder sideBar_menu"
              to={`/addition/faq`}
            >
              FAQ
            </LinkFolder>
            <LinkFolder
              className="linkFolder sideBar_menu"
              to={`/addition/blogs`}
            >
              BLOGS
            </LinkFolder>
            <LinkFolder
              className="linkFolder sideBar_menu"
              to={`/addition/shipping`}
            >
              Shipping & Handling
            </LinkFolder>
            <LinkFolder
              className="linkFolder sideBar_menu"
              to={`/addition/guarantee`}
            >
              30-Day Guarantee
            </LinkFolder>
            <LinkFolder
              className="linkFolder sideBar_menu"
              to={`/addition/course`}
            >
              Free Online Course
            </LinkFolder>
            <LinkFolder
              className="linkFolder sideBar_menu"
              to={`/addition/rewards_program`}
            >
              Rewards Program
            </LinkFolder>
            <LinkFolder
              className="linkFolder sideBar_menu"
              to={`/addition/contact`}
            >
              Contact Us
            </LinkFolder>
          </FolderWrapper>
          <AdditionAboutWrapper>
            <Outlet />
          </AdditionAboutWrapper>
        </AdditionDataWrapper>
      </AdditionContainer>
    </AdditionSection>
  );
};

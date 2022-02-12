import styled from 'styled-components/macro';
import React, { FC } from 'react';

export const Table = styled.div<{ none?: boolean }>`
  width: 100%;
  margin-bottom: 40px;
  box-shadow: ${(props) => props.theme.lkMain.boxShadow};
  border-radius: 4px;
  margin-top: 20px;
`;

export const Item = styled.h3<{ item?: boolean }>`
  color: ${(props) => props.theme.lkMain.navLink};
  font-size: 14px;
  font-weight: 300;
  margin-right: 75px;
  min-height: 20px;
  ${({ item }) => {
        if (!item) {
            return `
                @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) {
                    &:nth-child(1) {
                        min-width: 98px;
                    }
                }  
            `;
        }
    }}
  ${({ item }) => {
        if (item) {
            return `
                font-weight: 500;
            `;
        }
    }}
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 56px;
  position: relative;
  background: ${(props) => props.theme.lkMain.depositHeader};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding-left: 20px;
  padding-right: 20px;
  & > h3 {
    margin-right: 109px;
  }
  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) {
    padding-left: 40px;
  }
`;

export const More = styled.button<{ newItems: boolean }>`
  width: 134px;
  height: 38px;
  background: #515172;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  line-height: 16px;
  margin: 0 auto;
  margin-bottom: 40px;
  display: block;
  cursor: pointer;
  font-weight: 500;
  display: ${({ newItems }) => (newItems ? 'block' : 'none')};
`;

export const LinkButton = styled.a`
  width: 122px;
  height: 30px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0094ff;
  border-radius: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  cursor: pointer;
  margin-top: 14px;
`;

type MoreButtonType = {
    newItems: boolean;
    text: string;
    onMore: () => void;
    loadingNewItems: boolean;
};

export const MoreButton: FC<MoreButtonType> = ({
    newItems,
    onMore,
    text,
    loadingNewItems,
}: MoreButtonType) => {
    return (
        <More newItems={newItems} onClick={onMore}>

        </More>
    );
};

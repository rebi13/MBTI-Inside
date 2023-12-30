import { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';

import MainLogoSvg from '@/assets/image/mainlogo.svg?react';

import * as S from './index.styles';

interface SideBarProps {
  children: ReactNode;
}

const SideBar = ({ children }: SideBarProps) => {
  // SideBar 표시 여부 상태 초기화
  const [isChecked, setIsChecked] = useState(false);

  // SideBar Button 클릭 시 상태 변화
  const handleSideBarToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <S.SideBarContainer>
      <S.SideBarToggle
        id="side-bar"
        type="checkbox"
        checked={isChecked}
        readOnly
      />
      <S.SideBarButton htmlFor="side-bar" onClick={handleSideBarToggle}>
        {children}
      </S.SideBarButton>
      <S.SideBarContentContainer>
        <S.SideBarOverlay
          htmlFor="side-bar"
          aria-label="close sidebar"
          onClick={handleSideBarToggle}
        />
        <S.SideBarContent>
          <NavLink to="/" onClick={handleSideBarToggle}>
            <MainLogoSvg />
          </NavLink>
          <NavLink to="/test" onClick={handleSideBarToggle}>
            <S.SiderBarItem>테스트 하러가기</S.SiderBarItem>
          </NavLink>
          <NavLink to="/stats" onClick={handleSideBarToggle}>
            <S.SiderBarItem>통계 보러가기</S.SiderBarItem>
          </NavLink>
          <NavLink to="/board" onClick={handleSideBarToggle}>
            <S.SiderBarItem>담벼락 보러가기</S.SiderBarItem>
          </NavLink>
          <S.SideBarFooter>
            <S.SideBarFooterContent>AYT Company</S.SideBarFooterContent>
            <S.SideBarFooterContent>
              <a
                href="https://github.com/rebi13/MBTI-Inside"
                target="_blank"
                rel="MBTI-Inside noreferrer"
              >
                https://github.com/rebi13/MBTI-Inside
              </a>
            </S.SideBarFooterContent>
          </S.SideBarFooter>
        </S.SideBarContent>
      </S.SideBarContentContainer>
    </S.SideBarContainer>
  );
};

export default SideBar;

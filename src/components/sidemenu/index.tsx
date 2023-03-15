import Link from 'next/link';
import { navs } from './navs';

import * as S from './styles';

export const SideMenu = () => {
  return (
    <S.Container>
      <nav>
        <S.Wrapper>
          {navs.map(({ label, link, icon: Icon }) => (
            <li key={link}>
              <S.Box>
                <Icon weight="bold" size={20} />

                <Link href={link}>{label}</Link>
              </S.Box>
            </li>
          ))}
        </S.Wrapper>
      </nav>
    </S.Container>
  );
};

import React from 'react';
import styled from 'styled-components';

import * as Colors from '../../../growup-ui/Colors';
import Display2 from '../../../growup-ui/typography/Display2';
import Headling1 from '../../../growup-ui/typography/Heading1';

const ServiceIntro: React.FC = () => {
  return (
    <div>
      <Title>
        유익한 정보를 빠르고 쉽게 접근하는 공간, <PointText>ㄱㄹㅇ</PointText>
      </Title>
      <Description color={Colors.slate10} fontWeight="lighter">
        ㄱㄹㅇ은 여러분에게 도움이 되는 정보들을 모아둘게요
      </Description>
      <Description color={Colors.slate10} fontWeight="lighter">
        여러분은 여유가 있을때 언제든지 방문해 정보를 가져가세요
      </Description>
      <Description color={Colors.slate10} fontWeight="lighter">
        당신의 시간은 소중하니까요.
      </Description>
    </div>
  );
};

const Title = styled(Display2)`
  margin-bottom: 15px;
`;

const PointText = styled.span`
  color: ${Colors.brandGreen50};
  font-weight: bold;
`;

const Description = styled(Headling1)`
  margin-bottom: 8px;
`;

export default React.memo(ServiceIntro);

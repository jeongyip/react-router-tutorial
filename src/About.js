import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const parsed = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const detail = parsed.detail ==='true';
  console.log(parsed);

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      {detail && <p>detail 이 트루다!!!!!!!!!!!!</p>}
    </div>
  );
};

export default About;
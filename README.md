# Bori

정적사이트 배포, 도메인 연결, HTTPS 확인을 위한 임시 테스트 페이지입니다.

## 파일

- `index.html`: 테스트 페이지
- `styles.css`: 반응형 스타일
- `script.js`: 현재 접속 호스트 및 HTTPS 사용 여부 표시
- `favicon.svg`: 사이트 아이콘
- `.nojekyll`: GitHub Pages에서 Jekyll 처리 생략

빌드 도구나 외부 라이브러리 없이 동작합니다. `index.html`을 브라우저로 열어 미리 볼 수 있습니다.

## GitHub Pages 배포

1. 파일을 GitHub 저장소에 커밋하고 푸시합니다.
2. 저장소의 **Settings → Pages**에서 **Deploy from a branch**를 선택합니다.
3. 파일을 올린 브랜치와 **/(root)** 폴더를 선택하고 저장합니다.

커스텀 도메인을 사용할 때는 Pages 설정과 DNS를 구성한 뒤 HTTPS 연결을 확인합니다. 도메인이 정해지면 `CNAME` 파일을 추가할 수 있습니다.

페이지의 연결 정보는 현재 브라우저 주소에 근거합니다. DNS 전파 상태나 인증서 발급 상태를 직접 검사하지는 않으므로 브라우저에서도 인증서를 확인하세요.

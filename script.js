"use strict";

const isHttps = window.location.protocol === "https:";
const isLocalFile = window.location.protocol === "file:";

document.getElementById("hostname").textContent = window.location.host || "로컬 파일";
document.getElementById("protocol").textContent = isLocalFile
  ? "FILE · 로컬 미리보기"
  : window.location.protocol.replace(":", "").toUpperCase();
document.getElementById("https-status").textContent = isHttps ? "HTTPS로 접속됨" : "HTTPS 미사용";
document.getElementById("connection-note").textContent = isHttps
  ? "현재 페이지는 HTTPS 주소로 열렸습니다. 인증서의 유효성은 브라우저의 사이트 정보에서 확인하세요."
  : isLocalFile
    ? "로컬 파일로 미리보기 중입니다. 배포 후 도메인 주소로 접속해 HTTPS 연결을 확인하세요."
    : "현재 페이지는 HTTP 주소로 열렸습니다. HTTPS 주소로 접속해 연결 상태를 확인하세요.";

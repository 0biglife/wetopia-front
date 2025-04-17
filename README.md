## Tech Stack

Framework: Next.js 15.2 (App Router)

State Management: Recoil, React Query

Styling: Emotion (CSS-in-JS)

Type Checking: TypeScript

Package Manager: Yarn Berry (PnP, loose mode)

Lint / Format: ESLint, Prettier

## Service Function

- 미 증시 현황

- 구상중.. 디자인도.. 뭔가 여태 없으면서 효율적인게 ..

## Directory Structure

```bash
/wetopia
 ├── /public  → 정적 파일
 ├── /src
 │    ├── /app
 │    │    ├── /news
 │    │    │    ├── page.tsx  → 블로그 목록 페이지
 │    │    ├── /page.tsx  → 메인 페이지
 │    │    ├── /layout.tsx  → 공통 레이아웃
 │    ├── /components  → UI 및 공용 컴포넌트
 │    │    ├── /...
 │    ├── /lib  → API, 유틸 함수 ..
 │    ├── /hooks  → 커스텀 훅 (React Query, Recoil 연동)
 │    ├── /styles  → Emotion 스타일
 │    ├── /types  → 타입 인터페이스
 ├── /next.config.js
```

## Component Structure

- 블록 쌓듯이 명시적이고 유지보수에 최적화된 계층 구조 디자인

- Atoms Design Pattern의 어려운 네이밍만 버리고 철학 인용

```bash
/src/components/
  ├── base/         # 가장 작은 디자인 단위 (Button, Text)
  ├── block/        # UI 구성요소 조합 (FormRow, CardHeader)
  ├── domain/       # 중간 단위 UI, 명확한 용도별 그룹 컴포넌트
  └── container/    # 상태 관리 포함
```

<br />

## Getting Started

### Installation

```bash
git clone https://github.com/yourname/wetopia.git
cd wetopia
yarn install
```

이 프로젝트는 Yarn 4 + Plug'n'Play (PnP) 환경을 사용합니다. `.yarnrc.yml` 설정에 따라 PnP 모드에서 동작하며, 일부 도구 호환을 위해 pnpMode: loose로 설정된 상태입니다.

### Run & Build

```bash
yarn dev
yarn build
yarn start
```

## Commit Conventions

이 프로젝트는 Conventional Commits을 따릅니다.

- `feat: 대시보드 페이지에 실시간 주식 차트 추가`
- `fix: 글로벌 스타일 초기화 문제 해결`

와 같은 형태로 기능 추가, 이슈 수정 등 코드 푸시를 진행합니다.

## 테스트 (추가 예정)

Jest / @testing-library/react / Playwright

## Technical Function

- App Router 기반 구조화된 라우팅

- React Query로 SSR + CSR 통합 상태 관리

- Recoil을 통한 클라이언트 상태 관리

- Chakra-ui 기반 글로벌 및 컴포넌트 스타일링

<br />

## Deployment

- Frontend : Next.js(AWS Amplify)

- Backend(Go) : Nest.js(AWS App Runner)

- DB : postgresql(neon)

##

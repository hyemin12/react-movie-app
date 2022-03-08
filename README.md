# TMDB API를 활용한 영화검색 사이트

<a href="https://react-movie-app-1f5ff8.netlify.app" target="_blank" >
<img src="./md_img/main2.png">
</a>

Click image

<br>
<hr>
<br>

## 사용한 API

tmdb api
영화 또는 TV 시리즈의 정보를 요청해서 가져올 수 있고,
한국에 소개되지 않은 컨텐츠들도 찾을 수 있음  
공식사이트 (https://developers.themoviedb.org/3)

<br>

## 기능

1. 인기 영화, 현재 상영중인 영화, 개봉 예정 영화, 높은 평점 영화 정보 가져오기
2. 해당 영화 제목 클릭 시 영화 상세정보 페이지로 이동하기
   - 상세정보: 원제, 개봉일, 상영시간, 배우, 감독, 제작사, 장르, 평점, 줄거리, 이미지, 키워드, 비슷한 영화, 소셜 미디어 링크

<br>

## 페이지 구성 (routes)

@ Home - 인기 영화 리스트 <Br>
@ NowPlaying - 현재 상영중인 영화 리스트  
@ UpComing - 개봉 예정 영화 리스트  
@ TopRated - 높은 평점의 영화 리스트  
@ Search - 검색 결과 페이지  
@ Detail - 영화 상세 정보 페이지

<br>
<hr>
<br>

## API 요청하기 (비동기 async / await)

axios 라이브러리를 설치하여, api 요청함

```js
const getMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=ko&page=1®ion=KR`
  );
  setMovies(response.data.results);
  setLoading(false);
};

// 페이지가 라우팅되면 API 요청하는 함수 실행
useEffect(() => {
  getcomingMovies();
}, []);
```

<br>
<hr>
<br>

## 검색 기능 구현하기 (Context API 활용)

\_\_ Header component 안에 검색 input 태그 작성

\_\_ src 폴더와 동일 루트에 글로벌로 관리할 context 파일 만들기(search_context.js)

\_\_ 사용자가 입력값을 입력하고 enter를 누르거나, 검색 아이콘을 누르면 진행할 함수 만들기

- 사용자가 입력한 값을 변수 query 받아와서 검색값 요청하고, 받아오기
- /search/입력값 페이지로 이동하고, input box의 값 초기화

```js
const handleSearch = async () => {
  const result = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
    params: {
      query: query,
      api_key: KEY,
      language: "ko",
    },
  });
  setInputQuery(result.data);
  history.push(`/search/${query}`);
  setQuery("");
  setIsSearch(false);
  console.log(result.data);
};
```

\_\_ 검색결과 페이지에서 공유된 state를 가져와 페이지에 데이터바인딩하기

- searchMovies: 검색 결과 array

```js
import MovieList from "../components/MovieList.js";
import { useSearchContext } from "../search_context.js";

function Search() {
  const { inputQuery } = useSearchContext();
  console.log(inputQuery);

  const searchMovies = inputQuery.results;
  return "나머지 코드들";
}
```

<br>
<hr>
<br>

const addBtn = document.querySelector('.fa-plus'); // 추가버튼
const input = document.querySelector('.footer_input'); //인풋요소!!!
const items = document.querySelector('.items'); // ul 요소
//클래스 이름으로 검색. css 선택자는 쿼리로 선택 가능
// 첫번째 선택 하나만 잡음!;
function createItem(text) {
  console.log(text);
  const itemRow = document.createElement('li');
  itemRow.className = 'item';
  itemRow.innerHTML = ` <li class="item">
          <span>${text}</span>
          <i class="fa-solid fa-check"></i>
          <i class="fa-solid fa-trash-can"></i>
          <i class="fa-solid fa-pencil"></i>
          
        </li>`;
  // <i class="fa-solid fa-clock"></>
  //체크버튼 클릭시 클래스 추가 함수 이벤트.
  itemRow.querySelector('.fa-check').addEventListener('click', () => {
    itemRow.classList.toggle('item_done');
  });
  //삭제버튼 클릭 시 itemRow 제거 버튼
  itemRow.querySelector('.fa-trash-can').addEventListener('click', () => {
    itemRow.remove();
  });
  itemRow.querySelector('.fa-pencil').addEventListener('click', () => {
    itemRow.innerHTML = `<input type="text" class="inputSmall" placeholder='수정할 문구'/>
    <i class="fa-solid fa-check small-fa"></i>`;
    const $addBtnSmall = document.querySelector('.small-fa');
    $addBtnSmall.addEventListener('click', () => {
      //여기에 작성
      const inputSmall = document.querySelector('.inputSmall');
      const subtext = inputSmall.value.trim();
      if (!subtext) {
        inputSmall.value = '';
        inputSmall.focus();
        return;
      }
      items.appendChild(createItem(subtext));
      inputSmall.value = '';
      inputSmall.focus();
      //여기에 작성
      inputSmall.style.display = 'none';
      itemRow.style.display = 'none';
    });
  });

  // 여기 생각
  // itemRow.querySelector('.small-fa').addEventListener('click', () => {
  //   const inputSmall = document.querySelector('.inputSmall');
  //   const subtext = inputSmall.value.trim();
  //   if (!subtext) {
  //     inputSmall.value = '';
  //     inputSmall.focus();
  //     return;
  // }
  //   items.appendChild(createItem(subtext));
  //   inputSmall.value = '';
  //   inputSmall.focus();
  //   inputSmall.style.display = 'none';
  //   itemRow.style.display = 'none';
  // item.style.display = 'none';

  // itemRow.querySelector('.fa-clock').addEventListener('click', () => {
  //   itemRow.innerHTML = `<input type="text" class="inputSmall" />`;
  //   // console.log(itemRow);
  //   const inputSmall = document.querySelector('.inputSmall');
  //   // const addBtnSmall = document.querySelector()
  // });여기 못했어!!!!!
  //   itemRow.scrollIntoView({ block: 'center' });
  //   setTimeout(() => itemRow.scrollIntoView({ block: 'center' }), 0);
  requestAnimationFrame(() => itemRow.scrollIntoView({ block: 'center' }));

  return itemRow;
  //
  //
  //if 로 addbtnsmall 클릭되면 실행되게끔!!!!
}

//
//
//

//   const itemRow = ' <li class= item></li>
//이렇게 생성하면 나중에 효과 안에 집어넣기 힘들다고

function onAdd() {
  console.log('함수가 실행됐어!');
  const text = input.value.trim();
  //trim 으로 공백을 제거해줌.
  console.log(text);
  //   if (!text) {
  //     input.focus();
  //     return;
  if (!text) {
    input.value = '';
    input.focus();
    return;
  }
  //li 생성 함수 -createItem(text)
  // ul에 생성값을 추가함!
  items.appendChild(createItem(text));
  input.value = '';
  input.focus();
}
//이벤트 등록
addBtn.addEventListener('click', onAdd);

// input.addEventListener('keypress', (e) => {
//   console.log(e);
//   if (e.key === 'Enter') {
//     onAdd();
//   }
// });
// const $addBtnSmall = document.querySelector('.small-fa');
// function onAddSmall() {
//   console.log('작은 함수 실행');
// }

// $addBtnSmall.addEventListener('click', onAddSmall);
//여기 못했어!!!!
// function onAddSmall() {
//   console.log('함수가 실행됐어!');
//   const textSmall = inputSmall.value.trim();
//   //trim 으로 공백을 제거해줌.
//   console.log(textSmall);
//   //   if (!text) {
//   //     input.focus();
//   //     return;
//   if (!textSmall) {
//     inputSmall.value = '';
//     inputSmall.focus();
//     return;
//   }
//   //li 생성 함수 -createItem(text)
//   // ul에 생성값을 추가함!
//   if (code == 'Enter')
//   input.value = input + ` <sup>${text}</sup>`;
//   input.focus();
// }
//이벤트 등록
// addBtnSmall.addEventListener('click', onAddSmall);

const koreanNoodle = ['비빔국수', '라면', '잔치국수', '콩국수', '냉면'];
const koreanMeal = ['제육볶음', '낙지 볶음', '불고기', '삼겹살', '한우'];
const koreanSoup = ['김치찌개', '된장찌개', '부대찌개', '갈비탕', '순두부찌개'];
const chineseNoodle = ['짜장면', '짬뽕', '볶음면', '고추잡채', '탄탄면'];
const chineseMeal = ['새우볶음밥', '마파두부', '탕수육', '라조기', '난자완스'];
const chineseSoup = ['계란탕', '유산슬', '누룽지탕', '마라탕', '짬뽕'];
const japaneseNoodle = ['모밀', '우동', '야끼소바', '라멘', '나베야키'];
const japaneseMeal = ['초밥', '알밥', '사시미', '텐동', '사케동'];
const japaneseSoup = ['미소된장국', '스키야키', '나베야키', '라멘', '샤브샤브'];
const westernNoodle = [
  '까르보나라',
  '투움바파스타',
  '알리오 올리오',
  '쉬림프 아라비아따',
  '로제 파스타',
];
const westernMeal = ['돈까스', '햄버거', '바베큐', '스테이크', ' 샐러드'];
const westernSoup = [
  '양송이 스프',
  '옥수수 스프',
  '토마토 스프',
  '치킨누들스프',
  '비프스튜',
];
input.addEventListener('keyup', (e) => e.key === 'Enter' && onAdd());
//
const $k_noodle = document.querySelector('.a_lb');
const $k_meal = document.querySelector('.b_lb');
const $k_soup = document.querySelector('.c_lb');
const $c_noodle = document.querySelector('.d_lb');
const $c_meal = document.querySelector('.e_lb');
const $c_soup = document.querySelector('.f_lb');
const $j_noodle = document.querySelector('.g_lb');
const $j_meal = document.querySelector('.h_lb');
const $j_soup = document.querySelector('.i_lb');
const $w_noodle = document.querySelector('.j_lb');
const $w_meal = document.querySelector('.k_lb');
const $w_soup = document.querySelector('.l_lb');

function k_noodles() {
  const randomValues =
    koreanNoodle[Math.floor(Math.random() * koreanNoodle.length)];
  document.querySelector('#roulette').innerHTML = `<p>${randomValues}</p>`;
  console.log(randomValues);
}
function k_meals() {
  const randomValues =
    koreanMeal[Math.floor(Math.random() * koreanMeal.length)];
  document.querySelector('#roulette').innerHTML = `<p>${randomValues}</p>`;
  console.log(randomValues);
}
$k_noodle.addEventListener('click', k_noodles);
$k_meal.addEventListener('click', k_meals);

function k_soups() {
  const randomValues =
    koreanSoup[Math.floor(Math.random() * koreanNoodle.length)];
  document.querySelector('#roulette').innerHTML = `<p>${randomValues}</p>`;
  console.log(randomValues);
}
$k_soup.addEventListener('click', k_soups);

function c_noodles() {
  const randomValues =
    chineseNoodle[Math.floor(Math.random() * chineseNoodle.length)];
  document.querySelector('#roulette').innerHTML = `<p>${randomValues}</p>`;
  console.log(randomValues);
}
$c_noodle.addEventListener('click', c_noodles);

function c_meals() {
  const randomValues =
    chineseMeal[Math.floor(Math.random() * chineseMeal.length)];
  document.querySelector('#roulette').innerHTML = `<p>${randomValues}</p>`;
  console.log(randomValues);
}
$c_meal.addEventListener('click', c_meals);

function c_soups() {
  const randomValues =
    chineseSoup[Math.floor(Math.random() * koreanNoodle.length)];
  document.querySelector('#roulette').innerHTML = `<p>${randomValues}</p>`;
  console.log(randomValues);
}
$c_soup.addEventListener('click', c_soups);

function j_noodles() {
  const randomValues =
    japaneseNoodle[Math.floor(Math.random() * japaneseNoodle.length)];
  document.querySelector('#roulette').innerHTML = `<p>${randomValues}</p>`;
  console.log(randomValues);
}
$j_noodle.addEventListener('click', j_noodles);

function j_meals() {
  const randomValues =
    japaneseMeal[Math.floor(Math.random() * japaneseMeal.length)];
  document.querySelector('#roulette').innerHTML = `<p>${randomValues}</p>`;
  console.log(randomValues);
}
$j_meal.addEventListener('click', j_meals);

function j_soups() {
  const randomValues =
    japaneseSoup[Math.floor(Math.random() * japaneseNoodle.length)];
  document.querySelector('#roulette').innerHTML = `<p>${randomValues}</p>`;
  console.log(randomValues);
}
$j_soup.addEventListener('click', j_soups);

function w_noodles() {
  const randomValues =
    westernNoodle[Math.floor(Math.random() * westernNoodle.length)];
  document.querySelector('#roulette').innerHTML = `<p>${randomValues}</p>`;
  console.log(randomValues);
}
$w_noodle.addEventListener('click', w_noodles);

function w_meals() {
  const randomValues =
    westernMeal[Math.floor(Math.random() * westernMeal.length)];
  document.querySelector('#roulette').innerHTML = `<p>${randomValues}</p>`;
  console.log(randomValues);
}
$w_meal.addEventListener('click', w_meals);

function w_soups() {
  const randomValues =
    westernSoup[Math.floor(Math.random() * westernNoodle.length)];
  document.querySelector('#roulette').innerHTML = `<p>${randomValues}</p>`;
  console.log(randomValues);
}
$w_soup.addEventListener('click', w_soups);
function display() {
  if ($lunchHead.style.display == 'none') {
    console.log('d');
    $lunchHead.style.display = 'block';
    $roulette.style.display = 'block';
    $a_lb.style.display = 'inline';
    $b_lb.style.display = 'inline';
    $c_lb.style.display = 'inline';
    $d_lb.style.display = 'inline';
    $e_lb.style.display = 'inline';
    $f_lb.style.display = 'inline';
    $g_lb.style.display = 'inline';
    $h_lb.style.display = 'inline';
    $i_lb.style.display = 'inline';
    $j_lb.style.display = 'inline';
    $k_lb.style.display = 'inline';
    $l_lb.style.display = 'inline';
    $back.style.display = 'block';
    $lunchfooter.style.display = 'block';
  } else {
    ($lunchHead.style.display = 'none'),
      ($roulette.style.display = 'none'),
      ($a_lb.style.display = 'none');
    $b_lb.style.display = 'none';
    $c_lb.style.display = 'none';
    $d_lb.style.display = 'none';
    $e_lb.style.display = 'none';
    $f_lb.style.display = 'none';
    $g_lb.style.display = 'none';
    $h_lb.style.display = 'none';
    $i_lb.style.display = 'none';
    $j_lb.style.display = 'none';
    $k_lb.style.display = 'none';
    $l_lb.style.display = 'none';
    $back.style.display = 'none';
    $lunchfooter.style.display = 'none';
  }
}
const $lunchBtn = document.querySelector('.lunchBtn');
const $lunchHead = document.querySelector('.lunchHead');
const $roulette = document.querySelector('#roulette');
const $a_lb = document.querySelector('.a_lb');
const $b_lb = document.querySelector('.b_lb');
const $c_lb = document.querySelector('.c_lb');
const $d_lb = document.querySelector('.d_lb');
const $e_lb = document.querySelector('.e_lb');
const $f_lb = document.querySelector('.f_lb');
const $g_lb = document.querySelector('.g_lb');
const $h_lb = document.querySelector('.h_lb');
const $i_lb = document.querySelector('.i_lb');
const $j_lb = document.querySelector('.j_lb');
const $k_lb = document.querySelector('.k_lb');
const $l_lb = document.querySelector('.l_lb');
$lunchBtn.addEventListener('click', display);
const $back = document.querySelector('.back');
const $lunchfooter = document.querySelector('.lunchFooter');

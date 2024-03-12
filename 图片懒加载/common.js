// 图片url列表
const images = [
  'https://h2.ioliu.cn/bing/Latern2022_ZH-CN0112710917_640x480.jpg?imageslim',
  'https://h2.ioliu.cn/bing/MaldivesHeart_ZH-CN0032539727_640x480.jpg?imageslim',
  'https://h2.ioliu.cn/bing/FaceOff_ZH-CN9969100257_640x480.jpg?imageslim',
  'https://h2.ioliu.cn/bing/DarwinsArch_ZH-CN9740478501_640x480.jpg?imageslim',
  'https://h2.ioliu.cn/bing/TeaGardensMunnar_ZH-CN9587720369_640x480.jpg?imageslim',
  'https://h2.ioliu.cn/bing/SnowyBern_ZH-CN5472524801_640x480.jpg?imageslim',
  'https://h2.ioliu.cn/bing/SevenSistersCliffs_ZH-CN5362127173_640x480.jpg?imageslim',
  'https://h2.ioliu.cn/bing/SpeloncatoSnow_ZH-CN8115437163_640x480.jpg?imageslim',
  'https://h2.ioliu.cn/bing/WinterludeIce_ZH-CN7868524911_640x480.jpg?imageslim',
  'https://h2.ioliu.cn/bing/Oymyakon_ZH-CN7758768574_640x480.jpg?imageslim',
  'https://h2.ioliu.cn/bing/MexicoMonarchs_ZH-CN7526758236_640x480.jpg?imageslim',
  'https://h2.ioliu.cn/bing/WinterOlymics_ZH-CN7384614076_640x480.jpg?imageslim',
  '233'
];

// 未加载时默认url
const defaultUrl =
  'data:image/svg+xml;base64,PHN2ZyB0PSIxNjQ0ODk5MzI0NDgwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwOTMiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNODc0LjEgODEzLjc1SDE0OS45Yy0yMi4yMiAwLTQwLjIzLTE4LjAxLTQwLjIzLTQwLjIzVjI1MC40OWMwLTIyLjIyIDE4LjAxLTQwLjIzIDQwLjIzLTQwLjIzaDcyNC4yYzIyLjIyIDAgNDAuMjMgMTguMDEgNDAuMjMgNDAuMjN2NTIzLjAzYzAgMjIuMjEtMTguMDIgNDAuMjMtNDAuMjMgNDAuMjN6TTI4MC42NiAzMTAuODRjLTM4Ljg5IDAtNzAuNDEgMzEuNTItNzAuNDEgNzAuNDFzMzEuNTIgNzAuNDEgNzAuNDEgNzAuNDEgNzAuNDEtMzEuNTIgNzAuNDEtNzAuNDEtMzEuNTItNzAuNDEtNzAuNDEtNzAuNDF6IG01MTIuOTcgMTAwLjU4YzAtMjIuMjItMTguMDEtNDAuMjMtNDAuMjMtNDAuMjNoLTQwLjIzYy02Ni42NiAwLTEyMC43IDU0LjA0LTEyMC43IDEyMC43djQwLjIzYzAgMzMuMzMtMjcuMDIgNjAuMzUtNjAuMzUgNjAuMzUtMTguMjkgMC0zNC40Ny04LjMxLTQ1LjU0LTIxLjE1LTAuMDUtMC4wNi0wLjI1LTAuMjgtMC4yOS0wLjMzLTIyLjA5LTI0LjA1LTU5Ljc3LTM4Ljg2LTk0Ljk4LTM4Ljg2LTAuNDQgMC0wLjg0IDAuMTItMS4yOCAwLjEzbC0wLjA2LTAuMDZjLTg4LjI2IDAuNzMtMTU5LjU5IDcyLjQ0LTE1OS41OSAxNjAuODYgMCAyMi4yMiAxOC4wMSA0MC4yMyA0MC4yMyA0MC4yM0g3NTMuNGMyMi4yMiAwIDQwLjIzLTE4LjAxIDQwLjIzLTQwLjIzVjQxMS40MnoiIHAtaWQ9IjIwOTQiIGZpbGw9IiNjZGNkY2QiPjwvcGF0aD48L3N2Zz4=';

// 加载错误时代替
const errorUrl =
  'data:image/svg+xml;base64,PHN2ZyB0PSIxNjQ0ODk5ODEzMDQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0OTEiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNNjQuMzgzMjM0IDUxMkM2NC4zODMyMzQgMjY0Ljc4NzgyOSAyNjQuNzg3ODI5IDY0LjM4MzIzNCA1MTIgNjQuMzgzMjM0IDc1OS4yMTIxNzEgNjQuMzgzMjM0IDk1OS42MTY3NjYgMjY0Ljc4NzgyOSA5NTkuNjE2NzY2IDUxMiA5NTkuNjE2NzY2IDc1OS4yMTIxNzEgNzU5LjIxMjE3MSA5NTkuNjE2NzY2IDUxMiA5NTkuNjE2NzY2IDI2NC43ODc4MjkgOTU5LjYxNjc2NiA2NC4zODMyMzQgNzU5LjIxMjE3MSA2NC4zODMyMzQgNTEyWk00NzQuMjMyMzc5IDc3MS4yNDUxMjRDNDg ...';

function initImag() {
  let container = document.getElementById('imageContainer');

  // 清空容器
  container.innerHTML = '';

  images.forEach((imageUrl, index) => {
    let img = document.createElement('img');
    img.src = defaultUrl; // 设置默认图片
    img.dataset.src = imageUrl; // 设置data-src属性为对应的图片链接
    container.appendChild(img);
  });
}

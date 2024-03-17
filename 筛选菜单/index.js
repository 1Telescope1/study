const menus = [
  {
    name: "menu1",
    hidden: false,
    children: [
      {
        name: "menu1-1",
        hidden: false,
      },
      {
        name: "menu1-2",
        hidden: () => {
          return Math.random() * 10 > 5;
        },
      },
    ],
  },
  {
    name: "menu2",
    hidden: true,
  },
];

function fn(res) {
  function test(menus) {
    menus = menus.filter((item) => {
      if (typeof item.hidden === "function") {
        return !item.hidden(); // 执行函数并判断返回值
      }
      return item.hidden !== true;
    });

    for (let i = 0; i < menus.length; i++) {
      if (menus[i].children) menus[i].children = test(menus[i].children);
    }
    return menus
  }
  
  return test(res);;
}

console.log(fn(menus));
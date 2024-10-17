function createElement(vnode) {
  // 如果 vnode 是字符串类型，创建文本节点
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }

  // 根据 vnode 的 type 创建对应的 DOM 元素
  const dom = document.createElement(vnode.type);

  // 遍历 vnode 的 props，将其属性赋给 DOM 元素
  if (vnode.props) {
    Object.keys(vnode.props).forEach(key => {
      dom.setAttribute(key, vnode.props[key]);
    });
  }

  // 递归处理 vnode 的子节点
  vnode.children.forEach(child => {
    dom.appendChild(createElement(child));
  });

  return dom;
}

const vdom = {
  type: 'div',
  props: { id: 'container', class: 'my-class' },
  children: [
    {
      type: 'h1',
      props: {},
      children: ['Hello, World!']
    },
    {
      type: 'p',
      props: {},
      children: ['This is a virtual DOM to real DOM example.']
    }
  ]
};

// 测试虚拟 DOM 转换
const realDom = createElement(vdom);
document.body.appendChild(realDom);

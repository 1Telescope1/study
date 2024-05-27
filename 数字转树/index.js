//实现convert函数，将数组转换为树结构

const nodes = [
  { id: 3, name: '节点C', parentId: 1 },

  { id: 6, name: '节点F', parentId: 3 },

  { id: 0, name: 'root', parentId: null },

  { id: 1, name: '节点A', parentId: 0 },

  { id: 8, name: '节点H', parentId: 4 },

  { id: 4, name: '节点D', parentId: 1 },

  { id: 2, name: '节点B', parentId: 0 },

  { id: 5, name: '节点E', parentId: 2 },

  { id: 7, name: '节点G', parentId: 2 },

  { id: 9, name: '节点I', parentId: 5 }
];

function convert(nodes) {
  let root = null;
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].parentId == null) {
      root = nodes[i];
      break;
    }
  }

  function fn(root, nodes) {
    const arr = nodes.filter((item) => {
      return item.parentId == root.id;
    });
    root.children = arr;

    for (let i = 0; i < root.children.length; i++) {
      fn(root.children[i], nodes);
    }
  }
  fn(root, nodes);

  // 编写转换逻辑

  return root;
}

function convert2(nodes) {
  const map = new Map();
  nodes.forEach((node) => {
    map.set(node.id, node);
  });
  nodes.forEach((node) => {
    if (map.get(node.parentId)) {
      const parent = map.get(node.parentId);
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(node);
    }
  });
  return map.get(0);
}

const newTree = convert(nodes);

const newTree2 = convert2(nodes);

// console.log(JSON.stringify(newTree));

// console.log(newTree2);
console.log(JSON.stringify(newTree2));

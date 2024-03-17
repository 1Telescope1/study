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

]

function convert(nodes){

    let root = null;
    for(let i=0;i<nodes.length;i++) {
        if(nodes[i].parentId==null) {
            root=nodes[i]
            nodes.splice(i,1)
            break
        }
    }

    function fn(root,nodes) {
        const arr=nodes.filter(item=>{
            return item.parentId==root.id
        })
        root.children=arr
        nodes=nodes.filter(item=>{
            return !arr(item)
        })
        
        for(let i=0;i<root.children.length;i++) {
            fn(root.children[i],nodes)
        }
    }
    fn(root,nodes)

    // 编写转换逻辑

    return root;

}

const newTree = convert(nodes)

console.log(JSON.stringify(newTree));
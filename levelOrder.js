class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function levelOrder(root) {
    if (!root) {
      return [];
    }
    const queue = [root];
    const generations = [];
    while (queue.length !==0) {
      const size = queue.length;
      const level = [];
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        level.push(node.data);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      generations.push(level);
    }
    return generations;
  }
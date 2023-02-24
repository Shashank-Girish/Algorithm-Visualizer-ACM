class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

function inOrder(root){
    if (root!==null){
        inOrder(root.left);
        console.log(root.data);
        inOrder(root.right);
    }
}
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

function postOrder(root){
    if (root!==null){
        postOrder(root.left);
        postOrder(root.right);
        onsole.log(root.data);
    }
}